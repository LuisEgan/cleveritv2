import React from "react"
export { default as wrapRootElement } from "./src/reducers/ReduxWrapper"

export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      key="fontawesome"
      type="text/javascript"
      src="https://kit.fontawesome.com/8d1dd6dbc3.js"
    />,
  ])
}
