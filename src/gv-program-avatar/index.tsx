import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "./style.scss";
import GVProgramDefaultAvatar from "./gv-propgram-default-avatar";

export interface GVProgramAvatarProps {
  url: string;
  alt: string;
  level: number;
  size: string;
  className?: string;
  imageClassName?: string;
  levelClassName?: string;
}

export interface GVProgramAvatarState {
  errored: boolean;
}

class GVProgramAvatar extends React.Component<
  GVProgramAvatarProps,
  GVProgramAvatarState
> {
  static propTypes: any;
  static defaultProps: any;

  constructor(props: GVProgramAvatarProps) {
    super(props);

    this.state = {
      errored: false
    };
  }
  handleError = (e: any) => {
    e.target.onerror = null;
    this.setState({ errored: true });
  };

  renderImage = () => {
    const { url, alt, imageClassName } = this.props;
    if (this.state.errored || url === undefined)
      return (
        <GVProgramDefaultAvatar title={alt} imageClassName={imageClassName} />
      );
    return (
      <img
        className={classnames(imageClassName || style.programAvatarImage)}
        src={url}
        alt={alt}
        onError={this.handleError}
      />
    );
  };

  render() {
    const { level, size, className, levelClassName } = this.props;

    return (
      <div
        className={classnames(style.programAvatar, className, {
          [style.programAvatarSmall]: size === "small",
          [style.programAvatarMedium]: size === "medium",
          [style.programAvatarBig]: size === "big"
        })}
      >
        {this.renderImage()}
        <span className={classnames(style.programAvatarLevel, levelClassName)}>
          {level}
        </span>
      </div>
    );
  }
}

GVProgramAvatar.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  size: PropTypes.oneOf(["small", "medium", "big"]),
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  levelClassName: PropTypes.string
};

GVProgramAvatar.defaultProps = {
  size: "small"
};

export { GVProgramDefaultAvatar };
export default GVProgramAvatar;
