import React from "react";
import { mount, shallow } from "enzyme";
import GVProgramAvatar from ".";

describe("GVProgramAvatar tests", () => {
  test("should render program avatar", () => {
    const programAvatar = mount(
      <GVProgramAvatar url="example.com/image.jpg" alt="avatar" level={1} />
    );
    expect(programAvatar.find("img")).toHaveLength(1);
  });

  test("should add url prop", () => {
    const programAvatar = shallow(
      <GVProgramAvatar url="example.com/image.jpg" alt="avatar" level={1} />
    );
    expect(programAvatar.find("img").prop("src")).toBe("example.com/image.jpg");
  });

  test("should add alt prop", () => {
    const programAvatar = shallow(
      <GVProgramAvatar url="example.com/image.jpg" alt="avatar" level={1} />
    );
    expect(programAvatar.find("img").prop("alt")).toBe("avatar");
  });

  test("should add level prop", () => {
    const levelClassName = "programAvatarLevel";
    const programAvatar = shallow(
      <GVProgramAvatar url="example.com/image.jpg" alt="avatar" level={1} />
    );
    expect(programAvatar.find(`.${levelClassName}`).text()).toBe("1");
  });
});
