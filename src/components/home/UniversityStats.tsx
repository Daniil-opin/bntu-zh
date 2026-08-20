import { universityFacts } from "@/content/zh/facts";

// Все значения — из единого universityFacts (п.8 ТЗ), никаких
// собственных хардкод-цифр здесь быть не должно.
// Переиспользуется на странице "Поступление" (п.41 ТЗ).
const rows: { label: string; value: string | number }[] = [
  { label: "创建年份", value: universityFacts.foundationYear },
  { label: "在校学生人数", value: universityFacts.studentCount },
  { label: "国际学生人数", value: universityFacts.internationalStudentCount },
  { label: "院系数量", value: universityFacts.facultiesCount },
  { label: "QS 世界排名", value: universityFacts.qsRanking },
];

export function UniversityStats() {
  return (
    <section aria-label="大学数据一览">
      <h2>大学数据一览</h2>
      <table>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
