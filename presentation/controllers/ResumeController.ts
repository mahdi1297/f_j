import IControllerBase from "../../0_framework/controller/ControllerBase";
import ResumeApplication from "../../application/ResumeApplication";
import express from "express";

class ResumeController implements IControllerBase<ResumeApplication> {
    async create(req: express.Request, res: express.Response) {
        const _app = new ResumeApplication();
        _app.createResume(req, res);
    }
    async update(req: express.Request, res: express.Response) {
        const _app = new ResumeApplication();
        _app.updateResume(req, res);
    }
    async getByEmail(req: express.Request, res: express.Response) {
        const _app = new ResumeApplication();
        _app.getResumeByEmail(req, res);
    }
}

export default ResumeController;
