import { Button } from "@mantine/core";
import React from "react";
import { cn } from "@/lib/tw";

interface NextButtonProps {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}

const NextButton = ({
  onClick,
  children,
  isActive,
  className,
}: NextButtonProps) => {
  return (
    <button
      disabled={!isActive}
      onClick={onClick}
      className={cn(
        className,
        isActive
          ? "bg-red-300 cursor-pointer"
          : "bg-grey-300 cursor-not-allowed",
        "text-white font-haas rounded-full font-bold text-lg px-6 py-2 w-fit"
      )}
      style={{
        fontWeight: isActive ? "bold" : "normal",
      }}
    >
      {children}
    </button>
  );
};

export default NextButton;
