import { ErrorMessage } from "components/ErrorMessage";
import React from "react";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<ErrorMessage error="test error" />);
});
