import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./style.scss";
import moment from "moment";

export interface GVProgramPeriodProps {
  start: Date | number;
  end: Date | number;
  value: Date | number;
  className?: string;
}

export const calcPercent = (
  value: Date | number,
  start: Date | number,
  end: Date | number
) => {
  let progress = 0,
    duration = 0;
  if (
    typeof value === "number" &&
    typeof start === "number" &&
    typeof end === "number"
  ) {
    duration = end - start;
    progress = value - start;
  } else {
    const dateNow = moment(value);
    const dateStart = moment(start);
    const dateEnd = moment(end);
    duration = dateEnd.diff(moment(dateStart), "seconds");
    progress = dateNow.diff(dateStart, "seconds");
  }

  if (duration === 0 || progress < 0) return 0;
  if (progress > duration) return 100;
  return progress * 100 / duration;
};

const calcDash = (percent: number) => `${percent} ${100 - percent}`;

const GVProgramPeriod: React.SFC<GVProgramPeriodProps> = ({
  start,
  end,
  value,
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
        strokeDasharray={calcDash(calcPercent(value, start, end))}
        strokeDashoffset={25}
      />
    </svg>
  );
};

GVProgramPeriod.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number])
    .isRequired,
  start: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number])
    .isRequired,
  end: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number])
    .isRequired,
  className: PropTypes.string
};

export default GVProgramPeriod;
