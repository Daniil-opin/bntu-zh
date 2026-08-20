import { Program } from "@/entities/faculty/types";

// Название компонента — дословно из рекомендованного списка (п.71 ТЗ).
// Колонки — по п.32: Специальность / Степень / Срок / Язык.
export function FacultyProgramsTable({ programs }: { programs: Program[] }) {
  return (
    <section aria-label="专业列表">
      <h2>专业列表</h2>
      <table>
        <thead>
          <tr>
            <th>专业</th>
            <th>学位</th>
            <th>学制</th>
            <th>语言</th>
          </tr>
        </thead>
        <tbody>
          {programs.length === 0 && (
            <tr>
              <td colSpan={4}>TODO_VERIFY</td>
            </tr>
          )}
          {programs.map((p) => (
            <tr key={p.id}>
              <td>{p.nameZh}</td>
              <td>{p.degree}</td>
              <td>{p.duration}</td>
              <td>{p.language}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
