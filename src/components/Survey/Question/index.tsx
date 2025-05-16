import React from "react";

interface QuestionProps {
  question: string;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <div className="font-haas text-[20px] leading-[28px] font-semibold">
      {question}
    </div>
  );
};

export default Question;
