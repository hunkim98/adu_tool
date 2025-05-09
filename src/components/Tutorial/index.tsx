import { Flex, Title, Text } from "@mantine/core";
import React from "react";
import CapitalStackTool from "../CapitalStackTool";
import { useMobileViewContext } from "@/context/MobileViewContext";
import NextButton from "../Button/NextButton";

interface TutorialProps {
  onNext: () => void;
}

const Tutorial = ({ onNext }: TutorialProps) => {
  const { mobileContainerWidth } = useMobileViewContext();
  return (
    <Flex direction={"column"} px={66} align="center" gap={50} pb={80} pt={50}>
      <Flex direction={"column"} gap={20} align="center">
        <h1 className="text-center font-haas text-4xl font-semibold text-stack-clean-gradient">
          Welcome to our <br /> Capital Stack Tool!
        </h1>
        <div className="text-center text-md text-blue-200 leading-5.5">
          Use the Tool to discover funding <br /> opportunities for your planned{" "}
          <br />
          additional dwelling unit.
        </div>
      </Flex>
      <CapitalStackTool
        width={mobileContainerWidth}
        height={600}
        data={[
          {
            "Private Equity": 50,
          },
        ]}
        margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
      />
      <NextButton isActive={true} onClick={onNext}>
        NEXT
      </NextButton>
    </Flex>
  );
};

export default Tutorial;
