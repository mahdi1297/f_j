import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "./../../.env" });

class Context {
    static mongooseInstance: any;
    static mongooseConnection: mongoose.Connection;

    constructor() {
        Context.connect();
    }

    static connect(): mongoose.Connection {
        if (this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("connected to db successfully");
        });
        this.mongooseInstance = mongoose.connect(
            "mongodb+srv://root:fm6RgqaN6zZIoWey@seoblog.qvxum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        );
        return this.mongooseInstance;
    }
}

Context.connect();
export default Context;
