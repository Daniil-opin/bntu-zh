import { TuitionItem } from "@/entities/faculty/types";

// Пример-заглушка стоимости для главной. Сам ТЗ (п.18) говорит,
// что все цифры отчёта — пример до официального подтверждения.
export const homeTuitionSummary: TuitionItem[] = [
  { level: "预科", duration: "TODO_VERIFY", costPerYear: "TODO_VERIFY" },
  { level: "本科", duration: "TODO_VERIFY", costPerYear: "3600 美元起" },
  { level: "硕士", duration: "TODO_VERIFY", costPerYear: "TODO_VERIFY" },
];
