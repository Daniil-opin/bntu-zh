interface Partner {
  nameZh: string;
  url: string;
}

// Раньше здесь был видимый TODO-текст — исправлено по аналогии с
// ScholarshipInfo (п.52 ТЗ): если подтверждённых данных нет, блок
// не рендерится вовсе, а не показывает плейсхолдер пользователю.
// Данные о партнёрах (п.21 ТЗ) ещё не согласованы — сейчас partners не передаётся.
export function PartnersSection({ partners }: { partners?: Partner[] }) {
  if (!partners || partners.length === 0) return null;

  return (
    <section aria-label="中国合作">
      <h2>中国合作</h2>
      <ul>
        {partners.map((p) => (
          <li key={p.nameZh}>
            <a href={p.url}>{p.nameZh}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
