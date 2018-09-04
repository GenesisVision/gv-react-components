import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import style from "./style.scss";

export interface GVTextFieldProps {
  name: string;
  type?: string;
  label?: string;
  value?: string;
  touched?: boolean;
  error?: string;
  className?: string;
  wrapperClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  adornmentClassName?: string;
  adornment?: React.ReactNode;
  adornmentPosition?: "start" | "end";
  disabled?: boolean;
  onBlur?: (e: any) => void;
  onChange?: (e: any) => void;
}

export interface GVTextFieldState {
  focused: boolean;
}

class GVTextField extends React.Component<GVTextFieldProps, GVTextFieldState> {
  static propTypes: any;
  static defaultProps: any;

  constructor(props: GVTextFieldProps) {
    super(props);

    this.state = {
      focused: false
    };
  }

  handleFocus = () => {
    this.setState({ focused: true });
  };

  handleBlur = (e: any) => {
    this.setState({
      focused: false
    });

    if (this.props.onBlur) this.props.onBlur(e);
  };

  renderError = () =>
    this.props.touched &&
    this.props.error && (
      <div
        className={classnames(
          style.gvTextFieldError,
          this.props.errorClassName
        )}
      >
        {this.props.error}
      </div>
    );

  renderLabel = () => {
    if (!this.props.label) return null;
    return (
      <label
        className={classnames(
          style.gvTextFieldLabel,
          this.props.labelClassName,
          {
            [style.gvTextFieldLabelShrink]:
              this.state.focused ||
              this.props.adornment ||
              (this.props.value && this.props.value.length > 0)
          }
        )}
      >
        {this.props.label}
      </label>
    );
  };

  renderAdornment = () => {
    const { adornment, adornmentPosition, adornmentClassName } = this.props;
    if (!adornment) return null;
    return (
      <div
        className={classnames(style.gvTextFieldAdornment, adornmentClassName, {
          [style.gvTextFieldAdornmentStart]: adornmentPosition === "start",
          [style.gvTextFieldAdornmentEnd]: adornmentPosition === "end"
        })}
      >
        {adornment}
      </div>
    );
  };

  renderInput = () => {
    const {
      onBlur,
      className,
      wrapperClassName,
      inputClassName,
      labelClassName,
      errorClassName,
      adornmentClassName,
      touched,
      error,
      adornment,
      adornmentPosition,
      ...otherProps
    } = this.props;
    return (
      <input
        className={classnames(style.gvTextFieldInput, inputClassName)}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...otherProps}
      />
    );
  };
  render() {
    const {
      className,
      wrapperClassName,
      disabled,
      touched,
      error
    } = this.props;
    return (
      <div className={classnames(style.gvTextFieldWrapper, wrapperClassName)}>
        {this.renderLabel()}
        <div
          className={classnames(style.gvTextField, className, {
            [style.gvTextFieldDisabled]: disabled,
            [style.gvTextFieldInvalid]: touched && error,
            [style.gvTextFieldFocused]: this.state.focused
          })}
        >
          {this.renderInput()}
          {this.renderAdornment()}
        </div>
        {this.renderError()}
      </div>
    );
  }
}

GVTextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  errorClassName: PropTypes.string,
  adornmentClassName: PropTypes.string,
  placeholder: PropTypes.string,
  adornment: PropTypes.node,
  adornmentPosition: PropTypes.oneOf(["start", "end"]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

GVTextField.defaultProps = {
  type: "text",
  adornmentPosition: "end"
};

export default GVTextField;
