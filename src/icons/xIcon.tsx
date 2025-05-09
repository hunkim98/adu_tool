import * as React from "react";
const XIconComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      stroke="#C2B0B1"
      strokeLinecap="round"
      strokeWidth={3}
      d="m12.722 12.015 16.263 16.263M28.278 12.015 12.015 28.278"
    />
  </svg>
);
export default XIconComponent;
