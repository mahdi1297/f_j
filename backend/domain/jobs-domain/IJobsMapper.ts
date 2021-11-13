import mongoose from "mongoose";

interface IJobsMapper extends mongoose.Document {
    title: string;
    level: string;
    jobtype: string;
    componyprofile: string;
    salary: string;
    experience: string;
    body: string;
    fields: string;
    componymainimage: string;
    componyid: string;
    componyname: string;
    componycity: string;
    isEmergency: boolean;
    isRemoved: string;
}

export default IJobsMapper;
