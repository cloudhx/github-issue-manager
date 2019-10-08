import React from "react";
import { mount } from "enzyme";
import { TokenPage } from "./TokenPage";

function render(args) {
  const defaultProps = {
    token: "",
    user: {},
    history: {},
    saveToken: jest.fn(),
    removeToken: jest.fn(),
    loadUser: jest.fn(),
    match: {}
  };

  const props = { ...defaultProps, ...args };

  return mount(<TokenPage {...props} />);
}

it("sets error when attempting to save an empty token field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Personal access token is required.");
});
