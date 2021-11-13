import { ERROR } from "../../../../constant/messages";
import { ApiV1 } from "../../../../data/api";
import { get } from "../../../../utils/request/get";

export const getJobListData = async () => {
  let { data, error } = await get(`${ApiV1}/jobs`);

  if (error.status)
    error = {
      errorType: ERROR,
      error,
    };

  return { data, error };
};
