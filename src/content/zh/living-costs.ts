import { AnnualCostRow } from "@/entities/university/annual-cost";

// Проживание — п.49 ТЗ: общежитие / аренда комнаты / аренда квартиры.
export const housingCosts: AnnualCostRow[] = [
  { label: "学生宿舍", amount: "TODO_VERIFY" },
  { label: "合租房间", amount: "TODO_VERIFY" },
  { label: "整套公寓", amount: "TODO_VERIFY" },
];

// Жизнь в Минске — п.50 ТЗ: питание / транспорт / связь и интернет / прочее.
export const minskLifeCosts: AnnualCostRow[] = [
  { label: "餐饮", amount: "TODO_VERIFY" },
  { label: "交通", amount: "TODO_VERIFY" },
  { label: "通讯与网络", amount: "TODO_VERIFY" },
  { label: "其他", amount: "TODO_VERIFY" },
];
