import { Faculty } from "@/entities/faculty/types";

// Контент (descriptionZh, programs, tuition и т.д.) наполняется контент-менеджером.
// Здесь — только структура + название + slug, чтобы страницы уже сейчас можно было генерировать.
const raw: { slug: string; abbreviation: string; nameZh: string }[] = [
  { slug: "atf", abbreviation: "АТФ", nameZh: "汽车拖拉机系" },
  { slug: "fgdie", abbreviation: "ФГДИЭ", nameZh: "采矿与环境工程系" },
  { slug: "msf", abbreviation: "МСФ", nameZh: "机械制造系" },
  { slug: "mtf", abbreviation: "МТФ", nameZh: "机械工艺系" },
  { slug: "fmmp", abbreviation: "ФММП", nameZh: "市场营销、管理与创业系" },
  { slug: "ef", abbreviation: "ЭФ", nameZh: "能源系" },
  { slug: "fitr", abbreviation: "ФИТР", nameZh: "信息技术与机器人系" },
  { slug: "ftug", abbreviation: "ФТУГ", nameZh: "管理技术与人文系" },
  { slug: "ipf", abbreviation: "ИПФ", nameZh: "工程教育系" },
  { slug: "fes", abbreviation: "ФЭС", nameZh: "能源建设系" },
  { slug: "af", abbreviation: "АФ", nameZh: "建筑系" },
  { slug: "sf", abbreviation: "СФ", nameZh: "土木工程系" },
  { slug: "psf", abbreviation: "ПСФ", nameZh: "仪器制造系" },
  { slug: "ftk", abbreviation: "ФТК", nameZh: "交通工程系" },
  { slug: "vtf", abbreviation: "ВТФ", nameZh: "军事技术系" },
  { slug: "stf", abbreviation: "СТФ", nameZh: "体育技术系" },
  { slug: "fms", abbreviation: "ФМС", nameZh: "国际合作系" },
];

// meta формируется динамически из данных факультета — прямое требование п.38 ТЗ
// ("Meta формируется динамически на основании данных факультета").
// Шаблон title/description ниже — по образцу примера для МСФ из п.38, обобщён на все факультеты.
// Числа/факты внутри — TODO_VERIFY.
export const faculties: Faculty[] = raw.map(
  (f): Faculty => ({
    slug: f.slug,
    abbreviation: f.abbreviation,
    nameZh: f.nameZh,
    descriptionZh: "", // TODO: контент-менеджер
    programs: [],
    tuition: [],
    additionalCosts: [],
    faq: [],
    meta: {
      title: `${f.nameZh} - 白俄罗斯国立技术大学（БНТУ）中国留学生招生`,
      description: `白俄罗斯国立技术大学${f.nameZh}面向中国学生：查看专业、学费、申请流程与常见问题。`, // TODO_VERIFY
      canonical: `https://bntu.by/zh/faculties/${f.slug}`,
    },
  })
);
