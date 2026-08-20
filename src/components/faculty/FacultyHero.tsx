import { Faculty } from "@/entities/faculty/types";

// Справа — краткий инфо-блок в виде HTML-таблицы (п.30 ТЗ явно требует
// именно таблицу, не список). Данные берём из первого элемента programs,
// если он есть — иначе TODO, наполнит контент-менеджер.
export function FacultyHero({ faculty }: { faculty: Faculty }) {
  const summary = faculty.programs[0];

  return (
    <section className="faculty-hero" aria-label="Faculty Hero">
      <h1>{faculty.nameZh}</h1>
      <p>{faculty.descriptionZh || "TODO_VERIFY"}</p>
      <a href="#apply">立即申请</a>

      <table>
        <tbody>
          <tr>
            <th scope="row">学位</th>
            <td>{summary?.degree ?? "TODO_VERIFY"}</td>
          </tr>
          <tr>
            <th scope="row">学制</th>
            <td>{summary?.duration ?? "TODO_VERIFY"}</td>
          </tr>
          <tr>
            <th scope="row">授课语言</th>
            <td>{summary?.language ?? "TODO_VERIFY"}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
