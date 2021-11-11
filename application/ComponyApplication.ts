import ComponyInfoRepository from "./../infrastructure/repository/ComponyInfoRepository";
import IComponyApplication from "./interface/IComponyApplication";
import ComponyRepository from "../infrastructure/repository/ComponyRepository";
import TokenRepository from "../infrastructure/repository/TokenRepository";
import JobRepository from "../infrastructure/repository/JobRepository";
import IComponyMapper from "../domain/compony-domain/IComponyMapper";
import ITokenMapper from "../domain/token-domain/ITokenMapper";
import fileUpload from "express-fileupload";
import jwt_decode from "jwt-decode";
import express from "express";
import jwt from "jsonwebtoken";
import { ErrorHandler } from "./../infrastructure/utils/ErrorHandler";
import { Signjwt } from "../0_framework/middlewares/jwt";
import {
    REPERTED_EMAIL_OR_PASSWORD,
    SUUCEESS_CREATE_ACCOUNT,
    DUE_SUCCESSFULL,
    NO_ITEM_TO_SHOW,
    BAD_REQUEST,
} from "../0_framework/constant/messages";
import {
    comparePassword,
    hashPassword,
} from "./../0_framework/middlewares/bcrypt";

const app = express();

app.use(fileUpload());

class ComponyApplication implements IComponyApplication {
    private _repo: ComponyRepository;

    constructor() {
        this._repo = new ComponyRepository();
    }

    async componyList(req: any, res: any) {
        try {
            const result = await this._repo.findByIdResult({});
            if (!result) {
                return ErrorHandler(res, 400, BAD_REQUEST);
            }
            res.json({
                status: 200,
                message: "list of componies",
                result,
                count: result.length,
            });
        } catch (err) {
            return ErrorHandler(res, 400, BAD_REQUEST);
        }
    }

    async findById(req: any, res: any) {
        let _id: string = req.params._id;
        if (!_id) return ErrorHandler(res, 400, BAD_REQUEST);
        try {
            const result = await this._repo.findByIdResult(
                { _id: _id },
                { isRemoved: false }
            );
            if (!result) return ErrorHandler(res, 404, NO_ITEM_TO_SHOW);

            res.json({ status: 200, result: result[0] });
        } catch (err) {
            return ErrorHandler(res, 400, BAD_REQUEST);
        }
    }

