import { ADD_USER_DATA } from "./types";

export const addUserDataAction = (data) => ({
  type: ADD_USER_DATA,
  payload: data,
});
