import IComponyInfoApplication from "./interface/IComponyInfoApplication";
import ComponyInfoRepository from "./../infrastructure/repository/ComponyInfoRepository";
import {
    BAD_REQUEST,
    DUE_SUCCESSFULL,
    NO_ITEM_TO_SHOW,
    PROBLEM_HAPPENED,
} from "../0_framework/constant/messages";
import { ErrorHandler } from "../infrastructure/utils/ErrorHandler";

class ComponyInfoApplication implements IComponyInfoApplication {
    private _repo: ComponyInfoRepository;

    constructor() {
        this._repo = new ComponyInfoRepository();
    }

    async find(req: any, res: any) {
        if (!req.body.componyid) return ErrorHandler(res, 404, BAD_REQUEST);

        const result = await this._repo.findOne({
            componyid: req.body.componyid,
        });

        res.json({
            status: 200,
            message: DUE_SUCCESSFULL,
            result,
        });
    }

    async update(req: any, res: any) {
        if (!req.body.componyid) {
            return ErrorHandler(res, 400, BAD_REQUEST);
        }

        const body = req.body;
        console.log(body.update_type);
        try {
            if (body.update_type === "member") {
                console.log(req.body.componyid);
                const result = await this._repo.findAndUpdate(
                    { componyid: req.body.componyid },
                    { $push: { memebers: req.body } }
                );
                if (!result) return ErrorHandler(res, 404, NO_ITEM_TO_SHOW);
                res.json({
                    status: 200,
                    message: DUE_SUCCESSFULL,
                    result,
                });
            }
            if (body.update_type === "history") {
                const result = await this._repo.findAndUpdate(
                    { componyid: req.body.componyid },
                    { history: body.history }
                );
                if (!result) return ErrorHandler(res, 404, NO_ITEM_TO_SHOW);
                res.json({
                    status: 200,
                    message: DUE_SUCCESSFULL,
                    result,
                });
            }
            if (body.update_type === "introduction") {
                const result = await this._repo.findAndUpdate(
                    { componyid: req.body.componyid },
                    { introduction: body.introduction }
                );
                if (!result) return ErrorHandler(res, 404, NO_ITEM_TO_SHOW);
                res.json({
                    status: 200,
                    message: DUE_SUCCESSFULL,
                    result,
                });
            }
        } catch (error) {
            return ErrorHandler(res, 400, BAD_REQUEST);
        }
    }
}

export default ComponyInfoApplication;
