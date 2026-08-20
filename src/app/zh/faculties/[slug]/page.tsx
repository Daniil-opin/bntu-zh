// Шаблон страницы факультета — единый для всех 17, см. п.29-38 ТЗ.
import type { Metadata } from "next";
import { faculties } from "@/content/zh/faculties";
import { admissionSteps } from "@/content/zh/admission-steps";
import { facultyFaqTemplate } from "@/content/zh/faculty-faq-template";
import { notFound } from "next/navigation";
import { FacultyHero } from "@/components/faculty/FacultyHero";
import { FacultyProgramsTable } from "@/components/faculty/FacultyProgramsTable";
import { FacultyTuitionTable } from "@/components/faculty/FacultyTuitionTable";
import { FacultyAdditionalCostsTable } from "@/components/faculty/FacultyAdditionalCostsTable";
import { AdmissionSteps } from "@/components/admission/AdmissionSteps";
import { FacultyDiplomaRecognition } from "@/components/faculty/FacultyDiplomaRecognition";
import { FAQSection } from "@/components/faq/FAQSection";
import { ApplicationForm } from "@/components/application/ApplicationForm";

export function generateStaticParams() {
  return faculties.map((f) => ({ slug: f.slug }));
}

// Meta формируется динамически из faculty.meta — п.38 ТЗ.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const faculty = faculties.find((f) => f.slug === slug);
  if (!faculty) return {};

  return {
    title: faculty.meta.title,
    description: faculty.meta.description,
    alternates: { canonical: faculty.meta.canonical },
  };
}

export default async function FacultyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const faculty = faculties.find((f) => f.slug === slug);
  if (!faculty) return notFound();

  // faculty.faq наполняется контент-менеджером под конкретный факультет;
  // пока пусто — используем общий шаблон вопросов по темам из п.37 ТЗ.
  const faqItems = faculty.faq.length > 0 ? faculty.faq : facultyFaqTemplate;

  return (
    <>
      <FacultyHero faculty={faculty} />
      <FacultyProgramsTable programs={faculty.programs} />
      <FacultyTuitionTable tuition={faculty.tuition} />
      <FacultyAdditionalCostsTable costs={faculty.additionalCosts} />
      <AdmissionSteps steps={admissionSteps} titleZh="如何申请" />
      <FacultyDiplomaRecognition />
      <FAQSection titleZh="常见问题" items={faqItems} />
      <ApplicationForm />
    </>
  );
}
