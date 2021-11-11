import IControllerBase from "../../0_framework/controller/ControllerBase";
import JobApplication from "../../application/JobApplication";
import express from "express";

class JobController implements IControllerBase<JobApplication> {
    async list(req: express.Request, res: express.Response) {
        const _app = new JobApplication();
        await _app.list(req, res);
    }

    async filterList(req: express.Request, res: express.Response) {
        const _app = new JobApplication();
        await _app.filterList(req, res);
    }

    async findById(req: express.Request, res: express.Response) {
        const _app = new JobApplication();
        await _app.findById(req, res);
    }

    async findOneAndUpdate(req: express.Request, res: express.Response) {
        const _app = new JobApplication();
        await _app.findOneAndUpdate(req, res);
    }

    async findByComponyId(req: express.Request, res: express.Response) {
        const _app = new JobApplication();
        await _app.findByComponyId(req, res);
    }

    async create(req: express.Request, res: express.Response) {
        const _app = new JobApplication();
        await _app.create(req, res);
    }
}

export default JobController;
