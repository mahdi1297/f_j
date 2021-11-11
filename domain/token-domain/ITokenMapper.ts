import mongoose from "mongoose";

interface ITokenMapper extends mongoose.Document {
    userid: string;
    token: string;
    date: string;
}

export default ITokenMapper;
