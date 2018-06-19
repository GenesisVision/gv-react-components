import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { GVTag, GVTagList } from "../dist/index.js";

storiesOf("Tag", module).add("Tag", withInfo()(() => <GVTag tag="some tag" />));

storiesOf("Tag", module).add(
  "Tags",
  withInfo()(() => <GVTagList tags={["some tag", "some tag 2"]} />)
);
