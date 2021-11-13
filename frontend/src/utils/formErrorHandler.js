/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React from "react";
import { PATTERN_VALIDATION_ERROR, REQIURED_ERROR } from "../constant/errors";

export const formErrorHandler = (error, min, max) => {
  switch (error.type || error) {
    case "required":
      return (
        error &&
        (error === "required") | (error.type === "required") && (
          <>
            {" "}
            <p className="p-16 text-danger">{REQIURED_ERROR}</p>
          </>
        )
      );
    case "minLength":
      return (
        <p className="p-16 text-danger">
          نعداد کارارکتر ها باید بیشتر از {min} باشد
        </p>
      );
    case "maxLength":
      return (
        <p className="p-16 text-danger">
          نعداد کارارکتر ها باید کمتر از {max} باشد
        </p>
      );
    case "pattern":
      return <p className="p-16 text-danger">{PATTERN_VALIDATION_ERROR}</p>;
    default:
      break;
  }
};

export const recognizeLink = (text) => {
  if (
    text.includes("http://") ||
    text.includes("https://") ||
    text.includes("www")
  ) {
    return "link";
  }
  var urlRegex =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  return text.replace(urlRegex, function (url, b, c) {
    var url2 = c == "www." ? "http://" + url : url;
    return "link";
  });
};
