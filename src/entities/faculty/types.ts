import { FAQItem } from "@/entities/faq/types";
import { PageMeta } from "@/shared/types/seo";

// Program — дословно из ТЗ, раздел 1.
export interface Program {
  id: string;
  nameZh: string;
  degree: string; // напр. "本科" / "硕士" / "博士"
  duration: string; // напр. "4年"
  language: string; // напр. "俄语" / "英语"
  tuition?: string; // подтверждается перед публикацией
}

// TuitionItem / CostItem: сами имена типов упомянуты в ТЗ (раздел 73),
// но их поля в ТЗ НЕ расписаны как код — только как колонки таблиц
// в разделах 33 ("学费总览") и 34 ("其他费用": 项目/金额/期间).
// Поля ниже — моя интерпретация под эти таблицы, не дословная цитата ТЗ.
export interface TuitionItem {
  level: string;
  duration: string;
  costPerYear: string;
}

export interface CostItem {
  label: string;
  amount: string;
  period: string;
}

// Faculty: в ТЗ ДВА разных определения этого интерфейса, которые
// противоречат друг другу (раздел 1 — короткая версия с "description"
// и без tuition/additionalCosts/faq/meta; раздел 73 — расширенная версия
// с "descriptionZh" и полным набором полей под страницу факультета).
// Беру за основу раздел 73, т.к. он полнее и явно предназначен именно
// под шаблон страницы факультета (п.29-38 ТЗ). Это расхождение стоит
// свести к одному варианту с контент-менеджером/автором ТЗ, как и
// числовые расхождения из п.81.
export interface Faculty {
  slug: string;
  abbreviation: string;
  nameZh: string;
  descriptionZh: string;
  programs: Program[];
  tuition: TuitionItem[];
  additionalCosts: CostItem[];
  faq: FAQItem[];
  meta: PageMeta;
}
