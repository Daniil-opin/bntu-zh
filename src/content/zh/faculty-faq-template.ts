import { FAQItem } from "@/entities/faq/types";

// Минимальные темы — дословно из п.37 ТЗ: стоимость, язык обучения,
// признание диплома, сопутствующие расходы, подача заявки.
// Готовых вопросов-ответов ТЗ не даёт — сформулированы по темам, ответы TODO_VERIFY.
export const facultyFaqTemplate: FAQItem[] = [
  { question: "该系的学费是多少？", answer: "TODO_VERIFY" },
  { question: "该系用什么语言授课？", answer: "TODO_VERIFY" },
  { question: "该系的文凭在中国是否被认可？", answer: "TODO_VERIFY" },
  { question: "除了学费还有哪些费用？", answer: "TODO_VERIFY" },
  { question: "如何申请该系？", answer: "TODO_VERIFY" },
];
