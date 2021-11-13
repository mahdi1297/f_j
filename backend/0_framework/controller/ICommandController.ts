import express from "express";

interface ICommandController {
    create: express.RequestHandler;
    findOneAndUpdate: express.RequestHandler;
}

export default ICommandController;
