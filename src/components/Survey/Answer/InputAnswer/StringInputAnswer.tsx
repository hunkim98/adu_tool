import { Input } from "@mantine/core";

interface StringInputAnswerProps {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  label?: string;
  error?: string;
  className?: string;
}

const StringInputAnswer: React.FC<StringInputAnswerProps> = ({
  onChange,
  value,
  className,
  placeholder,
  label,
  error,
}) => {
  return (
    <Input
      classNames={{
        input: "font-haas text-2xl",
      }}
    />
  );
};

export default StringInputAnswer;
