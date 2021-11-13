import { JOB_LIST_DATA, REMOVE_LIST_DATA } from "./types";

export const addJobListDataAction = (jobs) => ({
  type: JOB_LIST_DATA,
  payload: jobs,
});

export const removeJobListDataAction = () => ({
  type: REMOVE_LIST_DATA,
  payload: [],
});
