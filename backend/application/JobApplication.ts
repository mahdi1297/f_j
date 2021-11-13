import IJobApplication from "./interface/IJobApplication";
import JobRepository from "../infrastructure/repository/JobRepository";
import IJobsMapper from "../domain/jobs-domain/IJobsMapper";
import { ErrorHandler } from "./../infrastructure/utils/ErrorHandler";
import {
    ANNOUNCEMENT_REGISTER_SUCCESS,
    COMPONY_ANNOUNCEMENT_LIST,
    PROBLEM_HAPPENED,
    NO_ITEM_TO_SHOW,
    DUE_SUCCESSFULL,
    BAD_REQUEST,
} from "../0_framework/constant/messages";

class JobApplication implements IJobApplication {
    private _repo: JobRepository;

    constructor() {
        this._repo = new JobRepository();
    }

    async list(req: any, res: any) {
        console.log("jobs");
        try {
            const dataList = await this._repo.findByIdResult({});

            if (dataList === undefined || dataList.length === undefined) {
                return ErrorHandler(res, 400, PROBLEM_HAPPENED);
            }
            res.json({
                status: 200,
                message: COMPONY_ANNOUNCEMENT_LIST,
                count: dataList.length,
                result: dataList,
            });
        } catch (error) {
            return ErrorHandler(res, 400, PROBLEM_HAPPENED);
        }
    }

    async filterList(req: any, res: any) {
        console.log(req.body);

        const jobtype = req.body.jobtype;
        const level = req.body.level;

        let filter: any = {
            search: [],
        };

        if (jobtype.length !== 0) {
            filter.search = { jobtype: { $in: req.body.jobtype } };
        } else if (level.length !== 0)
            filter.search = { level: { $in: req.body.level } };
        else if (jobtype.length !== 0 && level.length !== 0)
            filter.search = {
                level: { $in: req.body.level },
                jobtype: { $in: req.body.jobtype },
            };
        else filter.search = {};

        try {
            const result = await this._repo.findByIdResult(filter.search);
            return res.json({
                status: 200,
                message: DUE_SUCCESSFULL,
                count: result.length,
                result,
            });
        } catch (err) {
            return ErrorHandler(res, 400, BAD_REQUEST);
        }
    }

    async findById(req: any, res: any) {
        let _id: string = req.params._id;
        if (!_id) {
            return ErrorHandler(res, 400, BAD_REQUEST);
        }
        try {
            const result = await this._repo.findByIdResult(
                { _id: _id },
                { isRemoved: false }
            );
            if (!result || result === null || result === undefined)
                return ErrorHandler(res, 404, NO_ITEM_TO_SHOW);
            res.json({
                status: 200,
                message: DUE_SUCCESSFULL,
                result: result[0],
            });
        } catch (err) {
            return ErrorHandler(res, 400, BAD_REQUEST);
        }
    }

    async findOneAndUpdate(req: any, res: any) {
        const _id = req.body._id;
        if (!_id || !req.body.remove) {
            return ErrorHandler(res, 400, BAD_REQUEST);
        }
        try {
            const result = await this._repo.findAndUpdate(
                { _id: _id },
                { isRemoved: req.body.remove }
            );
            if (result === undefined || !result) {
                return ErrorHandler(res, 404, NO_ITEM_TO_SHOW);
            }
            res.json({
                status: 200,
                message: DUE_SUCCESSFULL,
                result,
            });
        } catch (err) {
            return ErrorHandler(res, 400, BAD_REQUEST);
        }
    }

    async findByComponyId(req: any, res: any) {
        const componyid = req.params.componyid;
        if (!componyid) {
            return ErrorHandler(res, 400, BAD_REQUEST);
        }
        try {
            const result = await this._repo.findByIdResult({
                componyid: componyid,
            });
            if (!result || result === undefined) {
                return ErrorHandler(res, 404, NO_ITEM_TO_SHOW);
            }
            res.json({
                status: 200,
                message: COMPONY_ANNOUNCEMENT_LIST,
                count: result.length,
                result,
            });
        } catch (err) {
            return ErrorHandler(res, 400, BAD_REQUEST);
        }
    }

    async create(req: any, res: any) {
        if (!req.body) return ErrorHandler(res, 400, BAD_REQUEST);
        try {
            const result = await this._repo.createCallback(
                <IJobsMapper>req.body
            );
            if (!result || result === undefined || result === null)
                return ErrorHandler(res, 404, NO_ITEM_TO_SHOW);
            res.json({
                status: 200,
                message: ANNOUNCEMENT_REGISTER_SUCCESS,
                result,
            });
        } catch (err) {
            return ErrorHandler(res, 400, BAD_REQUEST);
        }
    }
}

export default JobApplication;
// jobtype: { $gt: req.body.min, $lt: req.body.max },
