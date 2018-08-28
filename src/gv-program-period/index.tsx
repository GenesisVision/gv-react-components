import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./style.scss";

export interface GVProgramPeriodProps {
  start: Date;
  end: Date;
  percent: number;
  className?: string;
}

const calcDash = (percent: number) => `${percent} ${100 - percent}`;

const GVProgramPeriod: React.SFC<GVProgramPeriodProps> = ({
  percent,
  className
}) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 42 42"
      className={classnames(styles.programPeriod, className)}
    >
      <circle
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        stroke="#2a353f"
        stroke-width="3"
      />

      <circle
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        stroke="#03bdaf"
        stroke-width="6"
        stroke-dasharray={calcDash(percent)}
        stroke-dashoffset={25}
      />
    </svg>
  );
};

GVProgramPeriod.propTypes = {
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  className: PropTypes.string
};

export default GVProgramPeriod;
