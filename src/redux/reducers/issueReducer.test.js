import issueReducer from "./issueReducer";
import * as actions from "../actions/issueActions";

it("removes issue when passed CLOSE_ISSUE_OPTIMISTIC", () => {
  // arrange
  const initialState = [
    {
      title: "Issue 1",
      id: 1
    },
    {
      title: "Issue 2",
      id: 2
    },
    {
      title: "Issue 3",
      id: 3
    }
  ];

  const closedIssue = {
    title: "Issue 2",
    id: 2
  };

  const action = actions.closeIssueOptimistic(closedIssue);

  // act
  const newState = issueReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(initialState.length - 1);
  expect(newState[0].title).toEqual("Issue 1");
  expect(newState[1].title).toEqual("Issue 3");
});
