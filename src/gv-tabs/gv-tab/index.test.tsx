import React from "react";
import { mount, shallow } from "enzyme";
import GVTab from ".";

describe("GVTab tests", () => {
  test("should render tab", () => {
    const tabClass = "gvTab";
    const gvTab = mount(<GVTab label="tab" value="tab" />);
    expect(gvTab.find(`.${tabClass}`)).toHaveLength(1);
  });

  test("should have label", () => {
    const label = "tab";
    const tabClass = "gvTab";
    const gvTab = shallow(<GVTab label={label} value="tab" />);
    expect(gvTab.find(`.${tabClass}`).text()).toBe(label);
  });

  test("should have active class", () => {
    const tabActiveClass = "gvTabActive";
    const gvTab = shallow(<GVTab label="tab" value="tab" selected />);
    expect(gvTab.find(`.${tabActiveClass}`)).toHaveLength(1);
  });

  test("should have count", () => {
    const count = 1;
    const countClass = "gvTabCount";
    const gvTab = shallow(<GVTab count={count} value="tab" label="tab" />);
    expect(gvTab.find(`.${countClass}`).text()).toBe(`${count}`);
  });

  test("should have zero count", () => {
    const count = 0;
    const countClass = "gvTabCount";
    const gvTab = shallow(<GVTab count={count} value="tab" label="tab" />);
    expect(gvTab.find(`.${countClass}`).text()).toBe(`${count}`);
  });

  test("should have count Class", () => {
    const count = 1;
    const countClass = "countClassName";
    const gvTab = shallow(
      <GVTab
        count={count}
        value="tab"
        label="tab"
        countClassName={countClass}
      />
    );
    expect(gvTab.find(`.${countClass}`)).toHaveLength(1);
  });

  test("should call click event", () => {
    const handleClick = jest.fn();
    const gvTab = shallow(
      <GVTab label="tab" value="tab" onClick={handleClick} />
    );
    gvTab.simulate("click");
    expect(handleClick).toBeCalled();
  });

  test("should call change event", () => {
    const handleChange = jest.fn();
    const gvTab = shallow(
      <GVTab label="tab" value="tab" onChange={handleChange} />
    );
    gvTab.simulate("click");
    expect(handleChange).toBeCalled();
  });
});
