import { ApiV1 } from "../../../../data/api";
import { httpErrorHandler } from "../../../../utils/httpErrorHandler";
import { apiGetter, apiPoster } from "./../../../../utils/httpRequest";

const URL = `${ApiV1}/jobs/findjobs`;
const ACTIVE_DEACTIVE_URL = `${ApiV1}/jobs/activation`;

export const getJobListData = async (_id) => {
  const request = await apiGetter(`${URL}/${_id}`);
  if (request) {
    if (request.data.status === 500) {
      return {
        status: 500,
        data: [],
      };
    }
    const { data } = request;
    const { status } = data;
    const { message } = data;
    if (message) httpErrorHandler(status, "toast", message);
    return request.data.data;
  }
};

export const jobActivationData = async (dataPack) => {
  const request = await apiPoster(ACTIVE_DEACTIVE_URL, dataPack);
  if (request.data.status === 500) {
    return {
      status: 500,
      data: [],
    };
  }
  const { data } = request;
  const { status } = data;
  const message = data.data.message;
  if (message) httpErrorHandler(status, "toast", message);
  if (request) return request.data.data;
};
