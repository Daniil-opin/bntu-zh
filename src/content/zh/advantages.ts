import { Advantage } from "@/entities/university/advantage";

// Заголовки взяты дословно из ТЗ (п.15.3) — их менять не нужно.
// Тексты-описания (descriptionZh) в самом ТЗ не расписаны построчно,
// поэтому здесь черновой текст-заглушка + TODO_VERIFY.
// Перед публикацией — согласовать с контент-менеджером/носителем языка (п.6, п.9 ТЗ).
export const advantages: Advantage[] = [
  {
    id: "century",
    titleZh: "百年工科名校，国家级地位",
    descriptionZh: "TODO_VERIFY: текст о столетней истории и государственном статусе вуза",
  },
  {
    id: "quality",
    titleZh: "国际认可的教学质量",
    descriptionZh: "TODO_VERIFY: текст о международном признании качества образования",
  },
  {
    id: "affordable",
    titleZh: "学费亲民，性价比高",
    descriptionZh: "TODO_VERIFY: текст о доступной стоимости обучения",
  },
  {
    id: "cooperation",
    titleZh: "深厚的中白合作基础",
    descriptionZh: "TODO_VERIFY: текст о сотрудничестве с Китаем",
  },
  {
    id: "engineering",
    titleZh: "工程实力强，产学研结合",
    descriptionZh: "TODO_VERIFY: текст об инженерной базе и связке наука-производство",
  },
  {
    id: "english",
    titleZh: "英语授课无需雅思（IELTS）",
    descriptionZh: "TODO_VERIFY: текст про обучение на английском без IELTS",
  },
];
