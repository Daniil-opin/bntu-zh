import { faculties } from "@/content/zh/faculties";
import { FacultyCard } from "@/components/faculty/FacultyCard";
import Link from "next/link";

// ТЗ (п.17) требует показывать на главной только "наиболее востребованные"
// факультеты, а не все 17. Какие именно — решение контент-менеджера/маркетинга,
// разработчик не должен выбирать это сам (аналогично правилу п.80 про верификацию данных).
// TODO_VERIFY: пока временно берём первые 6 — заменить на согласованный список.
const featuredSlugs = faculties.slice(0, 6).map((f) => f.slug);
const featuredFaculties = faculties.filter((f) => featuredSlugs.includes(f.slug));

export function FacultyGrid() {
  return (
    <section id="faculties" aria-label="学院">
      <h2>学院</h2>
      <div className="faculty-card-list">
        {featuredFaculties.map((f) => (
          <FacultyCard key={f.slug} faculty={f} headingLevel="h3" />
        ))}
      </div>
      <Link href="/zh/faculties">查看所有专业</Link>
    </section>
  );
}
