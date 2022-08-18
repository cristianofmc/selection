import * as React from "react"

const SvgComponent = (props) => {
  return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        {...props}>
            <path d="M503.4 239.3 383.2 119.1l-.8.8c-33.3-31.1-77.9-50.1-127-50.1-55.1 0-104.7 24-138.8 62.1L4.7 243.8l.1.1c-3 3.4-4.8 7.8-4.8 12.6 0 6.1 2.9 11.4 7.2 14.9l121.3 121.3.3-.3c33.2 30.8 77.7 49.7 126.5 49.7 55.1 0 104.6-23.9 138.6-62l.4.4 111.2-111.2 1.3-1.3c3.1-3.4 5-7.9 5-12.9.2-6.5-3.2-12.4-8.4-15.8zm-248 142.9c-69.7 0-126.2-56.5-126.2-126.2s56.5-126.2 126.2-126.2S381.6 186.3 381.6 256s-56.5 126.2-126.2 126.2z" />
            <path d="M255.9 195.4c33.8 0 61.1 27.4 61.1 61.1 0 33.8-27.4 61.1-61.1 61.1-33.8 0-61.1-27.4-61.1-61.1s27.4-61.1 61.1-61.1z" />
        </svg>
);
}
export default SvgComponent
