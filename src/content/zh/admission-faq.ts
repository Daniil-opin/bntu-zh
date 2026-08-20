import { FAQItem } from "@/entities/faq/types";

// Темы — дословно из п.44 ТЗ. Единый маркер TODO_VERIFY используется
// намеренно (а не китайская фраза вроде "需核实") — так его гарантированно
// ловит гейт scripts/check-content.mjs перед деплоем в production,
// и не появится "самодельных" плейсхолдеров, которые гейт не заметит.
export const admissionFaq: FAQItem[] = [
  {
    question: "白俄罗斯国立技术大学的正确名称是什么？",
    // Это единственный пункт с подтверждённым фактом (п.7 ТЗ) — реальный ответ, не заглушка.
    answer: "官方名称为白俄罗斯国立技术大学（БНТУ / BNTU），请勿与白俄罗斯国立工业大学等名称混淆。",
  },
  { question: "文凭在中国是否被认可？", answer: "TODO_VERIFY" },
  { question: "是否必须掌握俄语才能申请？", answer: "TODO_VERIFY" },
  { question: "预科（预备系）有什么作用？", answer: "TODO_VERIFY" },
  { question: "留学一年大概需要多少费用？", answer: "TODO_VERIFY" },
  { question: "申请截止日期是什么时候？", answer: "TODO_VERIFY" },
  { question: "明斯克的治安环境如何？", answer: "TODO_VERIFY" },
  { question: "学校是否提供学生宿舍？", answer: "TODO_VERIFY" },
];
