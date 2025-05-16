import { useMobileViewContext } from "@/context/MobileViewContext";
import HamburgerComponent from "@/icons/hamburger";
import LogoComponent from "@/icons/logo";
import { Flex } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef } from "react";

interface NavbarProps {}

const NAVBAR_PY = 14;

const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();
  const { setNavbarHeight } = useMobileViewContext();
  const { ref, height } = useElementSize();
  useEffect(() => {
    setNavbarHeight(height + NAVBAR_PY * 2);
  }, [height]);
  const navigateToHome = useCallback(() => {
    router.push("/");
  }, [router]);
  return (
    <Flex
      w="100%"
      py={14}
      px={20}
      className="bg-main-blue"
      justify="space-between"
      align="center"
      ref={ref}
    >
      <LogoComponent onClick={navigateToHome} className="cursor-pointer" />
      <HamburgerComponent className="cursor-pointer" />
    </Flex>
  );
};

export default Navbar;
