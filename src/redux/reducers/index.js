import { combineReducers } from "redux";
import issues from "./issueReducer";
import token from "./tokenReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  issues,
  token,
  user
});

export default rootReducer;
