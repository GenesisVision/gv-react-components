import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";
import text2hex from "./text2hex";

export interface GVProgramDefaultAvatarProps {
  title: string;
  imageClassName?: string;
}

const GVProgramDefaultAvatar: React.SFC<GVProgramDefaultAvatarProps> = ({
  title,
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
      <rect width="80" height="80" fill={text2hex(title)} rx="8" />
      <g fill="#1B232B" opacity=".3">
        <path d="M58 38h-8v18h8zM30 48h-8v8h8zM44 24h-8v32h8z" />
      </g>
    </svg>
  );
};

GVProgramDefaultAvatar.propTypes = {
  title: PropTypes.string,
  imageClassName: PropTypes.string
};

export default GVProgramDefaultAvatar;
