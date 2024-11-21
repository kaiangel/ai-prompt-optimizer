import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟登录
    toast({
      title: "登录成功",
      description: "欢迎回来！",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-start to-background-end flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/90 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
          <h2 className="text-2xl font-medium text-center text-magic-primary mb-8">欢迎使用序话</h2>
          
          <Tabs defaultValue="phone" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="phone">手机号登录</TabsTrigger>
              <TabsTrigger value="wechat">微信登录</TabsTrigger>
            </TabsList>
            
            <TabsContent value="phone">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Input
                    type="tel"
                    placeholder="请输入手机号"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex gap-4">
                    <Input
                      type="text"
                      placeholder="请输入验证码"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => toast({
                        title: "验证码已发送",
                        description: "请查看手机短信",
                      })}
                    >
                      获取验证码
                    </Button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-magic-primary to-magic-secondary hover:opacity-90"
                >
                  登录/注册
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="wechat">
              <div className="text-center py-12">
                <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-400">微信二维码</span>
                </div>
                <p className="text-gray-600">请使用微信扫码登录</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Login;