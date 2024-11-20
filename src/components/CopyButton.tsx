import React from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface CopyButtonProps {
  text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "复制成功 ✨",
        description: "提示词已复制到剪贴板",
      });
      
      // Reset the copied state after animation
      setTimeout(() => setCopied(false), 1500);
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
      className="relative inline-flex items-center gap-2 px-4 py-2 
                bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full 
                shadow-lg transition-all duration-300 hover:shadow-xl
                hover:scale-105 active:scale-95"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-500 animate-scale-in" />
      ) : (
        <Copy className="w-4 h-4 text-teal" />
      )}
      <span className="text-gray-700">复制提示词</span>
    </button>
  );
};

export default CopyButton;