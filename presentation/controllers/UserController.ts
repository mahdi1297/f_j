import IControllerBase from "../../0_framework/controller/ControllerBase";
import UserApplication from "../../application/UserApplication";
import express from "express";

class UserConteroller implements IControllerBase<UserApplication> {
    async register(req: express.Request, res: express.Response) {
        const _app = new UserApplication();
        _app.registerUser(req, res);
    }

    async login(req: express.Request, res: express.Response) {
        const _app = new UserApplication();
        await _app.loginUser(req, res);
    }

    async checkToken(req: express.Request, res: express.Response) {
        const _app = new UserApplication();
        await _app.checkToken(req, res);
    }
}

export default UserConteroller;
