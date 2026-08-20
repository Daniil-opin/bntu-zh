import { AnnualCostRow } from "@/entities/university/annual-cost";

// Одна и та же форма таблицы нужна дважды (п.49 "住宿费" и п.50
// "明斯克生活费") — вместо копии компонента параметризую заголовком.
export function SimpleCostTable({ titleZh, rows }: { titleZh: string; rows: AnnualCostRow[] }) {
  return (
    <section aria-label={titleZh}>
      <h2>{titleZh}</h2>
      <table>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
