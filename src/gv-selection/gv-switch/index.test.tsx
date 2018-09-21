import React from "react";
import { mount, shallow } from "enzyme";
import GVSwitch from ".";

describe("GVSwitch tests", () => {
  test("should render switch", () => {
    const switchComponent = mount(<GVSwitch name="switch" />);
    expect(switchComponent.find(GVSwitch)).toHaveLength(1);
  });

  test("should have label", () => {
    const switchComponent = shallow(<GVSwitch name="switch" label="label" />);
    const labelClass = "gvSwitchLabel";
    expect(switchComponent.find(`.${labelClass}`)).toHaveLength(1);
  });

  test("should render error", () => {
    const errorClass = "gvSwitchError";
    const switchComponent = shallow(
      <GVSwitch name="switch" touched={true} error="error" />
    );
    expect(switchComponent.find(`.${errorClass}`)).toHaveLength(1);
  });
});
