import express from "express";
import JobController from "../controllers/JobController";

const route = express.Router();

class JobRoutes {
    private _controller: JobController;

    constructor() {
        this._controller = new JobController();
    }

    get routers() {
        var controller = this._controller;
        route.get("/", controller.list);
        route.get("/:_id", controller.findById);
        route.get("/findjobs/:componyid", controller.findByComponyId);
        route.post("/activation", controller.findOneAndUpdate);
        route.post("/filter", controller.filterList);
        route.post("/create", controller.create);
        return route;
    }
}

export default JobRoutes;
