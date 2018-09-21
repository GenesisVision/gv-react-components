import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withState } from "@dump247/storybook-state";
import React from "react";

import { GVSwitch } from "../dist/index.js";

storiesOf("Form", module).add(
  "Standalone Switch",
  withState({ checked: true })(({ store }) =>
    withInfo()(() => {
      const handleChange = e => {
        store.set({ checked: e.target.checked });
      };

      return (
        <div
          style={{ display: "flex", flexDirection: "column", width: "300px" }}
        >
          <GVSwitch
            value={store.state.checked}
            color="primary"
            onChange={handleChange}
            label="general"
          />
          <GVSwitch
            value={true}
            color="secondary"
            onChange={() => {}}
            label="disabled"
            disabled
          />
        </div>
      );
    })
  )
);
