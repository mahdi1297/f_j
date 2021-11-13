import { apiGetter, apiPuter } from "./../../../../../../utils/httpRequest";
import { httpErrorHandler } from "./../../../../../../utils/httpErrorHandler";
import { ApiV1 } from "./../../../../../../data/api";

const GET_URL = `${ApiV1}/resume/`;
const UPDATE_URL = `${ApiV1}/resume`;

export const getResumeData = async (email) => {
  const request = await apiGetter(`${GET_URL}${email}`);
  if (request) {
    const { data } = request.data;
    const { status } = request.data;
    httpErrorHandler(status, "redirect", data.message);
    return data.result;
  }
};

export const SubmitEducationDataToResume = async (history, dataPack, email) => {
  const request = await apiPuter(`${UPDATE_URL}`, {
    type: "workinfo",
    email: email,
    data: dataPack,
  });
  if (request) {
    const status = request.status | request.data.status;
    if (status < 599 && status > 499)
      httpErrorHandler(status, "redirect", history);
    const message = request.data.data.message;
    httpErrorHandler(status, "toast", message);
  }
};
