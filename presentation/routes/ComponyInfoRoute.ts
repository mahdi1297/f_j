import ComponyInfoApplication from "../controllers/ComponyInfoController";
import express from "express";

const route = express.Router();

class ComponyInfoRoutes {
    private _controller: ComponyInfoApplication;

    constructor() {
        this._controller = new ComponyInfoApplication();
    }

    get routers() {
        var controller = this._controller;
        route.post("/", controller.find);
        route.post("/update", controller.update);
        return route;
    }
}

export default ComponyInfoRoutes;
