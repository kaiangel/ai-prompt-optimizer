import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import PromptInput from "@/components/PromptInput";
import OptimizeButton from "@/components/OptimizeButton";
import CopyButton from "@/components/CopyButton";
import { optimizePrompt } from "@/lib/api";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleOptimize = async () => {
    if (!prompt.trim()) {
      toast({
        title: "请输入内容",
        description: "请先输入你想优化的提示词",
      });
      return;
    }

    setIsLoading(true);
    try {
      const optimized = await optimizePrompt(prompt);
      setPrompt(optimized);
      toast({
        title: "优化成功",
        description: "你的提示词已经被优化",
      });
    } catch (error) {
      console.error("Failed to optimize prompt:", error);
      toast({
        title: "优化失败",
        description: "请稍后重试",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-start to-background-end relative overflow-x-hidden">
      {/* Aurora background effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-magic-primary/3 to-magic-secondary/3 pointer-events-none animate-aurora-flow" />
      
      {/* Header */}
      <header className="p-8 md:p-10 text-center bg-white/80 backdrop-blur-sm border-b border-magic-primary/10 relative z-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-light tracking-[4px] text-magic-primary mb-6 inline-block relative">
          首语
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gradient-to-r from-magic-primary to-magic-secondary opacity-60" />
        </h1>
        <p className="text-text-secondary text-lg md:text-xl font-light tracking-wide mt-6">
          开启AI对话的第一步
        </p>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16 flex flex-col items-center justify-center relative z-10">
        <div className="w-full max-w-3xl space-y-8">
          <PromptInput value={prompt} onChange={setPrompt} />
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={handleOptimize}
              disabled={isLoading}
              className="px-12 py-3 text-lg text-white bg-gradient-to-r from-magic-primary to-magic-secondary 
                       rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                       hover:translate-y-[-2px] active:scale-95 relative overflow-hidden
                       disabled:opacity-70 disabled:cursor-not-allowed group animate-fade-in-up"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>点亮灵感</span>
              </span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-magic-primary rounded-full">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </button>
            {prompt && <CopyButton text={prompt} />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;