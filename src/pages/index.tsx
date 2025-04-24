import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import MobileLayout from "@/components/Layout/MobileLayout";
import Navbar from "@/components/Navbar";
import CapitalStackTool from "@/components/CapitalStackTool";
import { Box, Flex, Text } from "@mantine/core";

export default function HomePage() {
  return (
    <MobileLayout maxWidth={500}>
      <Navbar />
      <Flex pt={50} direction="column" gap={50} align="center">
        {/* <Text className="font-haas text-blue-100"> */}
        <Flex direction="column" gap={0} align={"center"}>
          <Text className="font-haas text-blue-100">Capital</Text>
          <Text className="font-haas text-blue-100">Stack Tool</Text>
        </Flex>
        {/* </Text> */}
        <CapitalStackTool
          width={50}
          height={600}
          data={[
            {
              "Private Equity": 100,
              "Venture Capital": 200,
              "Family Office": 300,
            },
          ]}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        />
      </Flex>
    </MobileLayout>
  );
}
