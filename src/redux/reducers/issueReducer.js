import * as types from "../actions/actionTypes";

export default function issueReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_ISSUE:
      return [...state, { ...action.issue }];
    default:
      return state;
  }
}
