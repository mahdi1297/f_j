import { JOB_LIST_DATA, REMOVE_LIST_DATA } from "./../actions/types";

export const jobsReducers = (state = [], { type, payload }) => {
  switch (type) {
    case JOB_LIST_DATA:
      return payload;
    case REMOVE_LIST_DATA:
    default:
      return state;
  }
};
