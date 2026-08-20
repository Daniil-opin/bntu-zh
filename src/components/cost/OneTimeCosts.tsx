import { oneTimeCosts } from "@/content/zh/one-time-costs";

export function OneTimeCosts() {
  return (
    <section aria-label="一次性入学费用">
      <h2>一次性入学费用</h2>
      <table>
        <thead>
          <tr>
            <th>项目</th>
            <th>金额</th>
            <th>类型</th>
          </tr>
        </thead>
        <tbody>
          {oneTimeCosts.map((row) => (
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
