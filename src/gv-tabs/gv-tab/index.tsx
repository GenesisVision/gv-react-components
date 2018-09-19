import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import style from "./style.scss";

export interface GVTabProps {
  label: React.ReactNode;
  value: string;
  selected?: boolean;
  className?: string;
  onChange?: (e: React.SyntheticEvent<EventTarget>, value: string) => void;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const GVTab: React.SFC<GVTabProps> = ({
  label,
  value,
  selected,
  className,
  onChange,
  onClick
}) => {
  const handleChange = (e: React.SyntheticEvent<EventTarget>) => {
    if (onChange) {
      onChange(e, value);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      className={classnames(className || style.gvTab, {
        [style.gvTabActive]: selected
      })}
      onClick={handleChange}
    >
      {label}
    </div>
  );
};

GVTab.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

export default GVTab;
