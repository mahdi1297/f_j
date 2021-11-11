import IResumeMapper from "./IResumeMapper";
import mongoose from "mongoose";
import Context from "../context";

let Schema = mongoose.Schema;
let mongooseConnection = Context.mongooseConnection;

class ResumeSchema {
    static get schema() {
        var schema = new Schema({
            name: {
                type: String,
                default: "",
            },
            lastname: {
                type: String,
                default: "",
            },
            email: {
                type: String,
                default: "",
            },
            phone: {
                type: String,
                default: "",
            },
            mariadgestatus: {
                type: String,
                default: "",
            },
            sex: {
                type: String,
                default: "",
            },
            aboutuser: {
                type: String,
                default: "",
            },
            city: {
                type: String,
                default: "",
            },
            province: {
                type: String,
                default: "",
            },
            address: {
                type: String,
                default: "",
            },
            skills: {
                type: Array,
                default: [],
            },
            educationinfo: {
                type: Array,
                default: [],
            },
            workinfo: {
                type: Array,
                default: [],
            },
        });
        return schema;
    }
}

var schema = mongooseConnection.model<IResumeMapper>(
    "resumes",
    ResumeSchema.schema
);
export default schema;
