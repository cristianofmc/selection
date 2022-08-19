import * as React from "react"

const GitFork = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth={2}
    xmlSpace="preserve"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <circle cx={12} cy={18} r={2} />
    <circle cx={7} cy={6} r={2} />
    <circle cx={17} cy={6} r={2} />
    <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8M12 12v4" />
  </svg>
)

export default GitFork;
