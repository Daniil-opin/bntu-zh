import type { ReactNode } from "react";
import { ZhHeader } from "@/components/layout/ZhHeader";
import { ZhFooter } from "@/components/layout/ZhFooter";
import "./zh.css";

// Вложенный layout: html/body уже объявлены в src/app/layout.tsx,
// здесь только меняем lang на zh-CN через атрибут на обёртке
// и добавляем китайскую шапку/футер. Класс zh-shell — область
// действия дизайн-системы из zh.css (шрифты — только системные,
// Google Fonts запрещены п.12 ТЗ).
export default function ZhLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="zh-CN" className="zh-shell">
      <ZhHeader />
      <main>{children}</main>
      <ZhFooter />
    </div>
  );
}
