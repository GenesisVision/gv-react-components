import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withState } from "@dump247/storybook-state";
import { GVTab, GVTabs } from "../dist/index.js";

storiesOf("Tabs", module).add(
  "Tabs",
  withState({
    value: "investor"
  })(({ store }) =>
    withInfo()(() => {
      const handleChange = (e, value) => {
        store.set({ value: value });
      };
      return (
        <GVTabs value={store.state.value} onChange={handleChange}>
          <GVTab label="Investor" value="investor" />
          <GVTab label="Manager" value="manager" />
        </GVTabs>
      );
    })
  )
);

storiesOf("Tabs", module).add(
  "Tabs with count",
  withState({
    value: "investor"
  })(({ store }) =>
    withInfo()(() => {
      const handleChange = (e, value) => {
        store.set({ value: value });
      };
      return (
        <GVTabs value={store.state.value} onChange={handleChange}>
          <GVTab label="Investor" value="investor" count={10} />
          <GVTab label="Manager" value="manager" count={2} />
        </GVTabs>
      );
    })
  )
);

storiesOf("Tabs", module).add(
  "Tabs with external link",
  withInfo()(() => {
    return (
      <GVTabs value="investor">
        <GVTab label="Investor" value="investor" />
        <GVTab
          label={<a href="https://example.com">Manager external link</a>}
          value="manager"
        />
      </GVTabs>
    );
  })
);
