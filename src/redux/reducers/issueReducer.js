import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function issueReducer(state = initialState.issues, action) {
  switch (action.type) {
    case types.CREATE_ISSUE:
      return [...state, { ...action.issue }];
    case types.EDIT_ISSUE_SUCCESS:
      return state.map(issue =>
        issue.id === action.issue.id ? action.issue : issue
      );
    case types.CLOSE_ISSUE_OPTIMISTIC:
      return state.filter(issue => issue.id !== action.issue.id);
    case types.LOAD_ISSUES_SUCCESS:
      return action.issues;
    default:
      return state;
  }
}
