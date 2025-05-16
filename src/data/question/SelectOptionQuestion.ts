import { BaseQuestion, QuestionStage, QuestionType } from "./BaseQuestion";

export class SelectOptionQuestion extends BaseQuestion {
  type = QuestionType.SELECT_OPTION;
  options: string[];

  constructor(question: string, stage: QuestionStage, options: string[]) {
    super(question, stage);
    this.options = options;
  }
}
