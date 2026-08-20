import type { Metadata } from "next";
import { UniversityHero } from "@/components/home/UniversityHero";
import { UniversityAbout } from "@/components/home/UniversityAbout";
import { UniversityAdvantages } from "@/components/home/UniversityAdvantages";
import { UniversityStats } from "@/components/home/UniversityStats";
import { FacultyGrid } from "@/components/home/FacultyGrid";
import { CostSummary } from "@/components/home/CostSummary";
import { AdmissionSummary } from "@/components/home/AdmissionSummary";
import { ApplicationForm } from "@/components/application/ApplicationForm";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ContactsBlock } from "@/components/layout/ContactsBlock";

// Title/description взяты дословно из ТЗ (п.23). Цифры внутри
// description требуют проверки перед production (п.9, п.23 ТЗ).
export const metadata: Metadata = {
  title: "白俄罗斯国立技术大学(БНТУ)留学 | 学费·招生·优势专业·中国合作",
  description:
    "白俄罗斯国立技术大学(БНТУ)创建于1920年,QS世界排名前1000。本科学费3600美元/年起,英语授课免雅思,凭面试录取、无需高考。与21所中国高校合作,设全球首家技术孔子学院。", // TODO_VERIFY
  alternates: {
    canonical: "https://bntu.by/zh/",
  },
};

// Главная /zh/ — п.15-23 ТЗ. Только один <h1> на странице (внутри UniversityHero).
export default function ZhHomePage() {
  return (
    <>
      <UniversityHero />
      <UniversityAbout />
      <UniversityAdvantages />
      <UniversityStats />
      <FacultyGrid />
      <CostSummary />
      <AdmissionSummary />
      <PartnersSection />
      <ApplicationForm />
      <ContactsBlock />
    </>
  );
}
