import axios from "axios";
import { httpErrorHandler } from "./httpErrorHandler";

export const getApi = (path) => {
  return axios.get(path);
};

export const apiGetter = async (path) => {
  let app;
  await axios
    .get(path)
    .then((result) => {
      let renewResult = {
        type: "success",
        data: result,
      };
      app = renewResult;
    })
    .catch((error) => {
      let renewResult;
      if (error.response) {
        renewResult = {
          type: "error",
          status: error.response.status,
          headers: error.response.headers,
          data: error.response,
        };
      } else {
        renewResult = {
          type: "error",
          status: 500,
          headers: "header response",
          data: "internal server error",
        };
      }
      app = renewResult;
    });
  return app;
};
export const apiPuter = async (path, data) => {
  let app;
  await axios
    .put(path, data)
    .then((result) => {
      let renewResult = {
        type: "success",
        data: result,
      };
      app = renewResult;
    })
    .catch((error) => {
      let renewResult;
      if (error.response) {
        renewResult = {
          type: "error",
          status: error.response.status,
          headers: error.response.headers,
          data: error.response,
        };
      } else {
        renewResult = {
          type: "error",
          status: 500,
          headers: "header response",
          data: "internal server error",
        };
      }
      app = renewResult;
    });
  if (app.data.status > 499) {
    httpErrorHandler(500, "", "", "", "");
  }
  return app;
};

export const apiPoster = async (path, data) => {
  let app;
  await axios
    .post(path, data)
    .then((result) => {
      let renewResult = {
        type: "success",
        data: result,
      };
      app = renewResult;
    })
    .catch((error) => {
      let renewResult;
      if (error.response) {
        renewResult = {
          type: "error",
          status: error.response.status,
          headers: error.response.headers,
          data: error.response,
        };
      } else {
        renewResult = {
          type: "error",
          status: 500,
          headers: "header response",
          data: "internal server error",
        };
      }
      app = renewResult;
    });
  if (app.data.status > 499) {
    httpErrorHandler(500, "", "", "", "");
  }
  return app;
};

export const apiDeleter = async (path) => {
  let app;
  await axios
    .delete(path)
    .then((result) => {
      let renewResult = {
        type: "success",
        data: result,
      };
      app = renewResult;
    })
    .catch((error) => {
      let renewResult;
      if (error.response) {
        renewResult = {
          type: "error",
          status: error.response.status,
          headers: error.response.headers,
          data: error.response,
        };
      } else {
        renewResult = {
          type: "error",
          status: 500,
          headers: "header response",
          data: "internal server error",
        };
      }
      app = renewResult;
    });
  return app;
};

export const apiPatcher = async (path) => {
  let app;
  await axios
    .patch(path)
    .then((result) => {
      let renewResult = {
        type: "success",
        data: result,
      };
      app = renewResult;
    })
    .catch((error) => {
      let renewResult;
      if (error.response) {
        renewResult = {
          type: "error",
          status: error.response.status,
          headers: error.response.headers,
          data: error.response,
        };
      } else {
        renewResult = {
          type: "error",
          status: 500,
          headers: "header response",
          data: "internal server error",
        };
      }
      app = renewResult;
    });
  return app;
};
