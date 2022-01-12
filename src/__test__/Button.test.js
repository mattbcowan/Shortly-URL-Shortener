import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Button from "../components/Button";
configure({ adapter: new Adapter() });

describe("A button component", () => {
  it("renders without crashing", () => {
    shallow(<Button />);
  });

  it("renders a button with the test 'Hello World'", () => {
    const wrapper = shallow(<Button>Hello World</Button>);
    expect(wrapper.text()).toEqual("Hello World");
  });

  it("Test button click event", () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<Button onClick={mockCallBack}>Click Me</Button>);
    wrapper.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
