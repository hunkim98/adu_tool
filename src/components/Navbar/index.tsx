import HamburgerComponent from "@/icons/hamburger";
import LogoComponent from "@/icons/logo";
import { Flex } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();
  const navigateToHome = useCallback(() => {
    if (process.env.NODE_ENV === "production") {
      router.push("/adu_tool");
    } else {
      router.push("/");
    }
  }, [router]);

  return (
    <Flex
      w="100%"
      py={14}
      px={20}
      className="bg-main-blue"
      justify="space-between"
      align="center"
    >
      <LogoComponent onClick={navigateToHome} />
      <HamburgerComponent />
    </Flex>
  );
};

export default Navbar;
