import { FAQItem } from "@/entities/faq/types";

// Темы — дословно из п.58 ТЗ. Пункт про 技术大学 vs 工业大学 — это тот самый
// "блок дисамбигуации", который п.58 явно называет "особенно важным":
// официальное название подтверждено фактом из п.7 ТЗ, это не TODO_VERIFY.
export const diplomaRecognitionFaq: FAQItem[] = [
  { question: "白俄罗斯国立技术大学的文凭在中国被认可吗？", answer: "TODO_VERIFY" },
  { question: "如何在教育部涉外监管网上查到白俄罗斯国立技术大学？", answer: "TODO_VERIFY" },
  {
    question: "白俄罗斯国立技术大学（技术大学）和白俄罗斯国立工业大学是同一所学校吗？",
    answer:
      "不是同一所学校。官方名称为白俄罗斯国立技术大学（БНТУ / BNTU），请勿与白俄罗斯国立工业大学等名称混淆。",
  },
  { question: "认证后的文凭可以用于考公务员吗？", answer: "TODO_VERIFY" },
  { question: "硕士和博士文凭的认证流程是否相同？", answer: "TODO_VERIFY" },
  { question: "远程教育获得的文凭是否可以认证？", answer: "TODO_VERIFY" },
];
