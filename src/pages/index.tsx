import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import MobileLayout from "@/components/Layout/MobileLayout";
import Navbar from "@/components/Navbar";
import CapitalStackTool from "@/components/CapitalStackTool";
import { Box, Flex, Text } from "@mantine/core";
import { useCallback, useState } from "react";
import Tutorial from "@/components/Tutorial";
import Survey from "@/components/Survey";

export default function HomePage() {
  const [isTutorial, setIsTutorial] = useState(false);
  const onClickNextTutorial = useCallback(() => {
    setIsTutorial(false);
  }, []);
  return (
    <MobileLayout maxWidth={500}>
      <Navbar />
      <Flex direction="column" className="w-full">
        {isTutorial ? <Tutorial onNext={onClickNextTutorial} /> : <Survey />}
      </Flex>
    </MobileLayout>
  );
}
