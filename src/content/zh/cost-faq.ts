import { FAQItem } from "@/entities/faq/types";

// п.53 ТЗ — специфичное для ЭТОЙ страницы требование: "Каждый ответ
// начинается с: 白俄罗斯国立技术大学（БНТУ / BNTU）" — для самостоятельной
// AI-цитируемости ответа. Поэтому префикс — часть каждого ответа,
// а не общий паттерн для всех FAQ на сайте (в FAQ "Специальности"
// и "Поступление" такого требования в ТЗ не было).
const PREFIX = "白俄罗斯国立技术大学（БНТУ / BNTU）";

export const costFaq: FAQItem[] = [
  { question: "在白俄罗斯国立技术大学留学一年大概多少钱？", answer: `${PREFIX}TODO_VERIFY` },
  { question: "本科学费大约是多少？", answer: `${PREFIX}TODO_VERIFY` },
  { question: "明斯克的生活费高吗？", answer: `${PREFIX}TODO_VERIFY` },
  { question: "应该选择宿舍还是自己租房？", answer: `${PREFIX}TODO_VERIFY` },
  { question: "是否提供奖学金？", answer: `${PREFIX}TODO_VERIFY` },
  { question: "入学前有哪些一次性费用？", answer: `${PREFIX}TODO_VERIFY` },
];
