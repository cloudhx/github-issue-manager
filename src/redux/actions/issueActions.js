import * as types from "./actionTypes";
import * as issueApi from "../../api/issueApi";

export function createIssue(issue) {
  return { type: types.CREATE_ISSUE, issue };
}

export function loadIssuesSuccess(issues) {
  return { type: types.LOAD_ISSUES_SUCCESS, issues };
}

export function loadIssues() {
  return function(dispatch, getState) {
    return issueApi
      .getIssues(getState().token)
      .then(issues => {
        dispatch(loadIssuesSuccess(issues));
      })
      .catch(error => {
        throw error;
      });
  };
}
