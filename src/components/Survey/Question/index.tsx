import React from "react";

interface QuestionProps {
  question: string;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  return <div className="font-haas text-2xl font-semibold">{question}</div>;
};

export default Question;
