import type { MetadataRoute } from "next";
import { faculties } from "@/content/zh/faculties";

// Next.js встроенная поддержка: файл sitemap.ts автоматически
// отдаётся по адресу /sitemap.xml. Требование п.77 ТЗ: публичные
// страницы должны присутствовать в sitemap.
const BASE_URL = "https://bntu.by";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/zh",
    "/zh/faculties",
    "/zh/admission",
    "/zh/cost",
    "/zh/diploma-recognition",
    "/zh/faq",
    "/zh/articles/belarus-vs-russia",
    "/zh/student-life",
    "/zh/partners",
    "/zh/agents",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const facultyPages = faculties.map((f) => ({
    url: `${BASE_URL}/zh/faculties/${f.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...facultyPages];
}
