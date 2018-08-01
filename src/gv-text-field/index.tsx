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
      <div className={style.gvTextFieldError}>{this.props.error}</div>
    );

  renderLabel = () => {
    if (!this.props.label) return null;
    return (
      <label
        className={classnames(style.gvTextFieldLabel, {
          [style.gvTextFieldLabelShrink]:
            this.state.focused ||
            this.props.adornment ||
            (this.props.value && this.props.value.length > 0)
        })}
      >
        {this.props.label}
      </label>
    );
  };

  renderAdornment = () => {
    const { adornment, adornmentPosition } = this.props;
    if (!adornment) return null;
    return (
      <div
        className={classnames(style.gvTextFieldAdornment, {
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
      touched,
      error,
      adornment,
      adornmentPosition,
      ...otherProps
    } = this.props;
    return (
      <input
        className={classnames(style.gvTextFieldInput)}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...otherProps}
      />
    );
  };
  render() {
    return (
      <div className={style.gvTextFieldWrapper}>
        {this.renderLabel()}
        <div
          className={classnames(this.props.className || style.gvTextField, {
            [style.gvTextFieldDisabled]: this.props.disabled,
            [style.gvTextFieldInvalid]: this.props.touched && this.props.error,
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
