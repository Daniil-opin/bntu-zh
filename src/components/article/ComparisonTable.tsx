import { belarusVsRussiaComparison } from "@/content/zh/belarus-vs-russia-comparison";

export function ComparisonTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>对比项</th>
          <th>白俄罗斯（БНТУ）</th>
          <th>俄罗斯</th>
        </tr>
      </thead>
      <tbody>
        {belarusVsRussiaComparison.map((row) => (
          <tr key={row.criterion}>
            <td>{row.criterion}</td>
            <td>{row.belarus}</td>
            <td>{row.russia}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
