import { toast } from "sonner";
import Anthropic from '@anthropic-ai/sdk';

// Initialize Anthropic client with browser safety flag
const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true // Enable browser usage
});

export const optimizePrompt = async (prompt: string): Promise<string> => {
  console.log("Optimizing prompt:", prompt);
  
  if (!prompt.trim()) {
    throw new Error("提示词不能为空");
  }

  try {
    const message = await anthropic.messages.create({
      model: "claude-3-opus-20240229",
      max_tokens: 1024,
      messages: [{
        role: "user",
        content: `作为一个专业的提示词优化助手，请帮我优化以下提示词，使其更加清晰、具体和有效。
        原始提示词: ${prompt}
        
        请按照以下方式组织优化后的提示词:
        1. 保持简洁明了
        2. 增加必要的上下文信息
        3. 明确期望的输出格式和质量要求
        4. 添加任何其他能提升效果的要素
        
        直接返回优化后的提示词，不需要解释。`
      }],
    });

    // Safely access the content value
    const optimizedPrompt = message.content[0].type === 'text' 
      ? message.content[0].text 
      : prompt;
      
    console.log("Optimized prompt:", optimizedPrompt);
    
    return optimizedPrompt;
  } catch (error) {
    console.error("Error optimizing prompt:", error);
    toast.error("优化失败，请稍后重试");
    throw error;
  }
};