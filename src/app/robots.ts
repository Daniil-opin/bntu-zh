import type { MetadataRoute } from "next";

// Файл robots.ts автоматически отдаётся по адресу /robots.txt.
// Требование п.77 ТЗ: публичные страницы не должны быть заблокированы robots.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/zh",
    },
    sitemap: "https://bntu.by/sitemap.xml",
  };
}
