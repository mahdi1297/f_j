import mongoose from "mongoose";

interface IComponyInfoMapper extends mongoose.Document {
    componyiId: string;
    introduction: string;
    memebers: string[];
    history: string;
    purpose: string;
    latitude: string;
    Longitude: string;
}

export default IComponyInfoMapper;
