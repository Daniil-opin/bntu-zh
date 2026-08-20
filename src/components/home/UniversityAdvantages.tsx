import { advantages } from "@/content/zh/advantages";

// Переиспользуемый компонент (п.40 ТЗ требует использовать этот же
// компонент на странице "Поступление", а не копию данных).
export function UniversityAdvantages() {
  return (
    <section aria-label="选择理由">
      <h2>选择白俄罗斯国立技术大学的 6 个理由</h2>
      {advantages.map((a) => (
        <article key={a.id}>
          <h3>{a.titleZh}</h3>
          <p>{a.descriptionZh}</p>
        </article>
      ))}
    </section>
  );
}
