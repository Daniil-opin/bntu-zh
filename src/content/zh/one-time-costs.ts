import { CostItem } from "@/entities/faculty/types";

// Переиспользую тип CostItem (изначально описан для факультетов, но
// форма данных "статья/сумма/период" универсальна для любых
// единоразовых трат — дублировать тип под другой домен не вижу смысла).
// 4 обязательные статьи из п.51 ТЗ: нострификация, мед. обследование,
// виза/ВНЖ, медицинская страховка.
export const oneTimeCosts: CostItem[] = [
  { label: "学历认证（нострификация）", amount: "TODO_VERIFY", period: "一次性" },
  { label: "入学体检", amount: "TODO_VERIFY", period: "一次性" },
  { label: "签证/居留许可", amount: "TODO_VERIFY", period: "一次性" },
  { label: "医疗保险", amount: "TODO_VERIFY", period: "一次性" },
];
