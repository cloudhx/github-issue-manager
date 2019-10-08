import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as issueActions from "./actions/issueActions";
import { issues } from "../tools/mockData";

describe("Integration Testing", () => {
  // arrange
  var store = createStore(rootReducer, initialState);

  it("handles loading issues", function() {
    // act
    const action = issueActions.loadIssuesSuccess(issues);
    store.dispatch(action);

    // assert
    const loadedIssues = store.getState().issues;
    expect(loadedIssues).toEqual(issues);
  });

  it("handles close issue", function() {
    // arrange
    const issue = issues[0];
    // act
    const action = issueActions.closeIssueOptimistic(issue);
    store.dispatch(action);

    // assert
    const updatedIssues = store.getState().issues;
    expect(updatedIssues.length).toEqual(issues.length - 1);
  });
});
