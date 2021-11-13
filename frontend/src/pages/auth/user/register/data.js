import { httpErrorHandler } from "./../../../../utils/httpErrorHandler";
import { apiPoster } from "./../../../../utils/httpRequest";
import { ApiV1 } from "../../../../data/api";

const RESUME_URL = `${ApiV1}/resume`;
const URL = `${ApiV1}/user/register`;

export const registerUserData = async (data) => {
  const request = await apiPoster(URL, data);
  if (request) {
    let messages;
    const { data } = request;
    const { status } = data;
    const { message } = data.data;
    message
      ? (messages = message)
      : (messages = "اشکالی سمت سرور به وجود آمده");
    httpErrorHandler(status, "toast", messages);
    if (status > 199 && status < 299) {
      console.log(data.data.result.email);
      const resumeData = {
        name: data.data.result.email,
        lastname: data.data.result.lastname,
        email: data.data.result.email,
        phone: data.data.result.phone,
        mariadgestatus: "",
        sex: "",
        aboutuser: "",
        city: "",
        province: "",
        address: "",
        skills: [],
        educationinfo: [],
        workinfo: [],
      };
      const resumeRequest = await apiPoster(RESUME_URL, resumeData);
      console.log(resumeRequest);
      return request;
    } else if (status > 500) {
      httpErrorHandler(500, "redirect");
    }
  }
};
