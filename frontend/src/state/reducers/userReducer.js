import { ADD_USER_DATA } from "../actions/types";

export const userReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_USER_DATA:
      return payload;
    default:
      return state;
  }
};
