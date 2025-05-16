import { BaseQuestion, QuestionStage, QuestionType } from "./BaseQuestion";

export class StringInputQuestion extends BaseQuestion {
  type = QuestionType.STRING;

  constructor(question: string, stage: QuestionStage) {
    super(question, stage);
  }
}
