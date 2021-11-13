import ITokenMapper from "./ITokenMapper";
import mongoose from "mongoose";
import Context from "../context";

const Schema = mongoose.Schema;
const mongooseConnection = Context.mongooseConnection;

class TokenSchema {
    static get schema() {
        var schema = new Schema({
            userid: {
                type: String,
            },
            token: {
                type: String,
            },
            date: {
                type: Date,
            },
        });
        return schema;
    }
}

const schema = mongooseConnection.model<ITokenMapper>(
    "tokens",
    TokenSchema.schema
);

export default schema;
