import { CostItem } from "@/entities/faculty/types";

export function FacultyAdditionalCostsTable({ costs }: { costs: CostItem[] }) {
  return (
    <section aria-label="其他费用">
      <h2>其他费用</h2>
      <table>
        <thead>
          <tr>
            <th>项目</th>
            <th>金额</th>
            <th>周期</th>
          </tr>
        </thead>
        <tbody>
          {costs.length === 0 && (
            <tr>
              <td colSpan={3}>TODO_VERIFY</td>
            </tr>
          )}
          {costs.map((row) => (
            <tr key={row.label}>
              <td>{row.label}</td>
              <td>{row.amount}</td>
              <td>{row.period}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
