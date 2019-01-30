import moment from "moment";

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
