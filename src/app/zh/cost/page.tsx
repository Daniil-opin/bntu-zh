import type { Metadata } from "next";
import { AnnualCostSummary } from "@/components/cost/AnnualCostSummary";
import { CostTuitionTable } from "@/components/cost/CostTuitionTable";
import { SimpleCostTable } from "@/components/cost/SimpleCostTable";
import { OneTimeCosts } from "@/components/cost/OneTimeCosts";
import { ScholarshipInfo } from "@/components/cost/ScholarshipInfo";
import { FAQSection } from "@/components/faq/FAQSection";
import { housingCosts, minskLifeCosts } from "@/content/zh/living-costs";
import { costFaq } from "@/content/zh/cost-faq";

// Title/description — дословно из ТЗ (п.54).
export const metadata: Metadata = {
  title: "白俄罗斯国立技术大学（БНТУ）留学一年多少钱｜学费住宿生活费总览",
  description:
    "白俄罗斯国立技术大学（БНТУ / BNTU，技术大学非工业大学）官方留学费用：本科/硕士学费、宿舍住宿费、明斯克生活费、医疗保险及一次性入学费用，附一年总费用速览表，数据来源于学校官方。",
  alternates: {
    canonical: "https://bntu.by/zh/cost",
  },
};

// Стоимость обучения и жизни — п.46-54 ТЗ.
export default function CostPage() {
  return (
    <>
      <h1>留学费用</h1>
      <p>在白俄罗斯国立技术大学（БНТУ）留学一年要花多少钱？</p>

      <AnnualCostSummary />
      <CostTuitionTable />
      <SimpleCostTable titleZh="住宿费" rows={housingCosts} />
      <SimpleCostTable titleZh="明斯克生活费" rows={minskLifeCosts} />
      <OneTimeCosts />
      {/* Подтверждённых данных о стипендиях нет — data не передаётся,
          компонент сам не отрендерит блок (п.52 ТЗ) */}
      <ScholarshipInfo />

      <FAQSection titleZh="留学费用常见问题" items={costFaq} />
    </>
  );
}
