import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function issueReducer(state = initialState.issues, action) {
  switch (action.type) {
    case types.CREATE_ISSUE:
      return [...state, { ...action.issue }];
    case types.LOAD_ISSUES_SUCCESS:
      return action.issues;
    default:
      return state;
  }
}
