import React from "react";
import { Copy } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface CopyButtonProps {
  text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "复制成功 ✨",
        description: "提示词已复制到剪贴板",
      });

      // Trigger the sparkle animation on the button
      const button = document.querySelector('.copy-button');
      button?.classList.remove('animate-sparkle');
      void button?.offsetWidth; // Trigger reflow
      button?.classList.add('animate-sparkle');
    } catch (err) {
      console.error('Failed to copy:', err);
      toast({
        title: "复制失败",
        description: "请重试",
        variant: "destructive",
      });
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="copy-button group relative inline-flex items-center gap-2 px-4 py-2 
                 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full 
                 shadow-lg transition-all duration-300 hover:shadow-xl
                 hover:scale-105 active:scale-95"
    >
      <Copy className="w-4 h-4 text-teal" />
      <span className="text-gray-700">复制提示词</span>
      
      {/* Sparkle effects */}
      <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute top-1/2 left-0 w-2 h-2 bg-teal rounded-full animate-sparkle delay-0" />
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-sparkle delay-100" />
        <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-teal rounded-full animate-sparkle delay-200" />
      </div>
    </button>
  );
};

export default CopyButton;