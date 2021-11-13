import IJobsMapper from "./IJobsMapper";
import mongoose from "mongoose";
import Context from "../context";

var Schema = mongoose.Schema;
var mongooseConnection = Context.mongooseConnection;

class JobSchema {
    static get schema() {
        var schema = new Schema({
            title: {
                type: String,
            },
            level: {
                type: String,
            },
            jobtype: {
                type: String,
            },
            componyprofile: {
                type: String,
            },
            salary: {
                type: String,
            },
            experience: {
                type: String,
            },
            body: {
                type: String,
            },
            fields: {
                type: Array,
            },
            componymainimage: {
                type: String,
            },
            componyid: {
                type: String,
            },
            componyname: {
                type: String,
            },
            componycity: {
                type: String,
            },
            isEmergency: {
                type: String,
                default: "false",
            },
            isRemoved: {
                type: String,
                default: "false",
            },
        });
        return schema;
    }
}
var schema = mongooseConnection.model<IJobsMapper>("jobs", JobSchema.schema);
export default schema;
