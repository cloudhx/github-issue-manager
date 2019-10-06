import * as types from "./actionTypes";

export function saveToken(token) {
  return { type: types.SAVE_TOKEN, token };
}
