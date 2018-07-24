import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

storiesOf("Button", module).add(
  "Button",
  withInfo()(() => <GVButton>123</GVButton>)
);

storiesOf("Button", module).add(
  "Secondary Button",
  withInfo()(() => <GVButton secondary>123</GVButton>)
);
