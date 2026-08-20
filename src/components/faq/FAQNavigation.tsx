import { faqCategories } from "@/content/zh/faq-categories";

// Название компонента и структура — дословно из п.61 ТЗ:
// обязателен семантический <nav> с якорными ссылками.
export function FAQNavigation() {
  return (
    <nav aria-label="FAQ 分类导航">
      <ul>
        {faqCategories.map((cat) => (
          <li key={cat.id}>
            <a href={`#${cat.id}`}>{cat.navLabel}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
