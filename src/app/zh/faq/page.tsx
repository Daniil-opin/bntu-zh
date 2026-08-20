import type { Metadata } from "next";
import Link from "next/link";
import { FAQNavigation } from "@/components/faq/FAQNavigation";
import { FAQSection } from "@/components/faq/FAQSection";
import { faqByCategory } from "@/content/zh/faq-page-items";

// Title/description — дословно из ТЗ (п.64).
export const metadata: Metadata = {
  title: "白俄罗斯国立技术大学(БНТУ)常见问题_文凭中国认可_学费排名",
  description:
    "白俄罗斯国立技术大学(БНТУ/BNTU)官方FAQ：解答世界排名、文凭在中国是否承认、留学一年费用、申请材料与流程、俄语要求、签证及明斯克生活等高频问题。",
  alternates: {
    canonical: "https://bntu.by/zh/faq",
  },
};

// FAQ — п.60-64 ТЗ. Внутренние ссылки (п.63 ТЗ) размещены отдельным
// блоком под соответствующей категорией, а не внутри FAQItem — тип
// FAQItem по ТЗ (раздел 1) содержит только question/answer, добавлять
// в него лишнее поле для ссылки — то же нарушение контракта, что уже
// было исправлено для Faculty.
export default function FaqPage() {
  return (
    <>
      <h1>官方常见问题</h1>
      <p>关于白俄罗斯国立技术大学（БНТУ）留学的官方常见问题解答。</p>

      <FAQNavigation />

      <FAQSection id="section-01" titleZh="关于大学" items={faqByCategory["section-01"]} />
      <p>
        {/* п.63: внутренняя ссылка на "Специальности" под категорией "关于大学" */}
        查看完整专业目录：<Link href="/zh/faculties">系与专业总览</Link>
      </p>

      <FAQSection id="section-02" titleZh="文凭与认可" items={faqByCategory["section-02"]} />
      <p>
        {/* п.63: ссылка на "Признание диплома" */}
        详细了解：<a href="/zh/diploma-recognition">文凭认证</a>
      </p>

      <FAQSection id="section-03" titleZh="留学费用" items={faqByCategory["section-03"]} />
      <p>
        {/* п.63: ссылка на "Стоимость" */}
        详细了解：<a href="/zh/cost">留学费用</a>
      </p>

      <FAQSection id="section-04" titleZh="申请与入学" items={faqByCategory["section-04"]} />
      <p>
        {/* п.63: ссылка на "Поступление" */}
        详细了解：<a href="/zh/admission">如何申请</a>
      </p>

      <FAQSection id="section-05" titleZh="语言与授课" items={faqByCategory["section-05"]} />

      <FAQSection id="section-06" titleZh="签证与生活" items={faqByCategory["section-06"]} />

      <FAQSection id="section-07" titleZh="中国合作" items={faqByCategory["section-07"]} />
      <p>
        {/* п.63: ссылка на "Вузы-партнёры" */}
        详细了解：<a href="/zh/partners">合作院校</a>
      </p>
    </>
  );
}
