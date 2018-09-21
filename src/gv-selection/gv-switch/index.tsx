import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import style from "./style.scss";

export interface GVSwitchProps {
  name: string;
  checked?: boolean;
  color?: string;
  className?: string;
  touched: boolean;
  value: boolean;
  error?: string;
  label?: string;
  disabled?: boolean;
}

class GVSwitch extends React.Component<GVSwitchProps, {}> {
  static propTypes: any;
  static defaultProps: any;
  checkbox: React.RefObject<HTMLInputElement>;

  constructor(props: GVSwitchProps) {
    super(props);
    this.checkbox = React.createRef();
  }

  handleClick = (e: any) => {
    if (this.checkbox.current !== null) {
      e.stopPropagation();
      this.checkbox.current.click();
    }
  };

  handleInputClick = (e: any) => {
    e.stopPropagation();
  };

  renderLabel = () => {
    const { label } = this.props;
    if (!label) return null;

    return (
      <span className={style.gvSwitchLabel} onClick={this.handleClick}>
        {label}
      </span>
    );
  };

  renderError = () => {
    const { touched, error } = this.props;
    if (!touched || !error) return null;

    return <span className={style.gvSwitchError}>{error}</span>;
  };

  render() {
    const {
      name,
      className,
      color,
      value,
      touched,
      disabled,
      ...other
    } = this.props;
    return (
      <span className={style.gvSwitchWrapper}>
        {this.renderLabel()}
        <span
          className={classnames(style.gvSwitch, className, {
            [style.gvSwitchChecked]: value,
            [style.gvSwitchPrimary]: color === "primary",
            [style.gvSwitchSecondary]: color === "secondary",
            [style.gvSwitchDisabled]: disabled
          })}
          onClick={this.handleClick}
        >
          <span className={style.gvSwitchInputWrapper}>
            <span className={style.gvSwitchHandler} />
            <input
              ref={this.checkbox}
              type="checkbox"
              name={name}
              className={classnames(style.gvSwitchInput)}
              checked={value}
              onClick={this.handleInputClick}
              disabled={disabled}
              {...other}
            />
          </span>
          <span className={style.gvSwitchTrack} />
        </span>
        {this.renderError()}
      </span>
    );
  }
}

GVSwitch.propTypes = {
  className: PropTypes.string
};

export default GVSwitch;
