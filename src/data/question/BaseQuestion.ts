export enum QuestionStage {
  PRE_CONSTRUCTION = "pre_construction",
  POST_CONSTRUCTION = "post_construction",
}

export enum QuestionType {
  SELECT_OPTION = "select_option",
  STRING = "string",
  NUMBER = "number",
  MONEY = "money",
}
export abstract class BaseQuestion {
  abstract type: QuestionType;
  stage: QuestionStage;
  question: string;

  constructor(question: string, stage: QuestionStage) {
    this.question = question;
    this.stage = stage;
  }
}
