import { mount } from "enzyme";
import React from "react";
import Dashboard from "../components/dashboard";
import renderer from "react-test-renderer";

// eslint-disable-next-line jest/no-mocks-import
import { dataMock } from "../__mocks__/data.mock";

jest.mock("../__mocks__/data.mock.js");

const props = {
  features: dataMock.features,
};

describe("Dashboard component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Dashboard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should receive at least the mock features", () => {
    const customProps = {
      features: dataMock.features,
    }, view = mount(<Dashboard {...customProps} />);


    expect((view).prop('features')).toEqual(dataMock.features);
  });

  it("should receive a empty array of feature", () => {
    const customProps = {
      features: [],
    }, view = mount(<Dashboard {...customProps} />);


    expect((view).prop('features')).toEqual([]);
  });
});
