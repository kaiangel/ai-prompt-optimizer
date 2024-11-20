import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import PromptInput from "@/components/PromptInput";
import OptimizeButton from "@/components/OptimizeButton";
import CopyButton from "@/components/CopyButton";
import { optimizePrompt } from "@/lib/api";

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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal to-blue-400 bg-clip-text text-transparent">
          首语
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          开启AI对话的第一步
        </p>
      </div>

      <div className="w-full max-w-2xl space-y-8">
        <PromptInput value={prompt} onChange={setPrompt} />
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <OptimizeButton onClick={handleOptimize} isLoading={isLoading} />
          {prompt && <CopyButton text={prompt} />}
        </div>
      </div>
    </div>
  );
};

export default Index;