import IResumeApplication from "./interface/IResumeApplication";
import ResumeRepository from "./../infrastructure/repository/ResumeRepository";
import {
    BAD_REQUEST,
    DUE_SUCCESSFULL,
    PROBLEM_HAPPENED,
} from "../0_framework/constant/messages";
import { ErrorHandler } from "../infrastructure/utils/ErrorHandler";

class ResumeApplication implements IResumeApplication {
    private readonly _repo: ResumeRepository;

    constructor() {
        this._repo = new ResumeRepository();
    }

    async createResume(req: any, res: any) {
        return new Promise((resolve, reject) => {
            try {
                this._repo.create(req.body, (error, result) => {
                    if (error) {
                        reject(error);
                        return res.status(400).json({
                            status: 400,
                            message: PROBLEM_HAPPENED,
                        });
                    }
                    resolve(result);
                    res.json({
                        status: 200,
                        message: DUE_SUCCESSFULL,
                        result,
                    });
                });
            } catch (error) {
                reject(error);
                return res.status(400).json({
                    status: 400,
                    message: PROBLEM_HAPPENED,
                });
            }
        });
    }

    async updateResume(req: any, res: any) {
        console.log(req.body);
        const email = req.body.email;
        const data = req.body;

        if (!email || !data) {
            return ErrorHandler(res, 400, BAD_REQUEST);
        }
        if (req.body && req.body.type && req.body.type === "educationinfo") {
            try {
                const result = await this._repo.findAndUpdate(
                    { email: email },
                    { $push: { educationinfo: req.body.data } }
                );
                if (!result || result === undefined)
                    return ErrorHandler(res, 400, BAD_REQUEST);

                res.send({
                    status: 200,
                    message: DUE_SUCCESSFULL,
                    result,
                });
            } catch (err) {
                return ErrorHandler(res, 400, BAD_REQUEST);
            }
        }
        if (req.body && req.body.type && req.body.type === "workinfo") {
            try {
                const result = await this._repo.findAndUpdate(
                    { email: email },
                    { $push: { workinfo: req.body.data } }
                );
                if (!result || result === undefined)
                    return ErrorHandler(res, 400, BAD_REQUEST);

                res.send({
                    status: 200,
                    message: DUE_SUCCESSFULL,
                    result,
                });
            } catch (err) {
                return ErrorHandler(res, 400, BAD_REQUEST);
            }
        } else {
            try {
                const result = await this._repo.findAndUpdate(
                    { email: email },
                    data
                );
                if (!result || result === undefined)
                    return ErrorHandler(res, 400, BAD_REQUEST);

                res.send({
                    status: 200,
                    message: DUE_SUCCESSFULL,
                    result,
                });
            } catch (err) {
                return ErrorHandler(res, 400, BAD_REQUEST);
            }
        }
    }

    async getResumeByEmail(req: any, res: any) {
        const email = req.params.email;
        return new Promise((reject, resolve) => {
            this._repo.findOneByEmail(email, (error, result) => {
                try {
                    if (error) {
                        reject(error);
                        return res.status(400).json({
                            status: 400,
                            message: PROBLEM_HAPPENED,
                        });
                    }
                    resolve(result);
                    res.send({
                        status: 200,
                        message: DUE_SUCCESSFULL,
                        result,
                    });
                } catch (error) {
                    reject(error);
                    return res.status(400).json({
                        status: 400,
                        message: PROBLEM_HAPPENED,
                    });
                }
            });
        });
    }
}

export default ResumeApplication;
