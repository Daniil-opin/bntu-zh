import Link from "next/link";
import { Faculty } from "@/entities/faculty/types";

type HeadingLevel = "h2" | "h3";

interface FacultyCardProps {
  faculty: Faculty;
  // На главной название факультета — <h3> (п.17 ТЗ, т.к. <h2>学院</h2>
  // уже занят заголовком секции). На хабе "Специальности" — <h2> (п.26 ТЗ).
  // Один компонент, два места использования — вместо копии кода под каждый уровень.
  headingLevel: HeadingLevel;
}

// Вся карточка кликабельна (п.17, п.26 ТЗ): оборачиваем всё содержимое
// в <Link>, а не вешаем ссылку только на заголовок.
export function FacultyCard({ faculty, headingLevel }: FacultyCardProps) {
  const Heading = headingLevel;
  return (
    <Link className="faculty-card-link" href={`/zh/faculties/${faculty.slug}`}>
      <article className="faculty-card-article">
        <Heading className="faculty-card-title">{faculty.nameZh}</Heading>
        {faculty.programs.length > 0 && (
          <ul className="faculty-card-list-items">
            {faculty.programs.map((p) => (
              <li key={p.id}>{p.nameZh}</li>
            ))}
          </ul>
        )}
      </article>
    </Link>
  );
}
