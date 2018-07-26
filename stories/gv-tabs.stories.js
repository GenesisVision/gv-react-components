import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { State, Store } from "@sambego/storybook-state";
import { GVTab, GVTabs } from "../dist/index.js";

const store = new Store({
  value: "investor"
});

storiesOf("Tabs", module).add(
  "Tabs",
  withInfo()(() => {
    const handleChange = (e, value) => {
      store.set({ value: value });
    };
    return (
      <State store={store}>
        <GVTabs value={store.get("value")} onChange={handleChange}>
          <GVTab label="Investor" value="investor" />
          <GVTab label="Manager" value="manager" />
        </GVTabs>
      </State>
    );
  })
);
