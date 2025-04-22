const LogoComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={41}
    fill="none"
    {...props}
  >
    <path fill="#A8ADD7" d="M.012 28.348V40.01h12.182V18.44L.012 28.348Z" />
    <path
      fill="#FABDAE"
      d="M12.195 39.987v.023H36V18.788L24.65 0 12.196 18.387v.024l.011-.008 11.063 10.135v11.449H12.195Z"
    />
    <path
      fill="#fff"
      d="M12.195 18.448V40.01h11.064V28.568L12.206 18.44l-.011.008Z"
    />
  </svg>
);
export default LogoComponent;
