import { httpErrorHandler } from "./../../utils/httpErrorHandler";
import { apiGetter } from "./../../utils/httpRequest";
import { ApiV1 } from "../../data/api";

const URL = `${ApiV1}/resume/mahdi@1297.com`;

export const getResumeData = async (history) => {
  const request = await apiGetter(URL);
  if (request) {
    const status = request.status | request.data.status;
    if ((status === 500) | (status === 502) | (status === 503))
      return httpErrorHandler(500, "redirect", "", history);
    const { data } = request.data;
    if ((status === 400) | (status === 404))
      httpErrorHandler(status, "redirect", "server", history);
    return data;
  }
};
