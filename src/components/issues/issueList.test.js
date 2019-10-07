import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import IssueList from "./IssueList";
import { issues } from "../../tools/mockData";

function renderIssueList(args) {
  let defaultProps = {
    issues: [],
    closing: false,
    onCloseClick: () => {}
  };
  const props = { ...defaultProps, ...args };
  return render(
    <MemoryRouter>
      <IssueList {...props} />
    </MemoryRouter>
  );
}

test("lists all issues", () => {
  const { getAllByText } = renderIssueList({
    issues: issues
  });

  expect(getAllByText(/close/i)).toHaveLength(issues.length);
  // just like a manual tester, we'll instruct our test to wait for the alert
  // to show up before continuing with our assertions.
  //const alert = await findByRole("alert");

  // .toHaveTextContent() comes from jest-dom's assertions
  // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
  // but jest-dom will give you better error messages which is why it's recommended
  //expect(alert).toHaveTextContent(/congrats/i);
  //expect(window.localStorage.getItem("token")).toEqual(fakeUserResponse.token);
});
