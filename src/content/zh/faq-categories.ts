export interface FAQCategory {
  id: string;
  navLabel: string; // подпись в <nav>, дословно из п.61 ТЗ
}

export const faqCategories: FAQCategory[] = [
  { id: "section-01", navLabel: "关于大学" },
  { id: "section-02", navLabel: "文凭与认可" },
  { id: "section-03", navLabel: "留学费用" },
  { id: "section-04", navLabel: "申请与入学" },
  { id: "section-05", navLabel: "语言与授课" },
  { id: "section-06", navLabel: "签证与生活" },
  { id: "section-07", navLabel: "中国合作" },
];
