import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import React from "react";
import { GVColors } from "../dist";

storiesOf("@Layout", module).add("Breakpoints", () => (
  <div>
    <div className="padding">
      <code>media-breakpoint-phone</code>
      <br />
      @media (min-width: 322px)
    </div>
    <div className="padding">
      <code>media-breakpoint-landscape-phone</code>
      <br />
      @media (min-width: 576px)
    </div>
    <div className="padding">
      <code>media-breakpoint-tablet</code>
      <br />
      @media (min-width: 768px)
    </div>
    <div className="padding">
      <code>media-breakpoint-landscape-tablet</code>
      <br />
      @media (min-width: 992px)
    </div>
    <div className="padding">
      <code>media-breakpoint-desktop</code>
      <br />
      @media (min-width: 1200px)
    </div>
    <div className="padding">
      <code>media-breakpoint-large-desktop</code>
      <br />
      @media (min-width: 1920px)
    </div>
  </div>
));
storiesOf("@Layout", module).add("Colors", () => (
  <div>
    <div className="padding">
      <table style={{ borderSpacing: 15 }}>
        <tbody>
          {Object.keys(GVColors).map(x => (
            <tr key={x}>
              <td>
                <span
                  className="color-example"
                  style={{ background: GVColors[x] }}
                />
              </td>
              <td>{x}</td>
              <td>{GVColors[x]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
));
