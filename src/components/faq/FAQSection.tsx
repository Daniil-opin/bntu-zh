import { FAQItem } from "@/entities/faq/types";

interface FAQSectionProps {
  titleZh: string; // заголовок блока, рендерится как <h2>
  items: FAQItem[];
  id?: string; // для якорной навигации (п.61 ТЗ — FAQNavigation ссылается на #section-XX)
}

// <details>/<summary> — допустимый по ТЗ (п.11) вариант аккордеона:
// ответ остаётся в HTML/DOM независимо от того, открыт блок или закрыт.
// Запрещённый вариант {isOpen && <p>...} здесь принципиально не используется.
export function FAQSection({ titleZh, items, id }: FAQSectionProps) {
  return (
    <section id={id} aria-label={titleZh}>
      <h2>{titleZh}</h2>
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </section>
  );
}
