import * as issueActions from "./issueActions";
import * as types from "./actionTypes";
import { issues } from "../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("tests issue actions", () => {
  it("tests LOAD_ISSUES_SUCCESS action", () => {
    //arrange
    const expectedAction = {
      type: types.LOAD_ISSUES_SUCCESS,
      issues
    };

    //act
    const action = issueActions.loadIssuesSuccess(issues);

    //assert
    expect(action).toEqual(expectedAction);
  });
});
