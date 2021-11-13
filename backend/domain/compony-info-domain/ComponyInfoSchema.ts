import IComponyInfoMapper from "./IComponyInfoMapper";
import mongoose from "mongoose";
import Context from "../context";

var Schema = mongoose.Schema;
var mongooseConnection = Context.mongooseConnection;

class ComponyInfoSchema {
    static get schema() {
        var schema = new Schema({
            componyid: {
                type: String,
                default: "",
            },
            introduction: {
                type: String,
                default: "",
            },
            memebers: {
                type: Array,
            },
            history: {
                type: String,
                default: "",
            },
            purpose: {
                type: String,
                default: "",
            },
            latitude: {
                type: String,
                default: "",
            },
            Longitude: {
                type: String,
                default: "",
            },
        });
        return schema;
    }
}

var schema = mongooseConnection.model<IComponyInfoMapper>(
    "componyinfo",
    ComponyInfoSchema.schema
);
export default schema;
