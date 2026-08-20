import { TuitionItem } from "@/entities/faculty/types";

// ТЗ (п.71) называет один компонент "FacultyCostsTable" на весь блок
// стоимости, но по структуре ТЗ (п.33 и п.34) это два РАЗНЫХ раздела:
// разные <h2>, разные колонки, разные типы данных (TuitionItem/CostItem).
// Поэтому делаю два отдельных компонента вместо одного размытого —
// это и есть расхождение внутри самого ТЗ, аналогичное Faculty из п.1/73.
export function FacultyTuitionTable({ tuition }: { tuition: TuitionItem[] }) {
  return (
    <section aria-label="学费总览">
      <h2>学费总览</h2>
      <table>
        <thead>
          <tr>
            <th>层次</th>
            <th>学制</th>
            <th>学费/年</th>
          </tr>
        </thead>
        <tbody>
          {tuition.length === 0 && (
            <tr>
              <td colSpan={3}>TODO_VERIFY</td>
            </tr>
          )}
          {tuition.map((row) => (
            <tr key={row.level}>
              <td>{row.level}</td>
              <td>{row.duration}</td>
              <td>{row.costPerYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
