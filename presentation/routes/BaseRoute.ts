import express from "express";
import ComponyInfoRoutes from "./ComponyInfoRoute";
import ComponyRoutes from "./ComponyRoutes";
import ResumeRoutes from "./ResumeRoutes";
import UserRoutes from "./UserRoute";
import JobRoutes from "./JobsRoute";
const app = express();

class BaseRoutes {
    get routes() {
        app.use("/api/v1/jobs", new JobRoutes().routers);
        app.use("/api/v1/compony", new ComponyRoutes().routers);
        app.use("/api/v1/user", new UserRoutes().routers);
        app.use("/api/v1/resume", new ResumeRoutes().routers);
        app.use("/api/v1/componyinfo", new ComponyInfoRoutes().routers);
        return app;
    }
}

export default BaseRoutes;
