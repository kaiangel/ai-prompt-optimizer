import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Profile = () => {
  const navigate = useNavigate();

  const handleSubscribe = (plan: string) => {
    toast({
      title: "订阅成功",
      description: `你已成功订阅${plan}计划`,
      duration: 2000,
    });
  };

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
          <h1 className="text-2xl font-medium text-magic-primary mb-8">个人信息</h1>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <img src="/placeholder.svg" alt="Avatar" className="w-16 h-16 rounded-full" />
                <div>
                  <p className="text-lg font-medium">用户123456</p>
                  <p className="text-gray-500">手机号：138****8888</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Edit2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-medium text-magic-primary">订阅计划</h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-6 border rounded-xl bg-white hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-medium mb-2">免费计划</h3>
                  <p className="text-gray-500 mb-4">基础功能使用</p>
                  <p className="text-2xl font-bold mb-4">¥0<span className="text-sm font-normal">/月</span></p>
                  <Button 
                    onClick={() => handleSubscribe("免费")}
                    className="w-full"
                    variant="outline"
                  >
                    当前计划
                  </Button>
                </div>

                <div className="p-6 border rounded-xl bg-gradient-to-br from-magic-primary/5 to-magic-secondary/5 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-medium mb-2">高级计划</h3>
                  <p className="text-gray-500 mb-4">解锁全部高级功能</p>
                  <p className="text-2xl font-bold mb-4">¥9.9<span className="text-sm font-normal">/月</span></p>
                  <Button 
                    onClick={() => handleSubscribe("高级")}
                    className="w-full bg-gradient-to-r from-magic-primary to-magic-secondary hover:opacity-90"
                  >
                    立即订阅
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;