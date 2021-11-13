import { httpErrorHandler } from "../../../../utils/httpErrorHandler";
import { apiGetter } from "./../../../../utils/httpRequest";
import { ApiV1 } from "../../../../data/api";

const URL = `${ApiV1}/jobs/findjobs`;

export const getJobListData = async (_id) => {
  const request = await apiGetter(`${URL}/${_id}`);
  if (request) {
    if (request.data.status === 500) {
      return false;
    }
    const { data } = request;
    const { status } = data;
    const { message } = data;
    if (message) httpErrorHandler(status, "toast", message);
    if (request) return request.data.data;
  }
};
