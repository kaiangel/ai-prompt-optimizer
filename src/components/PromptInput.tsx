import React, { useRef, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PromptInput: React.FC<PromptInputProps> = ({ value, onChange }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="w-full animate-fade-in-up relative group">
      <div className="w-full bg-white/90 rounded-2xl p-8 shadow-lg hover:shadow-xl 
                    transition-all duration-300 hover:translate-y-[-2px] relative overflow-hidden">
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-magic-primary/5 to-magic-secondary/5 
                      bg-[length:200%_100%] animate-shimmer" />
        
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="随意写下你的任何想法，让我们一起将其转化为完美的开场白...（例：我想）"
          className="min-h-[200px] md:min-h-[250px] w-full bg-transparent border-none 
                   focus:outline-none focus:ring-0 text-text-primary text-lg leading-relaxed 
                   placeholder:text-gray-400 placeholder:font-light resize-none relative z-10"
        />
      </div>
    </div>
  );
};

export default PromptInput;