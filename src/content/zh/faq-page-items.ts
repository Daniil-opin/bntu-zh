import { FAQItem } from "@/entities/faq/types";

// Темы каждой категории — дословно из п.62 ТЗ.
export const faqByCategory: Record<string, FAQItem[]> = {
  "section-01": [
    { question: "白俄罗斯国立技术大学（БНТУ）是什么样的大学？", answer: "TODO_VERIFY" },
    { question: "白俄罗斯国立技术大学的 QS 世界排名如何？", answer: "TODO_VERIFY" },
    { question: "白俄罗斯国立技术大学有哪些系与专业？", answer: "TODO_VERIFY" },
  ],
  "section-02": [
    { question: "白俄罗斯国立技术大学的文凭在中国是否被承认？", answer: "TODO_VERIFY" },
    { question: "回国后如何通过中留服（CSCSE）办理认证？", answer: "TODO_VERIFY" },
  ],
  "section-03": [
    { question: "留学一年的总费用大概是多少？", answer: "TODO_VERIFY" },
    { question: "本科/硕士学费具体是多少？", answer: "TODO_VERIFY" },
    { question: "在明斯克生活费用高吗？", answer: "TODO_VERIFY" },
  ],
  "section-04": [
    { question: "申请需要准备哪些材料？", answer: "TODO_VERIFY" },
    { question: "申请流程是怎样的？", answer: "TODO_VERIFY" },
    { question: "申请截止日期是什么时候？", answer: "TODO_VERIFY" },
    { question: "预科（预备系）是做什么的？", answer: "TODO_VERIFY" },
  ],
  "section-05": [
    { question: "申请是否需要俄语等级证书？", answer: "TODO_VERIFY" },
    { question: "有哪些专业可以用英语授课？", answer: "TODO_VERIFY" },
  ],
  "section-06": [
    { question: "留学签证如何办理？", answer: "TODO_VERIFY" },
    { question: "学校是否提供学生宿舍？", answer: "TODO_VERIFY" },
  ],
  "section-07": [
    { question: "目前在校的中国学生人数大约是多少？", answer: "TODO_VERIFY" },
    { question: "白俄罗斯国立技术大学与哪些中国高校有合作？", answer: "TODO_VERIFY" },
  ],
};
