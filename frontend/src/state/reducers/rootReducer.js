import { combineReducers } from "redux";
import { loginReducers } from "./loginReducer";
import { jobsReducers } from "./jobsReducer";
import { userReducers } from "./userReducer";
import { componyReducers } from "./componyReducer";
import { userResumeReducer } from "./resumeReducer";

const reducer = combineReducers({
  jobs: jobsReducers,
  users: userReducers,
  token: loginReducers,
  compony: componyReducers,
  resume: userResumeReducer,
});

export default reducer;
