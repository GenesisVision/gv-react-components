import { action } from "@storybook/addon-actions";
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
  "Mouse events",
  withInfo()(() => (
    <div>
      <h1 className="felx vertical-center padding">Mouse events with level</h1>
      <div className="flex vertical-center padding">
        <GVProgramAvatar
          url="https://st.depositphotos.com/1017908/1635/i/950/depositphotos_16355075-stock-photo-frangipani-on-light-green-backgroun.jpg"
          level={7}
          alt="Enter level example"
          color="#abc"
          onMouseEnterLevel={action("Mouse Enter")}
        />
        Enter level
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar
          url="https://static4.depositphotos.com/1007682/360/v/950/depositphotos_3602661-stock-illustration-colorful-surface-vector-abstract-background.jpg"
          level={7}
          alt="Hover level example"
          color="#abc"
          onMouseOverLevel={action("Mouse Hover")}
        />
        Hover level
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar
          url="https://st.depositphotos.com/1007712/1367/v/950/depositphotos_13676147-stock-illustration-abstract-pattern-for-design-retro.jpg"
          level={7}
          alt="Leave level example"
          color="#abc"
          onMouseLeaveLevel={action("Mouse Leave")}
        />
        Leave level
      </div>
      <div className="flex vertical-center padding">
        <GVProgramAvatar
          url="https://static8.depositphotos.com/1003603/872/i/950/depositphotos_8720982-stock-photo-grunge-background-with-hearts-and.jpg"
          level={7}
          alt="Click level example"
          color="#abc"
          onClickLevel={action("Mouse Click")}
        />
        Click level
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
