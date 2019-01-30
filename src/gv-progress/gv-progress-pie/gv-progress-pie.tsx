import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./style.scss";
import * as GVColors from "../gv-styles/colors";
import { calcPercent } from "../calc-percent";

const calcDash = (percent: number) => `${percent} ${100 - percent}`;

const GVProgressPie: React.SFC<IGVProgressProps> = ({
  start,
  end,
  value,
  className
}) => {
  const valuePercent = calcPercent(value, start, end);
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 42 42"
      className={classnames(
        styles.gvProgramPeriod,
        styles.gvProgramPeriodPie,
        className
      )}
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
        stroke={GVColors.$primaryColor}
        strokeWidth="6"
        strokeDasharray={calcDash(valuePercent)}
        strokeDashoffset={25}
      />
    </svg>
  );
};

export default GVProgressPie;
