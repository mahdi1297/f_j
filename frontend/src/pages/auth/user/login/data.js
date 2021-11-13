import { ApiV1 } from "../../../../data/api";
import { apiPoster } from "../../../../utils/httpRequest";
import { httpErrorHandler } from "./../../../../utils/httpErrorHandler";

const URL =  `${ApiV1}/user/login`;

export const loginUser = async (info) => {
  const request = await apiPoster(URL, info);
  if (request) {
    const { data } = request;
    const { status } = data;
    const { message } = data.data;
    httpErrorHandler(status, "toast", message);
  }
  return request;
};
