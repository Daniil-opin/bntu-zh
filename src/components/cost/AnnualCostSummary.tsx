import { annualCostSummary } from "@/content/zh/annual-cost";

export function AnnualCostSummary() {
  return (
    <section aria-label="年总费用速览">
      <h2>年总费用速览</h2>
      <table>
        <tbody>
          {annualCostSummary.map((row) => (
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
