import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";

const UserMenu = () => {
  const navigate = useNavigate();
  // Check localStorage for login state
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  console.log("Login state:", isLoggedIn); // Debug log

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 hover:bg-white/90 transition-colors duration-200 text-text-primary">
        <User className="w-5 h-5" />
        <span>{isLoggedIn ? "我的账户" : "未登录"}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {isLoggedIn ? (
          <>
            <DropdownMenuItem onClick={() => navigate("/profile")}>
              我的
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/history")}>
              历史记录
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                window.location.reload(); // Refresh to update state
              }}
            >
              退出登录
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem onClick={() => navigate("/login")}>
            未登录/去注册
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;