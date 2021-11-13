import ComponyInfoApplication from "../../application/ComponyInfoApplication";
import IControllerBase from "../../0_framework/controller/ControllerBase";
import express from "express";

class ComponyInfoController implements IControllerBase<ComponyInfoApplication> {
    async find(req: express.Request, res: express.Response) {
        const _app = new ComponyInfoApplication();
        await _app.find(req, res);
    }
    async update(req: express.Request, res: express.Response) {
        const _app = new ComponyInfoApplication();
        await _app.update(req, res);
    }
}

export default ComponyInfoController;
