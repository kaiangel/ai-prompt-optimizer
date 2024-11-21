import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";

const mockHistory = [
  {
    id: 1,
    date: "2024-02-20",
    originalPrompt: "我想写一个关于春天的故事",
    optimizedPrompt: "让我们创作一个充满生机与希望的春季故事，描绘大地复苏的景象，展现生命力与新生的主题...",
  },
  {
    id: 2,
    date: "2024-02-19",
    originalPrompt: "如何写一封商务邮件",
    optimizedPrompt: "请帮我起草一封专业的商务邮件，注重礼貌性与专业性，包含清晰的目的说明与具体诉求...",
  },
];

const History = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-start to-background-end p-6">
      <div className="max-w-2xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回
        </Button>

        <div className="bg-white/90 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
          <h1 className="text-2xl font-medium text-magic-primary mb-8">历史记录</h1>
          
          <div className="space-y-6">
            {mockHistory.map((item) => (
              <div 
                key={item.id}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-magic-primary/10"
              >
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">原始提示词</h3>
                    <p className="text-text-primary">{item.originalPrompt}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">优化后的提示词</h3>
                    <p className="text-text-primary">{item.optimizedPrompt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;