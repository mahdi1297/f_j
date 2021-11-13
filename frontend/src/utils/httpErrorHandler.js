/* eslint-disable no-self-assign */
import React from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

//http and server (req, res) error indicator
//errors are in two (toasts or redirect) way

const redirectError = (command, message, type) => {
  if (command === "toast") {
    type(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  if (command === "redirect") {
    return <Redirect to={`${process.env.PUBLIC_URL}/dashboard/default/`} />;
  }
};

export const httpErrorHandler = (status, type, message, history, path) => {
  switch (status) {
    case 200:
      redirectError(type, message, toast.success);
      break;
    case 401:
      redirectError(type, (path = path));
      break;
    case 403:
      if (type === "toast") {
        redirectError("toast", message, (type = toast.error));
      }
      if (type === "redirect") {
        redirectError(type, (path = path));
      }
      break;
    case 400:
    case 404:
      if (type === "toast") {
        redirectError(type, message, toast.error);
      }
      if (type === "redirect") {
        history.push("/404");
        redirectError(type, "/404");
      }
      break;
    case 405:
      redirectError(type, message, (type = toast.error));
      break;
    case 500:
      window.location.href = "/";
      history.push("/");
      break;
    case 502:
      history.push("/502");
      break;
    case 503:
      history.push("/503");
      break;
    default:
      break;
  }
};
