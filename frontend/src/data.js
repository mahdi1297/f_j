import axios from "axios";
import { ApiV1 } from "./data/api";

const USER_URL = `${ApiV1}/user/checktoken`;
const COMPONY_URL = `${ApiV1}/compony/checktoken`;

export const checkUserData = async (token_data, type) => {
  const token = {
    token: token_data,
  };

  if (type === "user") {
    const request = await axios.post(USER_URL, token);
    if (request) return request.data;
  }
  if (type === "compony") {
    const request = await axios.post(COMPONY_URL, token);
    if (request) return request.data;
  }
};
