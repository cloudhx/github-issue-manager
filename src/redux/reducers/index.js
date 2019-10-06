import { combineReducers } from "redux";
import issues from "./issueReducer";
import token from "./tokenReducer";

const rootReducer = combineReducers({
  issues,
  token
});

export default rootReducer;
