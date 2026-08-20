// Единый источник фактов об университете.
// Используется всеми компонентами (UniversityStats, Hero и т.д.),
// чтобы цифры не расходились по разным страницам (см. п.8 ТЗ).
export interface UniversityFacts {
  canonicalNameZh: string;
  canonicalNameRu: string;
  abbreviationRu: string;
  abbreviationEn: string;
  foundationYear: number;
  studentCount: string;
  internationalStudentCount: string;
  facultiesCount: number;
  qsRanking: string;
}
