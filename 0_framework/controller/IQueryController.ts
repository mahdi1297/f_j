import express from "express";

interface IQueryController {
  list: express.RequestHandler;
  findById: express.RequestHandler;
}

export default IQueryController;
