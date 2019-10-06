import { combineReducers } from "redux";
import issues from "./issueReducer";
import token from "./tokenReducer";
import user from "./userReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  issues,
  token,
  user,
  apiCallsInProgress
});

export default rootReducer;
