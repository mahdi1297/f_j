import { ADD_USER_TOKEN } from "../actions/types";

export const loginReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_USER_TOKEN:
      return payload;
    default:
      return state;
  }
};
