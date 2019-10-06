import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";

export function loadUserSuccess(user) {
  return { type: types.LOAD_USER_SUCCESS, user };
}

export function loadUser() {
  return function(dispatch, getState) {
    return userApi
      .getUser(getState().token)
      .then(user => {
        dispatch(loadUserSuccess(user));
      })
      .catch(error => {
        throw error;
      });
  };
}
