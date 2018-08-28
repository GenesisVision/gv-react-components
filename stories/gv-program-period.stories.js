import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";

import { GVProgramPeriod } from "../dist";

storiesOf("Program Period", module).add(
  "Ring",
  withInfo()(() => (
    <div>
      <div style={{ width: "20px" }}>
        <GVProgramPeriod percent={0} />
      </div>
      <div style={{ width: "20px" }}>
        <GVProgramPeriod percent={75} />
      </div>
      <div style={{ width: "100px" }}>
        <GVProgramPeriod percent={25} />
      </div>
      <div style={{ width: "100px" }}>
        <GVProgramPeriod percent={50} />
      </div>
      <div style={{ width: "20px" }}>
        <GVProgramPeriod percent={100} />
      </div>
    </div>
  ))
);
