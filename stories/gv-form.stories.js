import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";

import {
  GVTextField,
  GVFormikField,
  GVButton,
  GVSwitch
} from "../dist/index.js";
import { withFormik } from "formik";
import NumberFormat from "react-number-format";

storiesOf("Form", module).add(
  "Standalone Text Input",
  withInfo()(() => (
    <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
      <GVTextField
        type="text"
        name="default"
        label="Default"
        autoComplete="off"
      />
      <br />

      <GVTextField
        type="email"
        name="filled"
        label="Email"
        value="mail@example.com"
        onChange={() => {}}
        autoComplete="off"
      />
      <br />
      <GVTextField
        type="text"
        name="error"
        label="Error"
        error="Invalid input"
        touched={true}
        value="misprint"
        onChange={() => {}}
        autoComplete="off"
      />
      <br />
      <GVTextField
        type="text"
        name="disabled"
        label="Disabled"
        value="Try edit"
        onChange={() => {}}
        autoComplete="off"
        disabled
      />
      <br />
      <GVTextField
        type="text"
        name="adornment"
        label="Adornment"
        value="1000"
        adornment="GVT"
        autoComplete="off"
        onChange={() => {}}
      />
      <br />
      <GVTextField
        type="text"
        name="adornmentStart"
        label="Using NumberFormat"
        adornment="$"
        adornmentPosition="start"
        value="1000"
        InputComponent={NumberFormat}
        autoComplete="off"
        onChange={() => {}}
        decimalScale={8}
        thousandSeparator=", "
      />
      <br />

      <GVTextField
        type="textarea"
        name="textArea"
        label="Text Area"
        value={`text\narea`}
      />
      <br />
    </div>
  ))
);

const LoginForm = ({ handleSubmit }) => {
  return (
    <div className="padding">
      <form id="form" onSubmit={handleSubmit} noValidate>
        <h3>Login</h3>

        <div>
          <GVFormikField
            type="email"
            name="email"
            label="Email"
            component={GVTextField}
          />
        </div>
        <div>
          <GVFormikField
            type="password"
            name="password"
            placeholder="Password"
            component={GVTextField}
            adornment={<a href="example.com">forgot?</a>}
            adornmentPosition="end"
          />
        </div>
        <div>
          <GVFormikField
            type="textarea"
            name="additionalInfo"
            label="Additional info"
            autoComplete="off"
            component={GVTextField}
            rows={3}
          />
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <GVFormikField
            type="checkbox"
            color="primary"
            name="rememberMe"
            label="remember me?"
            component={GVSwitch}
          />
        </div>
        <div>
          <GVButton type="submit" color="primary">
            Submit
          </GVButton>
        </div>
      </form>
    </div>
  );
};

const FormFormik = withFormik({
  displayName: "login",
  mapPropsToValues: () => ({
    email: "",
    password: "123",
    rememberMe: true,
    additionalInfo: ""
  }),
  validate: values => {
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (values.rememberMe === false)
      errors.rememberMe = "rememberMe is required";
    if (values.additionalInfo.length > 10)
      errors.additionalInfo = "Please enter less than 10 symbols";
    return errors;
  },
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values, setSubmitting);
  }
})(LoginForm);

storiesOf("Form", module).add(
  "Formik wrapper",
  withInfo()(() => <FormFormik onSubmit={action()} />)
);
