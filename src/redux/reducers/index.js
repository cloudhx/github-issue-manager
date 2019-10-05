import { combineReducers } from "redux";
import issues from "./issueReducer";

const rootReducer = combineReducers({
  issues
});

export default rootReducer;
