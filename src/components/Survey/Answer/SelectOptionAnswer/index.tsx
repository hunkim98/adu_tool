import { Box, Flex } from "@mantine/core";
import React from "react";

interface SelectOptionAnswerProps {
  onChange: (value: string) => void;
  value: string;
  options: string[];
}

function SelectOptionAnswer({
  onChange,
  value,
  options,
}: SelectOptionAnswerProps) {
  return (
    <Flex direction={"column"} gap={30}>
      {options.map((option) => (
        <Flex
          key={option}
          direction={"row"}
          gap={10}
          onClick={() => onChange(option)}
        >
          <Box
            w={23}
            h={23}
            bg={value === option ? "black" : "white"}
            className="border-3 border-white"
          />
          <div
            className="font-haas text-[16px] font-medium leading-[24px]"
            key={option}
          >
            {option}
          </div>
        </Flex>
      ))}
    </Flex>
  );
}

export default SelectOptionAnswer;
