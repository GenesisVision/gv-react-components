import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withState } from "@dump247/storybook-state";
import moment from "moment";
import React from "react";

import { GVProgramPeriod } from "../dist";

const date = moment();
const startDate = date.subtract(1, "days").format("YYYY-MM-DD");
const endDate = date.add(2, "days").format("YYYY-MM-DD");

storiesOf("Program Period", module).add(
  "Pie",
  withState({ start: startDate, end: endDate })(({ store }) =>
    withInfo()(() => {
      const handleChangeStart = e => {
        store.set({ start: e.target.value });
      };
      const handleChangeEnd = e => {
        store.set({ end: e.target.value });
      };

      return (
        <div className="padding">
          Start:{" "}
          <input
            type="date"
            value={store.state.start}
            onChange={handleChangeStart}
          />
          End:{" "}
          <input
            type="date"
            value={store.state.end}
            onChange={handleChangeEnd}
          />
          <div className="flex vertical-center">
            Result:{" "}
            <GVProgramPeriod
              className="period-pie"
              start={new Date(store.state.start)}
              end={new Date(store.state.end)}
            />
            <GVProgramPeriod
              start={new Date(store.state.start)}
              end={new Date(store.state.end)}
            />
          </div>
        </div>
      );
    })
  )
);
