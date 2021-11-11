import IComponyMapper from "./IComponyMapper";
import mongoose from "mongoose";
import Context from "../context";

let Schema = mongoose.Schema;
let mongooseConnection = Context.mongooseConnection;

class ComponySchema {
    static get schema() {
        var schema = new Schema({
            componyname: {
                type: String,
                default: "",
            },
            description: {
                type: String,
                default: "",
            },
            workers: {
                type: Number,
                default: 0,
            },
            email: {
                type: String,
                unique: true,
                dropDups: true,
            },
            password: {
                type: String,
                required: true,
            },
            profileimage: {
                type: String,
                default:
                    "https://thumb.jobinjacdn.com/Fi4cuSJp8hhMO4PfvXVA52l0uMQ=/fit-in/128x128/filters:strip_exif():fill(transparent):quality(100)/https://storage.jobinjacdn.com/other/files/uploads/images/28621aaa-b87e-11eb-9bcb-86000088a815_a96f503a-889e-42bc-9df0-12a79009983e/main.png",
            },
            address: {
                type: String,
                default: "",
            },
            componycity: {
                type: String,
                default: "",
            },
            website: {
                type: String,
                default: "",
            },
            field: {
                type: String,
                default: "",
            },
            foundedDate: {
                type: String,
                default: "",
            },
            creationDate: {
                type: String,
                default: "",
            },
            mainImage: {
                type: String,
                default: "https://jobinja.ir/assets/img/jobcovers/4.jpg",
            },
            isRegisteredCompletely: {
                type: Boolean,
                default: false,
            },
            isRemoved: {
                type: Boolean,
                default: false,
            },
        });
        return schema;
    }
}

let schema = mongooseConnection.model<IComponyMapper>(
    "componies",
    ComponySchema.schema
);

export default schema;
