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

test('labels save button as "Save" when not saving', () => {
  const { getByText } = renderTokenForm();
  getByText("Save").closest("button");
});

test('labels save button as "Validating..." when saving', () => {
  const { getByText } = renderTokenForm({ saving: true });
  getByText("Validating...").closest("button");
});

test("disables save button when saving", () => {
  const { getByText } = renderTokenForm({ saving: true });
  expect(getByText("Validating...").closest("button")).toHaveAttribute(
    "disabled"
  );
});
