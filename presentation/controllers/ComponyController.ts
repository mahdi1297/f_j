import ComponyApplication from "../../application/ComponyApplication";
import IControllerBase from "../../0_framework/controller/ControllerBase";
import express from "express";

class ComponyController implements IControllerBase<ComponyApplication> {
    async componyList(req: express.Request, res: express.Response) {
        const _app = new ComponyApplication();
        await _app.componyList(req, res);
    }

    async findById(req: express.Request, res: express.Response) {
        const _app = new ComponyApplication();
        await _app.findById(req, res);
    }

    async findOneAndUpdate(req: express.Request, res: express.Response) {
        const _app = new ComponyApplication();
        await _app.findOneAndUpdate(req, res);
    }

    async register(req: express.Request, res: express.Response) {
        const _app = new ComponyApplication();
        await _app.register(req, res);
    }

    async loginByEmail(req: express.Request, res: express.Response) {
        const _app = new ComponyApplication();
        await _app.login(req, res);
    }
    async checktoken(req: express.Request, res: express.Response) {
        const _app = new ComponyApplication();
        await _app.checkToken(req, res);
    }
}

export default ComponyController;
