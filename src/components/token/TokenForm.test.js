import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TokenForm from "./TokenForm";

function renderTokenForm(args) {
  let defaultProps = {
    token: "",
    errors: {},
    saving: false,
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<TokenForm {...props} />);
}

test('labels button as "Authorize" when not saving', () => {
  const { getByText } = renderTokenForm();
  getByText("Authorize").closest("button");
});

test('labels button as "Authorizing..." when saving', () => {
  const { getByText } = renderTokenForm({ saving: true });
  getByText("Authorizing...").closest("button");
});

test("disables button when saving", () => {
  const { getByText } = renderTokenForm({ saving: true });
  expect(getByText("Authorizing...").closest("button")).toHaveAttribute(
    "disabled"
  );
});
