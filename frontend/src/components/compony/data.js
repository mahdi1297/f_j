import { httpErrorHandler } from "./../../utils/httpErrorHandler";
import { apiGetter } from "./../../utils/httpRequest";
import { ApiV1 } from "../../data/api";

const URL = `${ApiV1}/compony/`;

export const getComponyData = async () => {
  const requst = await apiGetter(`${URL}`);
  if (requst) {
    const { data } = requst;
    const { status } = data;
    const { message } = data.data;
    httpErrorHandler(status, "", message);
    if (status > 100 && status < 399) {
      return requst.data.data;
    }
  } else {
    httpErrorHandler(500, "toast", "مشکلی در دریافت اطلاعات به وجود آمده");
  }
};
