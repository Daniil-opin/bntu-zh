import type { Metadata } from "next";
import { UniversityAdvantages } from "@/components/home/UniversityAdvantages";
import { UniversityStats } from "@/components/home/UniversityStats";
import { AdmissionSteps } from "@/components/admission/AdmissionSteps";
import { AdmissionRequirements } from "@/components/admission/AdmissionRequirements";
import { FAQSection } from "@/components/faq/FAQSection";
import { admissionSteps } from "@/content/zh/admission-steps";
import { admissionFaq } from "@/content/zh/admission-faq";

// Title/description — дословно из ТЗ (п.45).
export const metadata: Metadata = {
  title: "白俄罗斯国立技术大学（БНТУ）招生 | 申请条件、流程与常见问题",
  description:
    "白俄罗斯国立技术大学 官方招生指南：面向国际学生的本科、硕士及预科申请流程、入学条件、所需材料与常见问题。学校位于明斯克，建校于1920年，文凭受中国教育部认可。",
  alternates: {
    canonical: "https://bntu.by/zh/admission",
  },
};

// Страница "Поступление" — п.39-45 ТЗ.
// UniversityAdvantages и UniversityStats — те же компоненты, что на главной
// (п.40, п.41 ТЗ прямо требуют переиспользование, а не копию данных).
export default function AdmissionPage() {
  return (
    <>
      <h1>如何申请白俄罗斯国立技术大学</h1>
      <p>面向国际学生的本科、硕士及预科申请完整指南</p>

      <UniversityAdvantages />
      <UniversityStats />

      <AdmissionSteps steps={admissionSteps} titleZh="如何申请" />
      <AdmissionRequirements />

      <FAQSection titleZh="招生常见问题" items={admissionFaq} />
    </>
  );
}
