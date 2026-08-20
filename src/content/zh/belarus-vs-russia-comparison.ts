export interface ComparisonRow {
  criterion: string;
  belarus: string;
  russia: string;
}

// Таблица обязана быть настоящим <table>, не картинкой (п.67 ТЗ).
// Значения — TODO_VERIFY, ТЗ не даёт конкретных цифр сравнения.
export const belarusVsRussiaComparison: ComparisonRow[] = [
  { criterion: "本科学费/年", belarus: "TODO_VERIFY", russia: "TODO_VERIFY" },
  { criterion: "住宿费/月", belarus: "TODO_VERIFY", russia: "TODO_VERIFY" },
  { criterion: "是否需要俄语等级证书", belarus: "TODO_VERIFY", russia: "TODO_VERIFY" },
  { criterion: "文凭中国认证途径", belarus: "中留服（CSCSE）", russia: "中留服（CSCSE）" },
];
