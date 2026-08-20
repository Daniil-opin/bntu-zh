import { homeTuitionSummary } from "@/content/zh/home-tuition";
import Link from "next/link";

// Переиспользую те же данные, что и на главной (homeTuitionSummary) —
// принцип единого источника данных, п.8 ТЗ: цифры стоимости не должны
// расходиться между страницами.
// Внутренняя ссылка на страницу специальностей — обязательное требование п.48.
export function CostTuitionTable() {
  return (
    <section aria-label="学费">
      <h2>学费</h2>
      <table>
        <thead>
          <tr>
            <th>层次</th>
            <th>学制</th>
            <th>学费/年</th>
          </tr>
        </thead>
        <tbody>
          {homeTuitionSummary.map((row) => (
            <tr key={row.level}>
              <td>{row.level}</td>
              <td>{row.duration}</td>
              <td>{row.costPerYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/zh/faculties">查看各专业具体学费</Link>
    </section>
  );
}
