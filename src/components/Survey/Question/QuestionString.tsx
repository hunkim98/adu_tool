import React from "react";

interface QuestionStringProps {
  question: string;
}

const QuestionString: React.FC<QuestionStringProps> = ({ question }) => {
  return (
    <div className="font-haas text-[20px] leading-[28px] font-semibold">
      {question}
    </div>
  );
};

export default QuestionString;
