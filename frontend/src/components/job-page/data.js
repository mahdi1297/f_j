import { httpErrorHandler } from "./../../utils/httpErrorHandler";
import { apiGetter } from "./../../utils/httpRequest";
import { ApiV1 } from "./../../data/api";

export const jobRsultData = async (_id, history) => {
  const request = await apiGetter(`${ApiV1}/jobs/${_id}`);
  if (request) {
    if (request.data.status === 500) {
      return {
        status: 500,
        data: [],
      };
    }
    if (request && request.data) {
      if (request.data.data.result === null)
        httpErrorHandler(404, "redirect", "", history);
      return request.data.data;
    }
  }
};
