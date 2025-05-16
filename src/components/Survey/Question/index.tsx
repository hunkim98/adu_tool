import { BaseQuestion, QuestionType } from "@/data/question/BaseQuestion";
import { Flex } from "@mantine/core";
import React from "react";
import QuestionString from "./QuestionString";
import MoneyInputAnswer from "../Answer/InputAnswer/MoneyInputAnswer";
import StringInputAnswer from "../Answer/InputAnswer/StringInputAnswer";
import NumberInputAnswer from "../Answer/InputAnswer/NumberInputAnswer";
import SelectOptionAnswer from "../Answer/SelectOptionAnswer";
import { SelectOptionQuestion } from "@/data/question/SelectOptionQuestion";

interface QuestionProps {
  question: BaseQuestion;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <Flex direction={"column"} gap={10}>
      <QuestionString question={question.question} />
      {question.type === QuestionType.MONEY && (
        <MoneyInputAnswer onChange={() => {}} value={0} className="w-full" />
      )}
      {question.type === QuestionType.STRING && (
        <StringInputAnswer onChange={() => {}} value={""} className="w-full" />
      )}
      {question.type === QuestionType.NUMBER && (
        <NumberInputAnswer onChange={() => {}} value={0} className="w-full" />
      )}
      {question.type === QuestionType.SELECT_OPTION && (
        <SelectOptionAnswer
          onChange={() => {}}
          value={""}
          options={(question as SelectOptionQuestion).options}
        />
      )}
    </Flex>
  );
};

export default Question;
