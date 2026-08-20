import type { Metadata } from "next";
import { ComparisonTable } from "@/components/article/ComparisonTable";
import { ArticleMeta } from "@/components/article/ArticleMeta";
import { FAQSection } from "@/components/faq/FAQSection";
import { belarusVsRussiaFaq } from "@/content/zh/belarus-vs-russia-faq";

// Title/description — дословно из ТЗ (п.69).
export const metadata: Metadata = {
  title: "白俄罗斯国立技术大学(БНТУ)留学：白俄还是俄罗斯？工科对比",
  description:
    "白俄罗斯国立技术大学（БНТУ，1920年建校）是白俄罗斯重要的工科大学。本文对比白俄罗斯与俄罗斯留学在费用、安全、学历认证（中留服/学信网）和教学语言方面的差异，说明工科生在哪些情况下更适合选择明斯克的БНТУ，并附常见问题解答。",
  alternates: {
    canonical: "https://bntu.by/zh/articles/belarus-vs-russia",
  },
};

const PREFIX = "白俄罗斯国立技术大学（БНТУ / BNTU）";

// Статья "Почему Беларусь, а не Россия" — п.65-69 ТЗ.
// Редакционные ограничения (п.66) соблюдены: сравнение по измеримым
// параметрам, без очернения России, есть честный раздел "когда лучше
// выбрать Россию", без апелляции к Болонскому процессу, признание
// в КНР не подано как эксклюзивное преимущество Беларуси (в сравнительной
// таблице путь признания — CSCSE — одинаков для обеих стран).
export default function BelarusVsRussiaArticle() {
  return (
    <>
      <h1>白俄罗斯国立技术大学（БНТУ）留学：白俄罗斯还是俄罗斯，工科生怎么选？</h1>

      <ArticleMeta datePublished="2026-08-17" dateModified="2026-08-17" />

      <section aria-label="适合人群">
        <h2>谁适合选择白俄罗斯 / БНТУ？</h2>
        <p>
          {PREFIX}
          适合希望以英语或俄语接受全日制工科教育、预算有限、且希望文凭可通过中留服（CSCSE）认证的中国学生。
        </p>
      </section>

      <section aria-label="什么是БНТУ">
        <h2>什么是白俄罗斯国立技术大学？</h2>
        <p>{PREFIX}是白俄罗斯历史悠久的国立工科大学，创建于1920年。</p>

        <h3>是技术大学，不是工业大学</h3>
        <p>
          {PREFIX}
          官方名称为白俄罗斯国立技术大学，不应与白俄罗斯国立工业大学等名称混淆。
        </p>

        <h3>与格鲁吉亚巴统 BNTU 的区别</h3>
        <p>{PREFIX}位于白俄罗斯明斯克，与格鲁吉亚巴统的同缩写院校是两所完全不同的学校。</p>
      </section>

      <section aria-label="白俄罗斯vs俄罗斯">
        <h2>白俄罗斯 vs 俄罗斯留学对比</h2>
        <p>{PREFIX}与俄罗斯高校在费用、语言要求等方面存在具体差异，详见下表。</p>
        <ComparisonTable />
      </section>

      <section aria-label="费用">
        <h2>留学费用</h2>
        <h3>学费</h3>
        <p>{PREFIX}TODO_VERIFY</p>
        <h3>住宿费</h3>
        <p>{PREFIX}TODO_VERIFY</p>
      </section>

      <section aria-label="安全性">
        <h2>安全性</h2>
        <p>{PREFIX}TODO_VERIFY</p>
      </section>

      <section aria-label="文凭认证">
        <h2>文凭认证</h2>
        <p>
          {PREFIX}
          毕业生可通过中国留学服务中心（CSCSE）办理《国外学历学位认证书》。
        </p>
      </section>

      <section aria-label="授课语言">
        <h2>授课语言</h2>
        <p>{PREFIX}TODO_VERIFY</p>
      </section>

      <section aria-label="为什么选择БНТУ">
        <h2>为什么选择白俄罗斯国立技术大学？</h2>
        <p>{PREFIX}TODO_VERIFY</p>
      </section>

      <section aria-label="何时更适合俄罗斯">
        {/* п.66 ТЗ: обязателен честный раздел про Россию — без очернения. */}
        <h2>什么情况下更适合选择俄罗斯？</h2>
        <p>
          对于希望在中国国内知名度更高、或倾向大城市（如莫斯科、圣彼得堡）生活体验的学生，俄罗斯高校也是值得考虑的选择——具体应结合个人专业方向、预算与语言基础综合判断。
        </p>
      </section>

      <FAQSection titleZh="常见问题" items={belarusVsRussiaFaq} />
    </>
  );
}
