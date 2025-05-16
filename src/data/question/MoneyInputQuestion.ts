import { BaseQuestion, QuestionStage, QuestionType } from "./BaseQuestion";

export class MoneyInputQuestion extends BaseQuestion {
  type = QuestionType.MONEY;

  constructor(question: string, stage: QuestionStage) {
    super(question, stage);
  }
}
