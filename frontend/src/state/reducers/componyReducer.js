import { COMPONY_DATA } from "../actions/types";

export const componyReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case COMPONY_DATA:
      return payload;
    default:
      return state;
  }
};
