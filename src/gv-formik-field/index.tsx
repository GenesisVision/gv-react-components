import PropTypes from "prop-types";
import React from "react";
import { Field } from "formik";

export interface GVFormikFieldProps {
  component: any;
  name: string;
  [key: string]: any;
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

GVFormikField.propTypes = {
  component: PropTypes.any,
  name: PropTypes.string
};

export default GVFormikField;
