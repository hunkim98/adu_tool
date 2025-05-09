import { NumberInput } from "@mantine/core";
import React from "react";
import { IconCurrencyDollar } from "@tabler/icons-react";

interface MoneyInputAnswerProps {
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

const MoneyInputAnswer: React.FC<MoneyInputAnswerProps> = ({
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
  return (
    <NumberInput
      leftSection={<IconCurrencyDollar />}
      //   label="With left section"
      classNames={{
        input: "font-haas text-2xl",
      }}
      style={{
        fontSize: 24,
      }}
      placeholder="250,000"
    />
  );
};

export default MoneyInputAnswer;
