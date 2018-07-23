import React from "react";
import PropTypes from "prop-types";
import GVTag from "../gv-tag";
import style from "./style.scss";

export interface GVTagListProps {
  tags: Array<string>;
  className?: string;
}

const GVTagList: React.SFC<GVTagListProps> = ({ tags, className }) => {
  const tagsClass: string = className || style.gvTagList;
  return (
    <div className={tagsClass}>{tags.map(x => <GVTag key={x} tag={x} />)}</div>
  );
};

GVTagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string
};

export default GVTagList;
