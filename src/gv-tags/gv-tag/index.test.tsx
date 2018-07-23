import React from "react";
import GVTag from "../gv-tag";
import { mount, shallow } from "enzyme";

describe("GVTag tests", () => {
  test("should render text", () => {
    const tagText = "text";
    const gvTag = mount(<GVTag tag={tagText} />);
    expect(gvTag.find("div").text()).toBe(tagText);
  });

  test("should have default class", () => {
    const defaultClass = "gvTag";
    const gvTag = shallow(<GVTag tag="" />);
    expect(gvTag.find(`.${defaultClass}`)).toHaveLength(1);
  });

  test("should set class", () => {
    const tagClass = "custom-class";
    const gvTag = shallow(<GVTag tag="" className={tagClass} />);
    expect(gvTag.find(`.${tagClass}`)).toHaveLength(1);
  });
});
