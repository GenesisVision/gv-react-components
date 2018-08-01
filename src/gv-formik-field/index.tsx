import PropTypes from "prop-types";
import React from "react";
import { Field } from "formik";
//import { GVTextFieldProps } from "../gv-text-field";

export interface GVFormikFieldProps {
  CustomComponent: any;
  name: string;
}

const GVFormikField: React.SFC<GVFormikFieldProps> = ({
  CustomComponent,
  name,
  ...props
}) => {
  return (
    <Field
      name={name}
      render={({ field, form }: any) => {
        return (
          <CustomComponent
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
  CustomComponent: PropTypes.any,
  name: PropTypes.string
};

export default GVFormikField;
