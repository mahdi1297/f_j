import { Document } from "mongoose";

interface IUserMapper extends Document {
    username: string;
    name: string;
    lastname: string;
    email: string;
    phone: number;
    password: string;
    profile: string;
    role: string;
    token: string;
}

export default IUserMapper;
