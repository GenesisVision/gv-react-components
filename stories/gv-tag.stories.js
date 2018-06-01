import React from "react";
import { storiesOf } from "@storybook/react";
import { GVTag, GVTagList } from "../dist/index.js";

storiesOf("Tag", module).add("Tag", () => <GVTag tag="some tag" />);
storiesOf("Tag", module).add("Tags", () => (
  <GVTagList tags={["some tag", "some tag 2"]} />
));
