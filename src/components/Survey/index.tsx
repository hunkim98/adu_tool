import { Box, Flex } from "@mantine/core";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CapitalStackTool from "../CapitalStackTool";
import { useMobileViewContext } from "@/context/MobileViewContext";
import XIconComponent from "@/icons/xIcon";
import QuestionString from "./Question/QuestionString";
import MoneyInputAnswer from "./Answer/InputAnswer/MoneyInputAnswer";
import NextButton from "../Button/NextButton";
import useQuestionData from "@/hooks/useQuestionData";
import Question from "./Question";
import { QuestionStage } from "@/data/question/BaseQuestion";
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
  const { questionData } = useQuestionData();
  const [questionIndex, setQuestionIndex] = useState(0);
  const onClickNext = useCallback(() => {
    if (questionIndex === questionData.length - 1) {
      // TODO: submit the survey
      return;
    }
    setQuestionIndex(questionIndex + 1);
  }, [questionIndex]);
  useEffect(() => {
    if (graphRef.current) {
      setGraphSize({
        width: graphRef.current!.clientWidth,
        height: graphRef.current!.clientHeight,
      });
    }
  }, [graphRef.current]);

  if (questionData.length === 0) {
    return null;
  }

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
            {/* Pre-Construction */}
            {questionData[questionIndex].stage ===
            QuestionStage.PRE_CONSTRUCTION
              ? "Pre-Construction"
              : "Post-Construction"}
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
          <Question question={questionData[questionIndex]} />
          <NextButton isActive={true} onClick={onClickNext}>
            Next
          </NextButton>
        </Flex>
      )}
    </Flex>
  );
};

export default Survey;
