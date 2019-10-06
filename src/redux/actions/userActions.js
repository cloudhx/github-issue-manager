import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadUserSuccess(user) {
  return { type: types.LOAD_USER_SUCCESS, user };
}

export function loadUser() {
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return userApi
      .getUser(getState().token)
      .then(user => {
        dispatch(loadUserSuccess(user));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
