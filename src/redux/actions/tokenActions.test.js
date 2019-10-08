import * as tokenActions from "./tokenActions";
import * as types from "./actionTypes";
import { token } from "../../tools/mockData";

describe("tests token actions", () => {
  it("tests SAVE_TOKEN action", () => {
    //arrange
    const expectedAction = {
      type: types.SAVE_TOKEN,
      token
    };

    //act
    const action = tokenActions.saveToken(token);

    //assert
    expect(action).toEqual(expectedAction);
  });

  it("tests REMOVE_TOKEN action", () => {
    //arrange
    const expectedAction = {
      type: types.REMOVE_TOKEN
    };

    //act
    const action = tokenActions.removeToken();

    //assert
    expect(action).toEqual(expectedAction);
  });
});
