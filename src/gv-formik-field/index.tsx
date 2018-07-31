import React from "react";
import { Field } from "formik";
import { GVTextFieldProps } from "../gv-text-field";

export interface GVFormikFieldProps {
  component: new () => React.Component<GVTextFieldProps>;
  name: string;
}

const GVFormikField: React.SFC<GVFormikFieldProps> = ({
  component: Component,
  name,
  ...props
}) => {
  return (
    <Field
      name={name}
      render={({ field, form }: any) => {
        return (
          <Component
            {...field}
            {...props}
            touched={form.touched[field.name]}
            error={form.errors[field.name]}
          />
        );
      }}
    />
  );
};

export default GVFormikField;
