import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import style from "./style.scss";

export interface GVButtonProps {
  className?: string;
  title: string;
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  fullWidth?: boolean;
  onClick: () => void;
  children: string | JSX.Element;
}

const GVButton: React.SFC<GVButtonProps> = ({
  className,
  title,
  disabled,
  primary,
  secondary,
  fullWidth,
  onClick,
  children
}) => {
  const cn = classnames(style.gvBtn, className, {
    [style.gvBtnFullWidth]: fullWidth,
    [style.disabled]: disabled,
    [style.gvBtnPrimary]: primary,
    [style.gvBtnSecondary]: secondary
  });
  return (
    <button disabled={disabled} className={cn} onClick={onClick} title={title}>
      {children}
    </button>
  );
};

GVButton.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

GVButton.defaultProps = {
  primary: true
};

export default GVButton;
