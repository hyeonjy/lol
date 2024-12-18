"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// 테마 전환 버튼 컴포넌트
export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")} // 클릭 시 테마를 전환
      className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 transition duration-200"
      aria-label="Toggle theme"
    >
      {/* 현재 테마에 따라 Moon 또는 Sun 아이콘 표시 */}
      {isDark ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
