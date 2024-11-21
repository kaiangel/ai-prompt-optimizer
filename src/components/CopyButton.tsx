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
        duration: 2000,
      });
      
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
      toast({
        title: "复制失败",
        description: "请重试",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-6 py-3 bg-white/90 hover:bg-white/95 backdrop-blur-sm rounded-full 
                shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] 
                active:scale-95 animate-fade-in-up flex items-center gap-2"
    >
      {copied ? (
        <Check className="w-5 h-5 text-magic-primary animate-scale-in" />
      ) : (
        <Copy className="w-5 h-5 text-magic-primary" />
      )}
      <span className="text-text-primary text-lg">复制提示词</span>
    </button>
  );
};

export default CopyButton;