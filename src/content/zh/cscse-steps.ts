import { AdmissionStep } from "@/entities/university/admission-step";

// Шаги — дословно из ТЗ (раздел 3, п.57). Переиспользую тип AdmissionStep
// и компонент AdmissionSteps — форма данных та же (порядковый список шагов),
// нет смысла заводить отдельный тип под "шаги CSCSE".
export const cscseSteps: AdmissionStep[] = [
  { id: "1", titleZh: "CSCSE 注册" }, // Регистрация CSCSE
  { id: "2", titleZh: "提交材料" }, // Подача документов
  { id: "3", titleZh: "缴费" }, // Оплата
  { id: "4", titleZh: "审核" }, // Проверка
  { id: "5", titleZh: "领取电子证书" }, // Получение электронного сертификата
];
