const HamburgerComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#FBECEB"
      strokeLinecap="round"
      strokeWidth={3}
      d="M2 2h23M2 12h23M2 22h23"
    />
  </svg>
);
export default HamburgerComponent;
