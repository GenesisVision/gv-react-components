import React from "react";
import { mount, shallow } from "enzyme";
import GVButton from ".";

describe("GVButton tests", () => {
  test("should render button", () => {
    const gvButton = mount(<GVButton>button</GVButton>);
    expect(gvButton.find("button")).toHaveLength(1);
  });

  test("should add primary class", () => {
    const primaryClass = "gvBtnPrimary";
    const gvButton = shallow(<GVButton color="primary">button</GVButton>);
    expect(gvButton.find(`.${primaryClass}`)).toHaveLength(1);
  });

  test("should add secondary class", () => {
    const secondaryClass = "gvBtnSecondary";
    const gvButton = shallow(<GVButton color="secondary">button</GVButton>);
    expect(gvButton.find(`.${secondaryClass}`)).toHaveLength(1);
  });

  test("should add contained class", () => {
    const containedClass = "gvBtnContained";
    const gvButton = shallow(<GVButton variant="contained">button</GVButton>);
    expect(gvButton.find(`.${containedClass}`)).toHaveLength(1);
  });

  test("should add outlined class", () => {
    const outlinedClass = "gvBtnOutlined";
    const gvButton = shallow(<GVButton variant="outlined">button</GVButton>);
    expect(gvButton.find(`.${outlinedClass}`)).toHaveLength(1);
  });

  test("should add outlined class", () => {
    const gvButton = shallow(<GVButton variant="outlined">button</GVButton>);
    expect(gvButton.find("button").prop("type")).toEqual("button");
  });

  test("should add outlined class", () => {
    const gvButton = shallow(<GVButton variant="outlined">button</GVButton>);
    gvButton.setProps({ type: "submit" });
    expect(gvButton.find("button").prop("type")).toEqual("submit");
  });

  test("should call click event", () => {
    const handleClick = jest.fn();
    const gvButton = shallow(<GVButton onClick={handleClick}>button</GVButton>);
    gvButton.simulate("click");
    expect(handleClick).toBeCalled();
  });

  test("should not call click event when disabled", () => {
    const handleClick = jest.fn();
    const gvButton = mount(
      <GVButton disabled onClick={handleClick}>
        button
      </GVButton>
    );
    gvButton.simulate("click");
    expect(handleClick).not.toBeCalled();
  });
});
