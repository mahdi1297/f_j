import ResumeController from "../controllers/ResumeController";
import express from "express";

const route = express.Router();

class ResumeRoutes {
    private _controller: ResumeController;

    constructor() {
        this._controller = new ResumeController();
    }

    get routers() {
        var controller = this._controller;
        route.post("/", controller.create);
        route.put("/", controller.update);
        route.get("/:email", controller.getByEmail);

        return route;
    }
}

export default ResumeRoutes;
