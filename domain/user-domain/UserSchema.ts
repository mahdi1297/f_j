import IUserMapper from "./IUserMapper";
import mongoose from "mongoose";
import Context from "../context";

const Schema = mongoose.Schema;
const dbContext = Context.mongooseConnection;

class UserSchema {
    static get schema() {
        let schema = new Schema({
            username: {
                type: String,
                minlength: 2,
                maxlength: 155,
                unique: true,
                dropDups: true,
            },
            name: {
                type: String,
                minlength: 2,
                maxlength: 155,
            },
            lastname: {
                type: String,
                minlength: 2,
                maxlength: 200,
            },
            email: {
                type: String,
                minlength: 5,
                maxlength: 50,
                dropDups: true,
            },
            phone: {
                type: Number,
                length: 11,
                unique: true,
                dropDups: true,
            },
            password: {
                type: String,
                minlength: 5,
            },
            profile: {
                type: String,
                default: "https://w3schools.com/w3images/avatar6.png",
                maxlength: 3000,
                minlength: 5,
            },
            role: {
                type: String,
                default: "user",
                required: true,
            },
            token: {
                type: String,
            },
        });

        return schema;
    }
}

var schema = dbContext.model<IUserMapper>("users", UserSchema.schema);

export default schema;
