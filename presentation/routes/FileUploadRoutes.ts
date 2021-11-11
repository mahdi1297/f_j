import express from "express";
import fileUpload from "express-fileupload";

const app = express();
const route = express.Router();

app.post("/", (req: any, res: any) => {
    if (req.files === null) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    const file = req.files.file;
    file.mv(require(`./../../../public/uploads/${file.name}`), (err: any) => {
        if (err)
            return res.status(500).send({ message: "Internal server error" });

        res.json({
            status: 200,
            fileName: file.name,
            filePath: `${__dirname}/public/uploads/${file.name}`,
            message: "sucessfull",
        });
    });
});

export default route;
