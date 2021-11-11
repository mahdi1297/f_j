import UserController from "../controllers/UserController";
import express from "express";

const route = express.Router();

class UserRoutes {
    private _controller: UserController;

    constructor() {
        this._controller = new UserController();
    }

    get routers() {
        var controller = this._controller;
        route.post("/register", controller.register);
        route.post("/login", controller.login);
        route.post("/checktoken", controller.checkToken);
        return route;
    }
}

export default UserRoutes;
