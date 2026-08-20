import type { Metadata } from "next";
import "./globals.css";

// Корневой layout. html/body объявляются только здесь — вложенные layout'ы
// (например src/app/zh/layout.tsx) их не дублируют, а просто оборачивают children.
// Google Fonts намеренно не используются нигде в проекте (см. п.12 ТЗ) —
// они недоступны в материковом Китае.
export const metadata: Metadata = {
  title: "BNTU",
  description: "Belarusian National Technical University",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
