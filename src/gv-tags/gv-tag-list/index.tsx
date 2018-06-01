import React from "react";
import PropTypes from "prop-types";
import GVTag from "../gv-tag";
import "./style.scss";

export interface GVTagListProps {
  tags: Array<string>;
}

const GVTagList: React.SFC<GVTagListProps> = ({ tags }) => {
  return (
    <div className="tag-list">{tags.map(x => <GVTag key={x} tag={x} />)}</div>
  );
};

GVTagList.propTypes = {
  tags: PropTypes.array.isRequired
};

export default GVTagList;
