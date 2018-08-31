import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";

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
        <GVProgramAvatar level={3} size="small" alt="The small avatar" />
        The small avatar
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar level={3} size="medium" alt="THe Medium Avatar" />
        The medium avatar
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar level={3} size="big" alt="The Big Avatar" />
        The big avatar
      </div>
    </div>
  ))
);

storiesOf("Program Avatar", module).add(
  "Different levels",
  withInfo()(() => (
    <div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar level={1} size="small" alt="Level" />
        Level 1
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar level={2} size="small" alt="Level" />
        Level 2
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar level={2} size="small" alt="Level" />
        Level 2
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar level={3} size="small" alt="Level" />
        Level 3
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar level={4} size="small" alt="Level" />
        Level 4
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar level={5} size="small" alt="Level" />
        Level 5
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar level={6} size="small" alt="Level" />
        Level 6
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar level={7} size="small" alt="Level" />
        Level 7
      </div>
    </div>
  ))
);
