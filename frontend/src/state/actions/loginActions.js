import { ADD_USER_TOKEN } from "./types";

export const addUserLoginTokenAction = (user) => ({
  type: ADD_USER_TOKEN,
  payload: user,
});
