import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export interface GVTagProps {
  tag: string;
}

const GVTag: React.SFC<GVTagProps> = ({ tag }) => {
  return <div className="tag">{tag}</div>;
};

GVTag.propTypes = {
  tag: PropTypes.string.isRequired
};

export default GVTag;
