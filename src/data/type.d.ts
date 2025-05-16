import { QuestionStage, QuestionType } from "./question/BaseQuestion";

export interface QuestionDataType {
  stage: QuestionStage;
  question: string;
  type: QuestionType;
  options?: string[];
}