    async register(req: any, res: any) {
        const _componyInfoRepo = new ComponyInfoRepository();

        const _token = new TokenRepository();

        if (!req.body.email || !req.body.password) {
            return ErrorHandler(res, 400, REPERTED_EMAIL_OR_PASSWORD);
        }

        const passwordHasher = await hashPassword(req.body.password);
        const newData = {
            email: req.body.email,
            password: passwordHasher,
        };
        try {
            const result = await this._repo.createCallback(
                <IComponyMapper>newData
            );

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, "0");
            var mm = String(today.getMonth() + 1).padStart(2, "0");
            var yyyy = today.getFullYear();

            const token = Signjwt(`${result._id}`, "compony");
            const tokenData = {
                userid: `${result._id}`,
                token: token,
                date: mm + "/" + dd + "/" + yyyy,
            };

            const tokens = await _token.createCallback(<ITokenMapper>tokenData);

            if (tokens || token !== null) {
                res.json({
                    status: 200,
                    message: SUUCEESS_CREATE_ACCOUNT,
                    result: result,
                    token: {
                        userid: tokenData.userid,
                        token: tokenData.token,
                    },
                });
            } else {
                return ErrorHandler(res, 400, REPERTED_EMAIL_OR_PASSWORD);
            }

            const componyDataObj: any = {
                componyid: `${result._id}`,
                introduction: "",
                memebers: [],
                history: "",
                purpose: "",
                latitude: "",
                Longitude: "",
            };

            const componyInfo = await _componyInfoRepo.create(
                componyDataObj,
                (error, results) => {
                    if (error)
                        return ErrorHandler(
                            res,
                            400,
                            REPERTED_EMAIL_OR_PASSWORD
                        );
                }
            );
        } catch (error) {
            return ErrorHandler(res, 400, REPERTED_EMAIL_OR_PASSWORD);
        }
    }

    async login(req: any, res: any) {
        if (!req.body.email || !req.body.password) {
            return ErrorHandler(res, 400, REPERTED_EMAIL_OR_PASSWORD);
        }
        try {
            const _tokenRepo = new TokenRepository();

            await this._repo.findOneByEmail(req.body.email, (error, result) => {
                if (error !== null)
                    return ErrorHandler(res, 400, REPERTED_EMAIL_OR_PASSWORD);
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
                if (result === null && error === null)
                    return ErrorHandler(res, 400, REPERTED_EMAIL_OR_PASSWORD);
            });
        } catch (err) {
            return ErrorHandler(res, 400, REPERTED_EMAIL_OR_PASSWORD);
        }
    }

    async findOneAndUpdate(req: any, res: any) {
        const _id = req.body._id;
        const profileImageFile =
            req.files && req.files.profileimage && req.files.profileimage;
        const mainImage =
            req.files && req.files.mainImage && req.files.mainImage;

        if (req.files) {
            if (profileImageFile) {
                try {
                    const fm = profileImageFile.mv(
                        `public/uploads/${profileImageFile.name}`,
                        (err: any) => {
                            const datass = {
                                fileName: profileImageFile.name,
                                filePath: `public/uploads/${profileImageFile.name}`,
                            };
                        }
                    );
                } catch (err) {
                    return ErrorHandler(res, 400, BAD_REQUEST);
                }
            }
        }
        if (req.files) {
            if (mainImage) {
                try {
                    const fm = mainImage.mv(
                        `public/uploads/${mainImage.name}`,
                        (err: any) => {
                            const datass = {
                                fileName: mainImage.name,
                                filePath: `public/uploads/${mainImage.name}`,
                            };
                        }
                    );
                } catch (err) {
                    return ErrorHandler(res, 400, BAD_REQUEST);
                }
            }
        }
        const _jobRepo = new JobRepository();
        try {
            let dataFromClient: any = {};
            dataFromClient = {
                componyname: req.body.componyname,
                field: req.body.field,
                workers: req.body.workers,
                description: req.body.description,
                address: req.body.address,
                componycity: req.body.componycity,
                website: req.body.website,
                foundedDate: req.body.foundedDate,
            };
            if (profileImageFile) {
                dataFromClient.profileimage = `public/uploads/${profileImageFile.name}`;
            }
            if (mainImage) {
                dataFromClient.mainImage = `public/uploads/${mainImage.name}`;
            }
            const result = await this._repo.findAndUpdate(
                { _id: `${_id}` },
                dataFromClient
            );
            if (result === null) {
                return ErrorHandler(res, 400, BAD_REQUEST);
            }
            if (
                req.body &&
                req.body._id !== "" &&
                req.body.componyname !== "" &&
                req.body.field !== "" &&
                !isNaN(req.body.workers) &&
                req.body.workers !== null &&
                req.body.workers !== 0 &&
                req.body.workers !== "" &&
                req.body.profileimage !== "" &&
                req.body.description !== "" &&
                req.body.address !== "" &&
                req.body.componycity !== "" &&
                req.body.componymainimage !== "" &&
                req.body.website !== "" &&
                req.body.foundedDate !== ""
            ) {
                await this._repo.findOneAndUpdate(_id, {
                    isRegisteredCompletely: true,
                });
            } else {
                await this._repo.findOneAndUpdate(_id, {
                    isRegisteredCompletely: false,
                });
            }
            const updateJobs = await _jobRepo.updateMany(
                { componyid: `${req.body._id}` },
                {
                    componyname: req.body.componyname,
                    componyprofile: req.body.profileimage,
                    componymainimage: req.body.componymainimage,
                    componycity: req.body.componycity,
                }
            );
            res.json({
                status: 200,
                message: DUE_SUCCESSFULL,
                result,
            });
        } catch (err) {
            return ErrorHandler(res, 400, BAD_REQUEST);
        }
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
                    const token = Signjwt(`${identity}`, "compony");
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

export default ComponyApplication;
