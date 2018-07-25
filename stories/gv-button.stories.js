import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React, { Fragment } from "react";

import { GVButton } from "../dist/index.js";

storiesOf("Button", module).add(
  "Button",
  withInfo()(() => (
    <div>
      <div>
        <GVButton
          title="pimary button example"
          color="primary"
          variant="text"
          onClick={action("clicked Primary Button Text")}
        >
          Primary Button Text
        </GVButton>{" "}
        <GVButton
          title="pimary button example"
          color="primary"
          onClick={action("clicked Primary Button Contained")}
        >
          Primary Button Contained
        </GVButton>{" "}
        <GVButton
          title="pimary button example"
          color="primary"
          variant="outlined"
          onClick={action("clicked Primary Button Outlined")}
        >
          Primary Button Outlined
        </GVButton>{" "}
        <GVButton title="pimary button example" color="primary" disabled>
          Primary Button Disabled
        </GVButton>
      </div>
      <br />
      <div>
        <GVButton
          title="secondary button example"
          color="secondary"
          variant="text"
          onClick={action("clicked Secondary Button Disabled")}
        >
          Secondary Button Text
        </GVButton>{" "}
        <GVButton
          title="secondary button example"
          color="secondary"
          onClick={action("clicked Secondary Button Contained")}
        >
          Secondary Button Contained
        </GVButton>{" "}
        <GVButton
          title="secondary button example"
          color="secondary"
          variant="outlined"
          onClick={action("clicked Secondary Button Outlined")}
        >
          Secondary Button Outlined
        </GVButton>{" "}
        <GVButton title="secondary button example" color="secondary" disabled>
          Secondary Button Disabled
        </GVButton>
      </div>
    </div>
  ))
);
