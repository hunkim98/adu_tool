import { QuestionStage, QuestionType } from "@/data/question/BaseQuestion";
import { MoneyInputQuestion } from "@/data/question/MoneyInputQuestion";
import { NumberInputQuestion } from "@/data/question/NumberInputQuestion";
import { SelectOptionQuestion } from "@/data/question/SelectOptionQuestion";
import { StringInputQuestion } from "@/data/question/StringInputQuestion";
import { QuestionDataType } from "@/data/type";

export const mockData: QuestionDataType[] = [
  // this should be in order
  {
    stage: QuestionStage.PRE_CONSTRUCTION,
    question: "What is the total amount of money you have?",
    type: QuestionType.MONEY,
  },
  {
    stage: QuestionStage.PRE_CONSTRUCTION,
    question: "What is the amount of your personal savings?",
    type: QuestionType.MONEY,
  },
  {
    stage: QuestionStage.PRE_CONSTRUCTION,
    question: "How many people currently live in your household?",
    type: QuestionType.SELECT_OPTION,
    options: ["1", "2~3", "4~5", "5 or more"],
  },
  {
    stage: QuestionStage.PRE_CONSTRUCTION,
    question: "Input your total household income",
    type: QuestionType.MONEY,
  },
  {
    stage: QuestionStage.PRE_CONSTRUCTION,
    question: "Do you plan to lease your additionally built dwelling unit?",
    type: QuestionType.SELECT_OPTION,
    options: ["Yes", "No"],
  },
];
