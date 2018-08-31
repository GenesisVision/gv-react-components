import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./style.scss";
import moment from "moment";

export interface GVProgramPeriodProps {
  start: Date;
  end: Date;
  className?: string;
}

const calcPercent = (start: Date, end: Date) => {
  const dateNow = moment();
  const dateStart = moment(start);
  const dateEnd = moment(end);
  const durationSeconds = dateEnd.diff(moment(dateStart), "seconds");
  const passedSeconds = dateNow.diff(dateStart, "seconds");
  if (durationSeconds === 0) return 0;
  if (passedSeconds > durationSeconds) return 100;
  return passedSeconds * 100 / durationSeconds;
};

const calcDash = (percent: number) => `${percent} ${100 - percent}`;

const GVProgramPeriod: React.SFC<GVProgramPeriodProps> = ({
  start,
  end,
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
        strokeWidth="3"
      />

      <circle
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        stroke="#03bdaf"
        strokeWidth="6"
        strokeDasharray={calcDash(calcPercent(start, end))}
        strokeDashoffset={25}
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
