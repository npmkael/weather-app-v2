import React from "react";

type Props = {
  width: string;
  height: string;
};

const SunIcon = ({ width, height }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 67 67" // Adjust viewBox to match the original size of the SVG
      width={width || "100%"}
      height={height || "100%"}
    >
      <defs>
        <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
          <stop offset="0%" stop-color="rgb(0,0,0)" stop-opacity="0.3" />
          <stop offset="100%" stop-color="rgb(0,0,0)" stop-opacity="0" />
        </linearGradient>
        <filter
          filterUnits="userSpaceOnUse"
          id="Filter_0"
          x="7px"
          y="11px"
          width="100px"
          height="100px"
        >
          <feOffset in="SourceAlpha" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" stdDeviation="10" />
          <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
          <feComposite operator="atop" in="floodOut" in2="blurOut" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.1" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode /> <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        fill-rule="evenodd"
        fill="rgb(252, 192, 46)"
        d="M33.498,58.864 L23.147,67.005 L19.322,54.019 L6.398,54.206 L10.560,41.335 L0.000,33.496 L10.560,25.657 L6.398,12.787 L19.322,12.973 L23.147,-0.012 L33.498,8.129 L43.849,-0.012 L47.674,12.973 L60.598,12.787 L56.436,25.657 L66.995,33.496 L56.436,41.335 L60.598,54.206 L47.674,54.019 L43.849,67.005 L33.498,58.864 L33.498,58.864 Z"
      />
      <path
        fill="url(#PSgrad_0)"
        d="M33.498,58.864 L23.147,67.005 L19.322,54.019 L6.398,54.206 L10.560,41.335 L0.000,33.496 L10.560,25.657 L6.398,12.787 L19.322,12.973 L23.147,-0.012 L33.498,8.129 L43.849,-0.012 L47.674,12.973 L60.598,12.787 L56.436,25.657 L66.995,33.496 L56.436,41.335 L60.598,54.206 L47.674,54.019 L43.849,67.005 L33.498,58.864 L33.498,58.864 Z"
      />
      <g filter="url(#Filter_0)">
        <path
          fill-rule="evenodd"
          fill="rgb(254, 230, 172)"
          d="M33.498,53.003 C44.275,53.003 53.011,44.269 53.011,33.496 C53.011,22.723 44.275,13.990 33.498,13.990 C22.721,13.990 13.984,22.723 13.984,33.496 C13.984,44.269 22.721,53.003 33.498,53.003 L33.498,53.003 Z"
        />
      </g>
    </svg>
  );
};

export default SunIcon;
