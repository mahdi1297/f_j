import { apiGetter } from "./../../utils/httpRequest";
import { httpErrorHandler } from "./../../utils/httpErrorHandler";
import { ApiV1 } from "../../data/api";

const DATA = `${ApiV1}/compony/`;

export const getComponyData = async (_id) => {
  const requst = await apiGetter(`${DATA}/${_id}`);
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
};
