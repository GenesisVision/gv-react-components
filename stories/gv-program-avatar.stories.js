import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React, { Fragment } from "react";
import avatar from "./manager-avatar.png";

import { GVProgramAvatar } from "../dist/index.js";

storiesOf("Program Avatar", module).add(
  "Avatar with level",
  withInfo()(() => (
    <div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar
          url="https://static8.depositphotos.com/1000419/948/v/950/depositphotos_9489492-stock-illustration-valentine-tree-with-hearts-for.jpg"
          level={7}
          alt="John Smith"
        />
        Avatar example
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar
          url="https://example.com/1.png"
          level={7}
          alt="John Smith"
          errorImage={avatar}
        />
        Default / Broken url
      </div>
    </div>
  ))
);

storiesOf("Program Avatar", module).add(
  "Different sizes",
  withInfo()(() => (
    <div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar level={1} size="small" alt="The small avatar" />
        The small avatar
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar level={1} size="medium" alt="THe Medium Avatar" />
        The medium avatar
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar level={1} size="big" alt="The Big Avatar" />
        The big avatar
      </div>
    </div>
  ))
);
