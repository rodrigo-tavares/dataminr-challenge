import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import { LineFeature } from "../shared/lineFeature";

const props = {
  name: "test",
  value: true,
  onChange: jest.fn(),
  hasChildren: true,
  isGroupLine: false,
  maxValue: 100,
  selectedValue: 20,
  frequency: 10,
};
describe("Line Feature component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<LineFeature {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should receive a toggle value false", () => {
    const customProps = {
        value: false,
      },
      view = mount(<LineFeature {...customProps} />);

    expect(view.prop("value")).toEqual(false);
  });

  it("should click toggle button", () => {
    const onChange = jest.fn(),
      customProps = {
        value: true,
        onChange,
      },
      view = mount(<LineFeature {...customProps} />).find("Toggle");
    view.simulate("click");
    expect(onChange).toHaveBeenCalled();
  });
});
