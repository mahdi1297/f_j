import { GET_RESUME_DATA } from "../actions/types";

export const userResumeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_RESUME_DATA:
      return payload;
    default:
      return state;
  }
};
