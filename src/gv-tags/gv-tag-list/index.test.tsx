import React from "react";
import { mount, shallow } from "enzyme";
import GVTagList from ".";

describe("GVTagList tests", () => {
  test("should render one tag", () => {
    const tags = ["text"];
    const gvTag = mount(<GVTagList tags={tags} />);
    expect(gvTag.find("div").children()).toHaveLength(1);
  });

  test("should render two tags", () => {
    const tags = ["text1", "text2"];
    const gvTag = shallow(<GVTagList tags={tags} />);
    expect(gvTag.find("div").children()).toHaveLength(2);
  });

  test("should have default class", () => {
    const defaultClass = "gvTagList";
    const gvTag = shallow(<GVTagList tags={[]} />);
    expect(gvTag.find(`.${defaultClass}`)).toHaveLength(1);
  });

  test("should set class", () => {
    const tagClass = "custom-class";
    const gvTag = shallow(<GVTagList tags={[]} className={tagClass} />);
    expect(gvTag.find(`.${tagClass}`)).toHaveLength(1);
  });
});
