import { httpErrorHandler } from "../../../../utils/httpErrorHandler";
import { ApiV1 } from "../../../../data/api";
import { ERROR } from "../../../../constant/messages";
import { get } from "../../../../utils/request/get";

export const jobRsultData = async (_id, history) => {
  let { data, error } = await get(`${ApiV1}/jobs/${_id}`);

  if (error.status) {
    httpErrorHandler(error.status, "redirect", "", history);
    error = {
      errorType: ERROR,
      error,
    };
  }
  return { data, error };
};
