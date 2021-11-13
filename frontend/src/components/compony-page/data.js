import { ApiV1 } from "../../data/api";
import { httpErrorHandler } from "../../utils/httpErrorHandler";
import { apiGetter, apiPoster } from "../../utils/httpRequest";

const COMPONY_DATA_URL = `${ApiV1}/compony/`;
const COMPONY_INFO_URL = `${ApiV1}/componyinfo/`;

export const getComponyData = async (_id) => {
  const requst = await apiGetter(`${COMPONY_DATA_URL}/${_id}`);
  if (requst) {
    const { data } = requst;
    const { status } = data;
    const { message } = data.data;
    httpErrorHandler(status, "toast", message);
    if (status > 100 && status < 399) {
      return requst.data.data;
    }
  } else {
    httpErrorHandler(500, "toast", "مشکلی در دریافت اطلاعات به وجود آمده");
  }
  return requst;
};

export const getComponyInfoData = async (componyid) => {
  const request = await apiPoster(COMPONY_INFO_URL, { componyid: componyid });
  const status = request.status;
  httpErrorHandler(status, "toast", "");
  return request.data;
};
