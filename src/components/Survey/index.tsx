import { Flex } from "@mantine/core";
import React from "react";
import CapitalStackTool from "../CapitalStackTool";
import { useMobileViewContext } from "@/context/MobileViewContext";

interface SurveyProps {}

const Survey: React.FC<SurveyProps> = ({}) => {
  const { mobileContainerWidth } = useMobileViewContext();
  return (
    <>
      <Flex direction="column" gap={0} align={"center"}>
        <div className="font-haas text-blue-100">Capital</div>
        <div className="font-haas text-blue-100">Stack Tool</div>
      </Flex>
      <CapitalStackTool
        width={mobileContainerWidth}
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
    </>
  );
};

export default Survey;
