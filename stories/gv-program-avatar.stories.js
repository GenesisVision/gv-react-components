import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React, { Fragment } from "react";

import { GVProgramAvatar } from "../dist/index.js";

storiesOf("Program Avatar", module).add(
  "Avatar with level",
  withInfo()(() => (
    <GVProgramAvatar
      url="https://static8.depositphotos.com/1000419/948/v/950/depositphotos_9489492-stock-illustration-valentine-tree-with-hearts-for.jpg"
      level="7"
      alt="John Smith"
    />
  ))
);

storiesOf("Program Avatar", module).add(
  "Broken image",
  withInfo()(() => (
    <GVProgramAvatar
      url="https://example.com/1.png"
      level="7"
      alt="John Smith"
    />
  ))
);
