import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Button from "./components/Button";
configure({ adapter: new Adapter() });

describe("A button component", () => {
  it("renders without crashing", () => {
    shallow(<Button />);
  });
});
