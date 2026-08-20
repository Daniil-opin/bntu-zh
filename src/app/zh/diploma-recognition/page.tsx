import type { Metadata } from "next";
import { AdmissionSteps } from "@/components/admission/AdmissionSteps";
import { FAQSection } from "@/components/faq/FAQSection";
import { cscseSteps } from "@/content/zh/cscse-steps";
import { diplomaRecognitionFaq } from "@/content/zh/diploma-recognition-faq";

// Title/description — дословно из ТЗ (п.59).
export const metadata: Metadata = {
  title: "白俄罗斯国立技术大学文凭中国承认吗？中留服学历认证指南",
  description:
    "白俄罗斯国立技术大学 是中国教育部认可的白俄罗斯正规公立高校，列入教育涉外监管信息网名单。中白两国签署学历学位互认协议，毕业生回国可通过中留服（CSCSE）办理《国外学历学位认证书》，用于考公、考研、读博与就业落户。",
  alternates: {
    canonical: "https://bntu.by/zh/diploma-recognition",
  },
};

// Признание диплома в КНР — п.55-59 ТЗ.
// п.55 ТЗ: перед production нужно проверить прямую ссылку на реестр
// Минобразования КНР, год соглашения РБ-КНР, тариф/сроки CSCSE, полный
// перечень документов — используются только официальные источники.
export default function DiplomaRecognitionPage() {
  return (
    <>
      <h1>文凭认证</h1>
      <p>白俄罗斯国立技术大学文凭在中国承认吗？</p>

      <section aria-label="是否被认可">
        <h2>一、白俄罗斯国立技术大学是否被中国教育部认可？</h2>
        <p>TODO_VERIFY</p>
        {/* TODO_VERIFY: подтвердить реальный URL перед публикацией */}
        <a href="https://jsj.moe.gov.cn">教育部教育涉外监管信息网</a>
      </section>

      <section aria-label="互认协议">
        <h2>二、中白学历学位互认协议</h2>
        <p>TODO_VERIFY: год подписания соглашения РБ-КНР требует проверки (п.55 ТЗ)</p>
        {/* TODO_VERIFY: официальный китайский государственный источник, URL не указан в ТЗ */}
      </section>

      <section aria-label="认证流程">
        <h2>三、回国后如何办理学历学位认证？</h2>
        <AdmissionSteps steps={cscseSteps} titleZh="认证步骤" headingLevel="h3" />
        <ul>
          {/* TODO_VERIFY: официальные ссылки CSCSE / CHSI */}
          <li>
            <a href="https://www.cscse.edu.cn">CSCSE</a>
          </li>
          <li>
            <a href="https://www.chsi.com.cn">CHSI</a>
          </li>
        </ul>
      </section>

      <section aria-label="所需材料">
        <h2>四、认证通常需要的材料</h2>
        {/* ТЗ не даёт точный перечень документов (п.57) — список ниже
            требует подтверждения перед публикацией (см. также п.55 ТЗ). */}
        <ul>
          <li>TODO_VERIFY</li>
          <li>TODO_VERIFY</li>
          <li>TODO_VERIFY</li>
        </ul>
      </section>

      <section aria-label="用途">
        <h2>五、认证后的文凭可用于哪些用途？</h2>
        {/* Список взят из готового текста meta-description ТЗ (п.59) —
            это реальные данные из ТЗ, а не выдумка. */}
        <ul>
          <li>考公务员</li>
          <li>考研</li>
          <li>读博</li>
          <li>就业与落户</li>
        </ul>
      </section>

      <FAQSection titleZh="文凭认证常见问题" items={diplomaRecognitionFaq} />
    </>
  );
}
