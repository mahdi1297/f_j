import mongoose from "mongoose";

interface IComponyMapper extends mongoose.Document {
    componyname: string;
    description: string;
    workers: number;
    email: string;
    password: string;
    profileimage: string;
    address: string;
    componycity: string;
    website: string;
    field: string;
    foundedDate: string;
    creationDate: string;
    isRegisteredCompletely: boolean;
    mainImage: string;
    isRemoved: boolean;
}

export default IComponyMapper;
