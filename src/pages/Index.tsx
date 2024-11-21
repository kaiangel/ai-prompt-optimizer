import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import PromptInput from "@/components/PromptInput";
import OptimizeButton from "@/components/OptimizeButton";
import CopyButton from "@/components/CopyButton";
import UserMenu from "@/components/UserMenu";
import { optimizePrompt } from "@/lib/api";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [optimized, setOptimized] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleOptimize = async () => {
    if (!prompt.trim()) {
      toast({
        title: "请输入内容",
        description: "请先输入你想优化的提示词",
        duration: 2000,
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await optimizePrompt(prompt);
      setOptimized(result);
      toast({
        title: "优化成功",
        description: "你的提示词已经被优化",
        duration: 2000,
      });
    } catch (error) {
      console.error("Failed to optimize prompt:", error);
      toast({
        title: "优化失败",
        description: "请稍后重试",
        variant: "destructive",
        duration: 2000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-start to-background-end relative overflow-x-hidden">
      {/* Aurora background effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-magic-primary/3 to-magic-secondary/3 pointer-events-none animate-aurora-flow" />
      
      {/* Header with User Menu */}
      <header className="p-8 md:p-10 text-center bg-white/80 backdrop-blur-sm border-b border-magic-primary/10 relative z-10">
        <div className="absolute right-4 top-4">
          <UserMenu />
        </div>
        <h1 className="text-4xl md:text-5xl font-light tracking-[4px] text-magic-primary mb-6 inline-block relative">
          序话
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
          
          <div className="flex flex-col items-center gap-6">
            <OptimizeButton onClick={handleOptimize} isLoading={isLoading} />
            
            {optimized && (
              <div className="w-full animate-fade-in-up">
                <div className="bg-white/90 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-magic-primary/10">
                  <h3 className="text-xl font-medium text-magic-primary mb-4">优化后的提示词</h3>
                  <p className="text-text-primary text-lg leading-relaxed whitespace-pre-wrap mb-6">
                    {optimized}
                  </p>
                  <div className="flex justify-end">
                    <CopyButton text={optimized} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;