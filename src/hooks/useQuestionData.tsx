import { BaseQuestion, QuestionType } from "@/data/question/BaseQuestion";
import { MoneyInputQuestion } from "@/data/question/MoneyInputQuestion";
import { NumberInputQuestion } from "@/data/question/NumberInputQuestion";
import { SelectOptionQuestion } from "@/data/question/SelectOptionQuestion";
import { StringInputQuestion } from "@/data/question/StringInputQuestion";
import { QuestionDataType } from "@/data/type";
import { mockData } from "@/mock/questions.mock";
import React, { useEffect, useState } from "react";

const useQuestionData = () => {
  const [questionData, setQuestionData] = useState<BaseQuestion[]>([]);

  useEffect(() => {
    // we will change mockData to objects
    const data = mockData.map((item) => {
      switch (item.type) {
        case QuestionType.SELECT_OPTION:
          if (!item.options) {
            throw new Error(`Options are required for select option question`);
          }
          return new SelectOptionQuestion(
            item.question,
            item.stage,
            item.options
          );
        case QuestionType.MONEY:
          return new MoneyInputQuestion(item.question, item.stage);
        case QuestionType.STRING:
          return new StringInputQuestion(item.question, item.stage);
        case QuestionType.NUMBER:
          return new NumberInputQuestion(item.question, item.stage);
        default:
          // raise error
          throw new Error(`Unknown question type: ${item.type}`);
      }
    });
    setQuestionData(data);
  }, []);

  return { questionData };
};

export default useQuestionData;
