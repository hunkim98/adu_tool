import HamburgerComponent from "@/icons/hamburger";
import LogoComponent from "@/icons/logo";
import { Flex } from "@mantine/core";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      w="100%"
      py={14}
      px={20}
      className="bg-main-blue"
      justify="space-between"
      align="center"
    >
      <LogoComponent />
      <HamburgerComponent />
    </Flex>
  );
};

export default Navbar;
