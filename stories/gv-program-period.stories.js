import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withState } from "@dump247/storybook-state";
import moment from "moment";
import React from "react";

import { GVProgramPeriod } from "../dist";

const startDate = moment()
  .subtract(1, "days")
  .format("YYYY-MM-DD");
const endDate = moment()
  .add(5, "days")
  .format("YYYY-MM-DD");

storiesOf("Program Period", module).add(
  "Pie",
  withState({ valueDate: moment().format("YYYY-MM-DD"), valueNumber: 7 })(
    ({ store }) =>
      withInfo()(() => {
        const handleChangeValueDate = e => {
          store.set({ valueDate: e.target.value });
        };
        const handleChangeValueNumber = e => {
          store.set({ valueNumber: +e.target.value });
        };
        return (
          <div>
            <div className="padding">
              <h2>Dates</h2>
              <div className="margin-bottom">
                <div className="margin-bottom">
                  Start: {startDate} | End: {endDate}
                </div>
                <div className="margin-bottom">
                  Value:{" "}
                  <input
                    type="date"
                    value={store.state.valueDate}
                    onChange={handleChangeValueDate}
                  />
                </div>
                <div className="flex vertical-center">
                  Result:{" "}
                  <GVProgramPeriod
                    className="period-pie"
                    value={new Date(store.state.valueDate)}
                    start={new Date(startDate)}
                    end={new Date(endDate)}
                  />
                </div>
              </div>
            </div>
            <div className="padding">
              <h2>Numbers</h2>
              <div className="margin-bottom">
                <div className="margin-bottom">
                  Start: {1} | End: {10}
                </div>
                <div className="margin-bottom">
                  Value:{" "}
                  <input
                    type="number"
                    value={store.state.valueNumber}
                    onChange={handleChangeValueNumber}
                  />
                </div>
                <div className="flex vertical-center">
                  Result:{" "}
                  <GVProgramPeriod
                    value={store.state.valueNumber}
                    start={1}
                    end={10}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })
  )
);

storiesOf("Program Period", module).add(
  "Line",
  withState({ valueDate: moment().format("YYYY-MM-DD"), valueNumber: 7 })(
    ({ store }) =>
      withInfo()(() => {
        const handleChangeValueDate = e => {
          store.set({ valueDate: e.target.value });
        };
        const handleChangeValueNumber = e => {
          store.set({ valueNumber: +e.target.value });
        };
        return (
          <div>
            <div className="padding">
              <h2>Dates</h2>
              <div className="margin-bottom">
                <div className="margin-bottom">
                  Start: {startDate} | End: {endDate}
                </div>
                <div className="margin-bottom">
                  Value:{" "}
                  <input
                    type="date"
                    value={store.state.valueDate}
                    onChange={handleChangeValueDate}
                  />
                </div>
                <div className="flex vertical-center">
                  Result:{" "}
                  <GVProgramPeriod
                    className="period-line"
                    value={new Date(store.state.valueDate)}
                    start={new Date(startDate)}
                    end={new Date(endDate)}
                    variant="line"
                  />
                </div>
              </div>
            </div>
            <div className="padding">
              <h2>Numbers</h2>
              <div className="margin-bottom">
                <div className="margin-bottom">
                  Start: {1} | End: {10}
                </div>
                <div className="margin-bottom">
                  Value:{" "}
                  <input
                    type="number"
                    value={store.state.valueNumber}
                    onChange={handleChangeValueNumber}
                  />
                </div>
                <div className="flex vertical-center">
                  Result:{" "}
                  <GVProgramPeriod
                    className="period-line"
                    value={store.state.valueNumber}
                    start={1}
                    end={10}
                    variant="line"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })
  )
);
