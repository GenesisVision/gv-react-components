import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./style.scss";
import * as GVColors from "../gv-styles/colors";

export interface IGVProgressProps {
  start: Date | number;
  end: Date | number;
  value: Date | number;
  variant: string;
  className?: string;
  valueClassName?: string;
}




const GVProgress: React.SFC<IGVProgressProps> = ({
  start,
  end,
  value,
  variant,
  className,
  valueClassName
}) => {
  const valuePercent = calcPercent(value, start, end);
  if (variant === "pie") return <GVProgressPie />;
  else
    return (
      <div
        className={classnames(
          styles.gvProgramPeriod,
          styles.gvProgramPeriodLine,
          className
        )}
      >
        <div
          className={classnames(styles.gvProgramPeriodValue, valueClassName)}
          style={{ width: `${valuePercent}%` }}
        />
      </div>
    );
};

GVProgress.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number])
    .isRequired,
  start: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number])
    .isRequired,
  end: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number])
    .isRequired,
  variant: PropTypes.oneOf(["pie", "line"]),
  className: PropTypes.string,
  valueClassName: PropTypes.string
};

GVProgress.defaultProps = {
  variant: "pie"
};

export default GVProgress;
