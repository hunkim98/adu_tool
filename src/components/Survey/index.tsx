import { Box, Flex } from "@mantine/core";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CapitalStackTool from "../CapitalStackTool";
import { useMobileViewContext } from "@/context/MobileViewContext";
import XIconComponent from "@/icons/xIcon";
import Question from "./Question";
import MoneyInputAnswer from "./Answer/InputAnswer/MoneyInputAnswer";
import NextButton from "../Button/NextButton";
const GRAPH_MIN_WIDTH = 150;

interface SurveyProps {}

const Survey: React.FC<SurveyProps> = ({}) => {
  const { mobileContainerWidth, mobileContainerHeight, navbarHeight } =
    useMobileViewContext();
  const [isQuestionOpen, setIsQuestionOpen] = useState(true);
  const onClickCloseQuestion = useCallback(() => {
    setIsQuestionOpen(false);
  }, []);
  const graphRef = useRef<HTMLDivElement>(null);
  const [graphSize, setGraphSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (graphRef.current) {
      setGraphSize({
        width: graphRef.current!.clientWidth,
        height: graphRef.current!.clientHeight,
      });
    }
  }, [graphRef.current]);
  return (
    <Flex direction={"row"}>
      <Flex
        direction="column"
        gap={10}
        align={"center"}
        className="w-full"
        pt={50}
        pb={50}
        ref={graphRef}
      >
        <Flex direction="column" gap={0} align={"center"}>
          <div className="font-haas text-blue-100">Capital</div>
          <div className="font-haas text-blue-100">Stack Tool</div>
        </Flex>
        <Flex direction="column" gap={0} align={"center"}>
          <div className="font-haas text-blue-100 font-bold">
            Pre-Construction
          </div>
        </Flex>
        <CapitalStackTool
          width={GRAPH_MIN_WIDTH}
          height={600}
          data={[
            {
              "Private Equity": 10,
              "Venture Capital": 20,
              "Family Office": 30,
            },
          ]}
          margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
        />
      </Flex>
      {isQuestionOpen && (
        <Flex
          direction={"column"}
          align={"center"}
          style={{
            minWidth: mobileContainerWidth - GRAPH_MIN_WIDTH,
          }}
          className="rounded-tl-4xl bg-gradient-to-b from-[#F6D5D5] to-[#CFD2EA]"
          w={mobileContainerWidth - GRAPH_MIN_WIDTH}
          h={
            mobileContainerHeight > graphSize.height + navbarHeight
              ? `calc(100dvh - ${navbarHeight}px)`
              : graphSize.height
          }
          pos={"relative"}
          pt={50}
          pb={50}
          gap={40}
          px={40}
        >
          <Flex
            direction={"row"}
            justify={"flex-start"}
            pos={"absolute"}
            top={0}
            left={0}
            pl={15}
            pt={15}
          >
            <XIconComponent
              className="cursor-pointer"
              onClick={onClickCloseQuestion}
            />
          </Flex>
          <Box h={20} />
          <Question question="What is your expected total development cost?" />
          <MoneyInputAnswer
            onChange={() => {}}
            value={0}
            className="w-full"
            placeholder="Enter your expected total development cost"
            label="Expected total development cost"
            error="Expected total development cost is required"
          />
          <NextButton isActive={true} onClick={() => {}}>
            Next
          </NextButton>
        </Flex>
      )}
    </Flex>
  );
};

export default Survey;
