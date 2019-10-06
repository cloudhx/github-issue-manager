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

export function editIssueSuccess(issue) {
  return { type: types.EDIT_ISSUE_SUCCESS, issue };
}

export function editIssue(issue) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    return issueApi
      .editIssue(issue, getState().token)
      .then(updatedIssue => {
        dispatch(editIssueSuccess(updatedIssue));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function closeIssueOptimistic(issue) {
  return { type: types.CLOSE_ISSUE_OPTIMISTIC, issue };
}

export function closeIssue(issue) {
  return function(dispatch, getState) {
    // Doing optimistic close, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(closeIssueOptimistic(issue));
    return issueApi.editIssue(
      {
        url: issue.url,
        state: "closed"
      },
      getState().token
    );
  };
}
