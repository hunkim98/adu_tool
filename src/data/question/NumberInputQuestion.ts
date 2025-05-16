import { BaseQuestion, QuestionStage, QuestionType } from "./BaseQuestion";

export class NumberInputQuestion extends BaseQuestion {
  type = QuestionType.NUMBER;

  constructor(question: string, stage: QuestionStage) {
    super(question, stage);
  }
}
