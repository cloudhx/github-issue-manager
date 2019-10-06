import * as types from "./actionTypes";
import * as issueApi from "../../api/issueApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function createIssue(issue) {
  return { type: types.CREATE_ISSUE, issue };
}

export function loadIssuesSuccess(issues) {
  return { type: types.LOAD_ISSUES_SUCCESS, issues };
}

export function loadIssues() {
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return issueApi
      .getIssues(getState().token)
      .then(issues => {
        dispatch(loadIssuesSuccess(issues));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
