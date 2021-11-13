import { ApiV1 } from "../../../../data/api";
import { apiPoster } from "../../../../utils/httpRequest";
import { httpErrorHandler } from "./../../../../utils/httpErrorHandler";

const URL =  `${ApiV1}/compony/register`;

export const registerCompony = async (info) => {
  const requst = await apiPoster(URL, info);
  if (requst) {
    let messages;
    const { data } = requst;
    const { status } = data;
    const { message } = data.data;
    message
      ? (messages = message)
      : (messages = "اشکالی سمت سرور به وجو.د آمده");
    httpErrorHandler(status, "toast", messages);
    if (status > 199 && status < 299) {
      return "ok";
    }
  } else {
    httpErrorHandler(500, "redirect");
  }
};
