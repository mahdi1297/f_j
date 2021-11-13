import { httpErrorHandler } from "./../../../../utils/httpErrorHandler";
import { apiGetter } from "./../../../../utils/httpRequest";
import { ApiV1 } from "../../../../data/api";
import axios from "axios";

const UPDATE_FRESH_DATA = `${ApiV1}/compony/`;
const UPDATE_URL = `${ApiV1}/compony/update`;

export const getComponyData = async (_id) => {
  const requst = await apiGetter(`${UPDATE_FRESH_DATA}/${_id}`);
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
export const updateComponyData = async (formData) => {
  const requst = await axios.post(UPDATE_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (requst) {
    const { data } = requst;
    const { status } = data;
    // const { message } = data.data;
    httpErrorHandler(status, "toast", "message");
    if (status > 199 && status < 299) {
      return "ok";
    }
  } else {
    httpErrorHandler(500, "redirect");
  }
};
