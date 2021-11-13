import { ApiV1 } from "../../../../data/api";
import { httpErrorHandler } from "../../../../utils/httpErrorHandler";
import { apiPoster } from "./../../../../utils/httpRequest";

const URL = `${ApiV1}/jobs/create`;

export const createAnnouncement = async (body) => {
  const request = await apiPoster(URL, body);
  if (request) {
    const { data } = request;
    const { status } = data;
    const { message } = data.data;
    httpErrorHandler(status, "toast", message);
    if (status > 100 && status < 399) {
      return request.data.data;
    }
  } else {
    httpErrorHandler(500, "toast", "مشکلی در دریافت اطلاعات به وجود آمده");
  }
};
