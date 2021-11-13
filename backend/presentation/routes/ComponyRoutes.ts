import ComponyController from "../controllers/ComponyController";
import express from "express";

const route = express.Router();

class ComponyRoutes {
    private _controller: ComponyController;

    constructor() {
        this._controller = new ComponyController();
    }

    get routers() {
        var controller = this._controller;
        route.get("/", controller.componyList);
        route.get("/:_id", controller.findById);
        route.post("/update", controller.findOneAndUpdate);
        route.post("/register", controller.register);
        route.post("/login", controller.loginByEmail);
        route.post("/checktoken", controller.checktoken);
        return route;
    }
}

export default ComponyRoutes;
