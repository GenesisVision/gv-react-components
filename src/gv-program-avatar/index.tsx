import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import avatar from "./manager-avatar.png";
import style from "./style.scss";

export interface GVProgramAvatarProps {
  url: string;
  alt: string;
  level: string;
  className?: string;
  imageClassName?: string;
  levelClassName?: string;
}

const GVProgramAvatar: React.SFC<GVProgramAvatarProps> = ({
  url,
  alt,
  level,
  className,
  imageClassName,
  levelClassName
}) => {
  const handleError = (e: any) => {
    e.target.src = avatar;
  };
  return (
    <div className={classnames(className || style.programAvatar)}>
      <img
        className={imageClassName || style.programAvatarImage}
        src={url}
        alt={alt}
        onError={handleError}
      />
      <span className={levelClassName || style.programAvatarLevel}>
        {level}
      </span>
    </div>
  );
};

GVProgramAvatar.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default GVProgramAvatar;
