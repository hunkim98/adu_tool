import { NumberInput } from "@mantine/core";
import React, { useState } from "react";
import { IconCurrencyDollar } from "@tabler/icons-react";
import { cn } from "@/lib/tw";

interface NumberInputAnswerProps {
  onChange: (value: number) => void;
  value: number;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const NumberInputAnswer: React.FC<NumberInputAnswerProps> = ({
  onChange,
  value,
  placeholder,
  label,
  error,
  disabled,
  className,
  prefix,
  suffix,
}) => {
  // we need to forward the value to the parent
  const [inputValue, setInputValue] = useState(value);
  return (
    <NumberInput
      //   label="With left section"
      classNames={{
        input: "font-haas text-2xl",
      }}
      thousandSeparator=","
      defaultValue={0}
      style={{
        fontSize: 24,
      }}
      className={cn(className)}
      placeholder="0"
      onChange={(e) => {
        if (typeof e === "number") {
          setInputValue(e);
          onChange(e);
        } else {
          setInputValue(Number(e));
          onChange(Number(e));
        }
      }}
    />
  );
};

export default NumberInputAnswer;
