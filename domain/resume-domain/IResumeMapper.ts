import mongoose from "mongoose";

interface IResumeMapper extends mongoose.Document {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    mariadgestatus: string;
    sex: string;
    aboutuser: string;
    city: string;
    province: string;
    address: string;
    skills: string[];
    educationinfo: string[];
    workinfo: string[];
}

export default IResumeMapper;
