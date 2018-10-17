import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";
import * as GVColors from "../gv-styles/colors";

export interface GVProgramDefaultAvatarProps {
  color?: string;
  imageClassName?: string;
}

const GVProgramDefaultAvatar: React.SFC<GVProgramDefaultAvatarProps> = ({
  color,
  imageClassName
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 80 80"
      className={imageClassName || style.programAvatarDefaultImage}
    >
      <rect width="80" height="80" fill={color} rx="8" />
      <g fill="#1B232B" opacity=".3">
        <path d="M58 38h-8v18h8zM30 48h-8v8h8zM44 24h-8v32h8z" />
      </g>
    </svg>
  );
};

GVProgramDefaultAvatar.propTypes = {
  color: PropTypes.string,
  imageClassName: PropTypes.string
};

GVProgramDefaultAvatar.defaultProps = {
  color: GVColors.$backgroundColor
};

export default GVProgramDefaultAvatar;
