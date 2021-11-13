import { ApiV1 } from "../../../../../data/api";
import { httpErrorHandler } from "./../../../../../utils/httpErrorHandler";
import { apiPoster } from "./../../../../../utils/httpRequest";

const DATA_URL = `${ApiV1}/componyinfo`;
const UPDATE_URL = `${ApiV1}/componyinfo/update`;

export const submitAboutComponyData = async (dataPack) => {
  const request = await apiPoster(UPDATE_URL, dataPack);
  if (request) {
    const data = request.data;
    const { status } = data;
    if (status > 499) httpErrorHandler(status, "redirect");
    httpErrorHandler(status, "toast", data.data.message);
    return request.data;
  }
};

export const getComponyData = async (componyid) => {
  const request = await apiPoster(DATA_URL, { componyid: componyid });
  if (request) {
    const data = request.data;
    const { status, message } = data;
    if (status > 499) httpErrorHandler(status, "redirect");
    httpErrorHandler(status, "toast", message);
    return request.data.data;
  }
};
