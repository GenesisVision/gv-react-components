import React from "react";
import { shallow } from "enzyme";
import GVProgramPeriod from ".";

describe("Period render tests", () => {
  test("should render pie period", () => {
    const start = 0,
      end = 100,
      value = 42;
    const periodComponent = shallow(
      <GVProgramPeriod start={start} end={end} value={value} />
    );
    const periodPieClass = "gvProgramPeriodPie";
    expect(periodComponent.find(`.${periodPieClass}`)).toHaveLength(1);
  });

  test("should render line period", () => {
    const start = 0,
      end = 100,
      value = 42;
    const periodComponent = shallow(
      <GVProgramPeriod start={start} end={end} value={value} variant="line" />
    );
    const periodLineClass = "gvProgramPeriodLine";
    expect(periodComponent.find(`.${periodLineClass}`)).toHaveLength(1);
  });
});
