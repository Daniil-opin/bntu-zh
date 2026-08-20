// Один пункт из блока "6 причин выбрать БНТУ" (п.15.3 ТЗ).
// Каждый пункт рендерится как <h3> + <p> внутри UniversityAdvantages.
export interface Advantage {
  id: string;
  titleZh: string; // <h3>
  descriptionZh: string; // <p>
}
