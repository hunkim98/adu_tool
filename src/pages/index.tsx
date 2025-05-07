import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import MobileLayout from "@/components/Layout/MobileLayout";
import Navbar from "@/components/Navbar";
import CapitalStackTool from "@/components/CapitalStackTool";
import { Box, Flex, Text } from "@mantine/core";
import { useState } from "react";
import Tutorial from "@/components/Tutorial";
import Survey from "@/components/Survey";

export default function HomePage() {
  const [isTutorial, setIsTutorial] = useState(true);
  return (
    <MobileLayout maxWidth={500}>
      <Navbar />
      <Flex pt={50} direction="column" align="center">
        {isTutorial ? <Tutorial /> : <Survey />}
      </Flex>
    </MobileLayout>
  );
}
