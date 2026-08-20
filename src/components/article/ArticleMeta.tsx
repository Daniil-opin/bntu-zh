// Название компонента — из рекомендованного списка п.71 ТЗ.
// п.68 требует ОБА варианта дат: видимые пользователю И структурированные
// (datePublished/dateModified) — второе реализовано через JSON-LD <script>,
// это стандартный способ дать эту информацию поисковым системам/LLM.
export function ArticleMeta({
  datePublished,
  dateModified,
}: {
  datePublished: string;
  dateModified: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    datePublished,
    dateModified,
  };

  return (
    <>
      <p>
        发布日期：{datePublished} · 更新日期：{dateModified}
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
