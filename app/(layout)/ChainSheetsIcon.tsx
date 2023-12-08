import React, { SVGProps } from "react";

const ChainSheetsIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        id="r4"
        width="512"
        height="512"
        x="0"
        y="0"
        rx="128"
        fill="url(#r5)"
        stroke="#FFFFFF"
        stroke-width="0"
        stroke-opacity="100%"
        paint-order="stroke"
      ></rect>
      <clipPath id="clip">
        <use xlinkHref="#r4"></use>
      </clipPath>
      <defs>
        <linearGradient
          id="r5"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180)"
          style={{ transformOrigin: "center center" }}
        >
          <stop stop-color="#5C5C5C"></stop>
          <stop offset="1" stop-color="#0F1015"></stop>
        </linearGradient>
        <radialGradient
          id="r6"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(256) rotate(90) scale(512)"
        >
          <stop stop-color="white"></stop>
          <stop offset="1" stop-color="white" stop-opacity="0"></stop>
        </radialGradient>
      </defs>
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="352"
        height="352"
        x="80"
        y="80"
        alignment-baseline="middle"
        style={{ color: "rgb(255, 255, 255)" }}
      >
        <path
          d="m10 5.754-3.984 3.68a1.536 1.536 0 0 0 0 2.294 1.86 1.86 0 0 0 2.482 0L13.25 7.25c1.371-1.267 1.343-3.283-.028-4.55s-3.594-1.267-4.965 0L3.292 7.287c-2.056 1.9-2.056 4.981 0 6.881l.089.082"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </svg>
  );
};

export default ChainSheetsIcon;
