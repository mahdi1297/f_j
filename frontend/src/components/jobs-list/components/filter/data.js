import { httpErrorHandler } from "./../../../../utils/httpErrorHandler";
import { apiPoster } from "../../../../utils/httpRequest";
import { ApiV1 } from "../../../../data/api";

const URL = `${ApiV1}/jobs/filter`;

export const getJobListData = async (dataPack) => {
  console.log(dataPack);
  const request = await apiPoster(URL, dataPack);
  if (request) {
    if (request) {
      const { data } = request.data;
      const { status } = request.data;
      const { message } = request.data;
      if (status > 399) httpErrorHandler(status, "toast", message);
      return data;
    }
  }
};
