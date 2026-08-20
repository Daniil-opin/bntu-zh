import { UniversityFacts } from "@/entities/university/types";

// ⚠️ ВСЕ значения ниже — предварительные, из отчёта.
// Перед production их должен подтвердить ответственный за контент (см. п.9, п.80 ТЗ).
// Пока не подтверждено — использовать пометку TODO_VERIFY в комментарии, а не в тексте на сайте.
export const universityFacts: UniversityFacts = {
  canonicalNameZh: "白俄罗斯国立技术大学",
  canonicalNameRu: "Белорусский национальный технический университет",
  abbreviationRu: "БНТУ",
  abbreviationEn: "BNTU",
  foundationYear: 1920,
  studentCount: "TODO_VERIFY", // в отчёте расхождение: ~30 000 vs ~35 000
  internationalStudentCount: "TODO_VERIFY",
  facultiesCount: 17,
  qsRanking: "TODO_VERIFY", // расхождение: QS 2026 901–950 vs QS 2027 901–950
};
