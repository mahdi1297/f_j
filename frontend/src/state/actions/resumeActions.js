import { GET_RESUME_DATA } from "./types";

export const getUserResumeAction = (payload) => ({
  type: GET_RESUME_DATA,
  payload: payload,
});
