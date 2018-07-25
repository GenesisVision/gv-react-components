import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import style from "./style.scss";

export interface GVButtonProps {
  variant?: string;
  color?: string;
  title?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: string | JSX.Element;
}

const GVButton: React.SFC<GVButtonProps> = ({
  className,
  title,
  variant,
  color,
  disabled,
  onClick,
  children
}) => {
  const classname = classnames(style.gvBtn, className, {
    [style.gvBtnPrimary]: color === "primary",
    [style.gvBtnSecondary]: color === "secondary",
    [style.gvBtnOutlined]: variant === "outlined",
    [style.gvBtnContained]: variant === "contained"
  });
  return (
    <button
      disabled={disabled}
      className={classname}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};

GVButton.propTypes = {
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  title: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

GVButton.defaultProps = {
  variant: "contained",
  color: "primary"
};

export default GVButton;
