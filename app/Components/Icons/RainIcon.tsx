import React from "react";

type Props = {
  width: string;
  height: string;
};

const RainIcon = ({ width, height }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 103 76" // Adjust viewBox to match the original size of the SVG
      width={width || "100%"}
      height={height || "100%"}
    >
      <defs>
        <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
          <stop offset="0%" stop-color="rgb(0,0,0)" stop-opacity="0.2" />
          <stop offset="100%" stop-color="rgb(0,0,0)" stop-opacity="0" />
        </linearGradient>
        <filter
          filterUnits="userSpaceOnUse"
          id="Filter_0"
          x="0px"
          y="2px"
          width="92px"
          height="68px"
        >
          <feOffset in="SourceAlpha" dx="0" dy="5" />
          <feGaussianBlur result="blurOut" stdDeviation="3.162" />
          <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
          <feComposite operator="atop" in="floodOut" in2="blurOut" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.15" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        fill-rule="evenodd"
        fill="rgb(184, 199, 216)"
        d="M59.310,37.458 L94.128,37.458 C99.063,36.922 102.993,32.755 102.993,27.649 C102.993,23.025 99.771,19.016 95.496,18.146 C94.326,8.509 86.292,0.975 76.547,0.975 C69.693,0.975 63.686,4.631 60.315,10.174 C60.232,10.172 60.149,10.149 60.065,10.149 C52.839,10.149 46.981,16.416 46.981,23.803 C46.981,30.932 52.435,36.922 59.310,37.458 "
      />
      <path
        fill="url(#PSgrad_0)"
        d="M59.310,37.458 L94.128,37.458 C99.063,36.922 102.993,32.755 102.993,27.649 C102.993,23.025 99.771,19.016 95.496,18.146 C94.326,8.509 86.292,0.975 76.547,0.975 C69.693,0.975 63.686,4.631 60.315,10.174 C60.232,10.172 60.149,10.149 60.065,10.149 C52.839,10.149 46.981,16.416 46.981,23.803 C46.981,30.932 52.435,36.922 59.310,37.458 "
      />
      <g filter="url(#Filter_0)">
        <path
          fill-rule="evenodd"
          fill="rgb(255, 255, 255)"
          d="M27.289,53.001 L66.812,53.001 C74.074,53.001 79.988,46.829 79.988,39.496 C79.988,33.324 75.983,28.167 70.350,26.487 C70.201,20.987 65.700,16.597 60.156,16.597 C58.545,16.597 57.026,16.992 55.671,17.656 C53.273,11.976 47.646,7.995 41.086,7.995 C33.932,7.995 27.890,12.741 25.934,19.249 C17.478,20.269 10.997,27.356 10.997,36.075 C10.997,45.209 18.020,53.001 27.289,53.001 "
        />
      </g>
      <path
        fill-rule="evenodd"
        fill="rgb(255, 255, 255)"
        d="M36.415,75.942 C38.924,75.942 40.958,73.698 40.958,70.931 C40.958,68.163 36.415,61.911 36.415,61.911 C36.415,61.911 31.872,68.163 31.872,70.931 C31.872,73.698 33.906,75.942 36.415,75.942 L36.415,75.942 Z"
      />
      <path
        fill-rule="evenodd"
        fill="rgb(255, 255, 255)"
        d="M53.659,66.962 C55.019,66.962 56.122,65.838 56.122,64.452 C56.122,63.066 53.659,59.934 53.659,59.934 C53.659,59.934 51.197,63.066 51.197,64.452 C51.197,65.838 52.299,66.962 53.659,66.962 L53.659,66.962 Z"
      />
    </svg>
  );
};

export default RainIcon;
