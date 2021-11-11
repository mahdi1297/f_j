import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import cluster from "cluster";
import totalCPUs from "os";
import BaseRoutes from "./presentation/routes/BaseRoute";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import path from "path";
// import csrf from "csurf";
import * as dotenv from "dotenv";

const app = express();

dotenv.config({ path: __dirname + "/.env" });
app.use("/favicon.png", express.static("uploads/static/favicon.png"));
dotenv.config();

if (cluster.isPrimary) {
    for (let i = 0; i < totalCPUs.cpus().length; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log("Let's fork another worker!");
        cluster.fork();
    });
} else {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(fileUpload());
    app.use(cors());
    app.use("/public", express.static("public"));

    app.use(helmet());

    app.use(cookieParser());

    app.use(new BaseRoutes().routes);

    app.listen(process.env.PORT || 5000, () =>
        console.log("app is running on port 5000")
    );
}


//پرومارون