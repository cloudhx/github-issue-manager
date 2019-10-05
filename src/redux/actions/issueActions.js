import * as types from "./actionTypes";

export function createIssue(issue) {
  return { type: types.CREATE_ISSUE, issue };
}
