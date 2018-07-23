import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";

export interface GVTagProps {
  tag: string;
  className?: string;
}

const GVTag: React.SFC<GVTagProps> = ({ tag, className }) => {
  const tagClass: string = className || style.gvTag;
  return <div className={tagClass}>{tag}</div>;
};

GVTag.propTypes = {
  tag: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default GVTag;
