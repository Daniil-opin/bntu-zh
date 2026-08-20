import { admissionRequirements } from "@/content/zh/admission-requirements";

// Название компонента — дословно из рекомендованного списка (п.71 ТЗ).
export function AdmissionRequirements() {
  return (
    <section aria-label="申请条件">
      <h2>申请条件（外国公民）</h2>
      <ul>
        {admissionRequirements.map((req) => (
          <li key={req}>{req}</li>
        ))}
      </ul>
      <p>授课语言通过面试确定。</p>
    </section>
  );
}
