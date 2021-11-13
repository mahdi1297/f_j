import { ApiV1 } from "../../../../data/api";
import { apiPoster } from "../../../../utils/httpRequest";
import { httpErrorHandler } from "./../../../../utils/httpErrorHandler";

const URL = `${ApiV1}/compony/login`;

export const loginCompony = async (info) => {
  console.log(info);
  const requst = await apiPoster(URL, info);
  if (requst) {
    const { data } = requst;
    const { status } = data;
    const { message } = data.data ? data.data : "";
    httpErrorHandler(status, "toast", message);
    return requst;
  } else {
    httpErrorHandler(500, "redirect");
  }
};
