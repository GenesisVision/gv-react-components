import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";

import { GVColors, GVProgramAvatar } from "../dist/index.js";

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
          color="#abc"
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
        <GVProgramAvatar
          level={3}
          size="small"
          alt="The small avatar"
          color={GVColors.$positiveColor}
        />
        The small avatar
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar
          level={3}
          size="medium"
          alt="THe Medium Avatar"
          color={GVColors.$positiveColor}
        />
        The medium avatar
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar
          level={3}
          size="big"
          alt="The Big Avatar"
          color={GVColors.$positiveColor}
        />
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
        <GVProgramAvatar
          level={1}
          size="small"
          alt="Level 1"
          color={GVColors.$positiveColor}
        />
        Level 1
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar
          level={2}
          size="small"
          alt="Level 2"
          color={GVColors.$positiveColor}
        />
        Level 2
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar
          level={3}
          size="small"
          alt="Level 3"
          color={GVColors.$positiveColor}
        />
        Level 3
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar
          level={4}
          size="small"
          alt="Level 4"
          color={GVColors.$positiveColor}
        />
        Level 4
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar
          level={5}
          size="small"
          alt="Level 5"
          color={GVColors.$positiveColor}
        />
        Level 5
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar
          level={6}
          size="small"
          alt="Level 6"
          color={GVColors.$positiveColor}
        />
        Level 6
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar
          level={7}
          size="small"
          alt="Level 7"
          color={GVColors.$positiveColor}
        />
        Level 7
      </div>
    </div>
  ))
);
