"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";
const LEGACY_STORAGE_KEY = "bntu-theme";

type ThemeToggleProps = {
  className?: string;
};

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const savedTheme = (window.localStorage.getItem(STORAGE_KEY) ?? window.localStorage.getItem(LEGACY_STORAGE_KEY)) as Theme | null;
    const initialTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : getSystemTheme();
    applyTheme(initialTheme);

    queueMicrotask(() => setTheme(initialTheme));

    if (savedTheme) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      const nextTheme = event.matches ? "dark" : "light";
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const activeTheme = theme ?? "light";
  const isDark = activeTheme === "dark";
  const label = theme === null ? "跟随浏览器" : isDark ? "深色模式" : "浅色模式";

  return (
    <button
      className={`theme-toggle${className ? ` ${className}` : ""}`}
      type="button"
      aria-label={`切换主题。当前：${label}`}
      aria-pressed={isDark}
      title={label}
      onClick={() => {
        const nextTheme = isDark ? "light" : "dark";
        setTheme(nextTheme);
        applyTheme(nextTheme);
        window.localStorage.setItem(STORAGE_KEY, nextTheme);
      }}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb" />
      </span>
      <span className="theme-toggle-icon" aria-hidden="true">{isDark ? "☾" : "☼"}</span>
      <span className="theme-toggle-label">{label}</span>
    </button>
  );
}
