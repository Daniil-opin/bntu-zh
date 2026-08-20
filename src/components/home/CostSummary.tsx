import { homeTuitionSummary } from "@/content/zh/home-tuition";

// п.18 ТЗ: стоимость обязательно через <table>, картинкой заменять нельзя.
export function CostSummary() {
  return (
    <section aria-label="学费标准">
      <h2>学费标准</h2>
      <table>
        <thead>
          <tr>
            <th>层次</th>
            <th>学制</th>
            <th>学费/年</th>
          </tr>
        </thead>
        <tbody>
          {homeTuitionSummary.map((row) => (
            <tr key={row.level}>
              <td>{row.level}</td>
              <td>{row.duration}</td>
              <td>{row.costPerYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
