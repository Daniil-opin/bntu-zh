import type { Metadata } from "next";
import { faculties } from "@/content/zh/faculties";
import { facultiesFaq } from "@/content/zh/faculties-faq";
import { FacultySearch } from "@/components/faculty/FacultySearch";
import { FAQSection } from "@/components/faq/FAQSection";

// Title/description — дословно из ТЗ (п.28).
export const metadata: Metadata = {
  title: "白俄罗斯国立技术大学（БНТУ）专业与院系目录 — 17个系全专业一览",
  description:
    "白俄罗斯国立技术大学（БНТУ / BNTU）共设17个系，涵盖机械、能源、信息技术与机器人、建筑、土木与交通等方向。本页提供完整的中俄双语专业目录及授课语言、文凭认证说明，帮助你选择适合的专业。",
  alternates: {
    canonical: "https://bntu.by/zh/faculties",
  },
};

// Хаб "Специальности" — GEO-хаб, распределяет ссылки на все 17 факультетов (п.24-28 ТЗ).
export default function FacultiesHubPage() {
  return (
    <>
      <h1>系与专业总览</h1>
      <p>白俄罗斯国立技术大学（БНТУ）共设 17 个系，涵盖机械、能源、信息技术、建筑等多个工程方向。</p>

      {/* Поиск — опционален (п.25 ТЗ), полный список всё равно есть в исходном HTML */}
      <FacultySearch faculties={faculties} />

      <FAQSection
        titleZh="关于在白俄罗斯国立技术大学（БНТУ / BNTU）选择系与专业的常见问题。"
        items={facultiesFaq}
      />
    </>
  );
}
