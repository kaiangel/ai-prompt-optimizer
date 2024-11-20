import React from "react";
import { Sparkles } from "lucide-react";

interface OptimizeButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

const OptimizeButton: React.FC<OptimizeButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="optimize-button group relative"
    >
      <span className="flex items-center gap-2">
        <Sparkles className="w-5 h-5" />
        <span>点亮灵感</span>
      </span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-teal rounded-full">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </button>
  );
};

export default OptimizeButton;