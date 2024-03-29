import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function tokenReducer(state = initialState.token, action) {
  switch (action.type) {
    case types.SAVE_TOKEN:
      return action.token;
    case types.REMOVE_TOKEN:
      return "";
    default:
      return state;
  }
}
