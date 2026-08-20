import { AnnualCostRow } from "@/entities/university/annual-cost";

// Все значения в исходном отчёте — плейсхолдеры, требуют официальных
// данных перед публикацией (явное указание п.47 ТЗ).
export const annualCostSummary: AnnualCostRow[] = [
  { label: "学费", amount: "TODO_VERIFY" },
  { label: "住宿费", amount: "TODO_VERIFY" },
  { label: "生活费", amount: "TODO_VERIFY" },
  { label: "医疗保险", amount: "TODO_VERIFY" },
  { label: "年度总计", amount: "TODO_VERIFY" },
];
