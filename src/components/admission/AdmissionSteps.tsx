import { AdmissionStep } from "@/entities/university/admission-step";

type HeadingLevel = "h2" | "h3";

interface AdmissionStepsProps {
  steps: AdmissionStep[];
  titleZh: string;
  // По умолчанию h2 (самостоятельный раздел, как на факультете/поступлении).
  // h3 — когда компонент вложен внутрь уже существующего <h2>-раздела
  // (пример: раздел 3 страницы признания диплома, п.57 ТЗ), чтобы не
  // ломать иерархию заголовков (п.10 ТЗ требует корректную вложенность).
  headingLevel?: HeadingLevel;
}

export function AdmissionSteps({ steps, titleZh, headingLevel = "h2" }: AdmissionStepsProps) {
  const Heading = headingLevel;
  return (
    <section aria-label={titleZh}>
      <Heading>{titleZh}</Heading>
      <ol>
        {steps.map((step) => (
          <li key={step.id}>{step.titleZh}</li>
        ))}
      </ol>
    </section>
  );
}
