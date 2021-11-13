import IUserApplication from "./interface/IUserApplication";
import TokenRepository from "../infrastructure/repository/TokenRepository";
import UserRepository from "./../infrastructure/repository/UserRepository";
import ResumeRepository from "../infrastructure/repository/ResumeRepository";
import IResumeMapper from "../domain/resume-domain/IResumeMapper";
import ITokenMapper from "../domain/token-domain/ITokenMapper";
import cookieParser from "cookie-parser";
import IUserMapper from "../domain/user-domain/IUserMapper";
import jwt_decode from "jwt-decode";
import express from "express";
import jwt from "jsonwebtoken";
import {
    REPERTED_EMAIL_OR_PASSWORD,
    SUUCEESS_CREATE_ACCOUNT,
} from "../0_framework/constant/messages";
import {
    comparePassword,
    hashPassword,
} from "./../0_framework/middlewares/bcrypt";
import { ErrorHandler } from "./../infrastructure/utils/ErrorHandler";
import { Signjwt } from "./../0_framework/middlewares/jwt";

const app = express();
app.use(cookieParser());

class UserApplication implements IUserApplication {
    private _repo: UserRepository;

    constructor() {
        this._repo = new UserRepository();
    }

    async registerUser(req: any, res: any) {
        const body = req.body;
        const _token = new TokenRepository();
        const _resume = new ResumeRepository();

        const passwordHashed = await hashPassword(body.password);
        try {
            const newData = {
                username: body.username,
                name: body.name,
                lastname: body.lastname,
                email: body.email,
                phone: body.phone,
                password: passwordHashed,
            };
            const checker = await this._repo.findByIdResult({
                $or: [
                    {
                        username: req.body.username,
                    },
                    {
                        email: req.body.email,
                    },
                    {
                        phone: req.body.phone,
                    },
                ],
            });
            if (checker.length !== 0) {
                return ErrorHandler(res, 400, REPERTED_EMAIL_OR_PASSWORD);
            }
            const userAccount = await this._repo.createCallback(
                <IUserMapper>newData
            );

            if (userAccount === null || userAccount === undefined) {
                return ErrorHandler(res, 400, REPERTED_EMAIL_OR_PASSWORD);
            }

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, "0");
            var mm = String(today.getMonth() + 1).padStart(2, "0");
            var yyyy = today.getFullYear();

            const token = Signjwt(`${userAccount._id}`, "user");
            const tokenData = {
                userid: `${userAccount._id}`,
                token: token,
                date: mm + "/" + dd + "/" + yyyy,
            };
            const tokens = await _token.createCallback(<ITokenMapper>tokenData);
            if (tokens || token !== null) {
                res.json({
                    status: 200,
                    message: SUUCEESS_CREATE_ACCOUNT,
                    result: userAccount,
                    token: {
                        userid: tokenData.userid,
                        token: tokenData.token,
                    },
                });
            } else {
                return ErrorHandler(res, 400, REPERTED_EMAIL_OR_PASSWORD);
            }
        } catch (error) {
            return ErrorHandler(res, 400, REPERTED_EMAIL_OR_PASSWORD);
        }
    }

    async loginUser(req: any, res: any) {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({
                status: 400,
                message: "ENTER_EMAIL_OR_PASSWORD",
            });
        }
        const _tokenRepo = new TokenRepository();
        await this._repo.findOneByEmail(req.body.email, (error, result) => {
            try {
                if (error) {
                    return res.status(400).json({
                        ststus: 400,
                        message: REPERTED_EMAIL_OR_PASSWORD,
                    });
                }
                if (result !== null) {
                    const tokenGetter = async () => {
                        const getUserToken = await _tokenRepo.findByIdResult({
                            userid: `${result._id}`,
                        });
                        const token = getUserToken[0];
                        comparePassword(
                            req.body.password,
                            result.password
                        ).then((Response) => {
                            if (Response) {
                                res.json({
                                    ststus: 200,
                                    message: "successfull",
                                    result,
                                    token: token,
                                });
                            } else {
                                return res.status(400).json({
                                    ststus: 400,
                                    message: REPERTED_EMAIL_OR_PASSWORD,
                                });
                            }
                        });
                    };

                    tokenGetter();
                }
                if (result === null && error === null) {
                    return res.status(400).json({
                        ststus: 400,
                        message: REPERTED_EMAIL_OR_PASSWORD,
                    });
                }
            } catch (error) {
                return res.status(400).json({
                    ststus: 400,
                    message: REPERTED_EMAIL_OR_PASSWORD,
                });
            }
        });
    }

    async checkToken(req: any, res: any) {
        const token = req.body.token;

        if (!token) {
            return res.status(400).json({
                status: 400,
                message: "ENTER_EMAIL_OR_PASSWORD",
            });
        }

        const _tokenRepo = new TokenRepository();

        const decode: any = jwt_decode(token);

        const identity = decode.identity;

        if (!identity)
            return res.status(400).json({
                ststus: 400,
                message: REPERTED_EMAIL_OR_PASSWORD,
            });

        const userData = await this._repo.findOne({ _id: identity });
        if (!userData?._id) {
            return res.status(400).json({
                ststus: 400,
                message: REPERTED_EMAIL_OR_PASSWORD,
            });
        }

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0");
        var yyyy = today.getFullYear();

        const exp = decode.exp;

        jwt.verify(
            token,
            process.env.JWT_SECRET_KEY as string,
            async function (err: any, decoded: any) {
                if (!err) {
                    const result = await _tokenRepo.findByIdResult({
                        userid: identity,
                    });
                    res.json({ message: "Okay" });
                }
                if (err) {
                    const token = Signjwt(`${identity}`, "user");
                    const tokenData = token;

                    const renewToken = await _tokenRepo.findAndUpdate(
                        { userid: `${userData?._id}` },
                        { token: tokenData }
                    );

                    const newUserData = {
                        token: renewToken,
                        result: userData,
                    };

                    return res.json({
                        message: "Not Okay",
                        token: newUserData,
                    });
                }
            }
        );
    }
}

export default UserApplication;
