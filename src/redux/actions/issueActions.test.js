import * as issueActions from "./issueActions";
import * as types from "./actionTypes";
import { issues } from "../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Tests Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Issues Thunk", () => {
    it("creates BEGIN_API_CALL and LOAD_ISSUES_SUCCESS when loading issues", () => {
      fetchMock.mock("*", {
        body: issues,
        headers: { "content-type": "application/json" }
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_ISSUES_SUCCESS, issues }
      ];

      const store = mockStore({ issues: [] });
      return store.dispatch(issueActions.loadIssues()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("Tests Issue Actions", () => {
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
