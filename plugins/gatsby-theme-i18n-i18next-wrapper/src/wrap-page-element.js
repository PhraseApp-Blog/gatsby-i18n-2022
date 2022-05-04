import * as React from "react"

export function wrapPageElement({ element, props }, options) {
  return <div style={{ color: "red" }}>{element}</div>
}
