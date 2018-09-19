import React from "react";
import { mount, shallow } from "enzyme";
import GVTextField from ".";
import NumberFormat from "react-number-format";

describe("GVTextField tests", () => {
  test("should render text field", () => {
    const textField = mount(<GVTextField name="textInput" />);
    expect(textField.find(GVTextField)).toHaveLength(1);
  });

  test("should have type prop", () => {
    const textField = shallow(<GVTextField name="textInput" type="password" />);
    expect(textField.find("input").prop("type")).toBe("password");
  });

  test("should have label", () => {
    const textField = shallow(<GVTextField name="textInput" label="label" />);
    expect(textField.find("label")).toHaveLength(1);
  });

  test("should render error", () => {
    const errorClass = "gvTextFieldError";
    const textField = shallow(
      <GVTextField name="textInput" touched={true} error="error" />
    );
    expect(textField.find(`.${errorClass}`)).toHaveLength(1);
  });

  test("should render adornment", () => {
    const adornmentClass = "gvTextFieldAdornment";
    const textField = shallow(
      <GVTextField name="textInput" adornment="adornment" />
    );
    expect(textField.find(`.${adornmentClass}`)).toHaveLength(1);
  });

  test("should render adornment at start", () => {
    const adornmentClass = "gvTextFieldAdornmentStart";
    const textField = shallow(
      <GVTextField
        name="textInput"
        adornment="adornment"
        adornmentPosition="start"
      />
    );
    expect(textField.find(`.${adornmentClass}`)).toHaveLength(1);
  });

  test("should call change event", () => {
    const handleChange = jest.fn();
    const textField = shallow(
      <GVTextField name="textInput" onChange={handleChange} />
    );
    textField.find("input").simulate("change", "7");
    expect(handleChange).toBeCalled();
    expect(handleChange.mock.calls[0][0]).toBe("7");
  });

  test("should render Custom Input Component", () => {
    const textField = shallow(
      <GVTextField name="textInput" InputComponent={NumberFormat} />
    );
    expect(textField.find(NumberFormat)).toHaveLength(1);
  });
});
