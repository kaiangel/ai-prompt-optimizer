import React from "react";
import { Textarea } from "@/components/ui/textarea";

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PromptInput: React.FC<PromptInputProps> = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="写下你的想法，让我们一起将其转化为完美的开场白..."
        className="prompt-input h-40"
      />
    </div>
  );
};

export default PromptInput;