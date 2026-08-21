import { ContactInfo } from "@/entities/university/contact";

export const contactInfo: ContactInfo = {
  email: "bntu@bntu.by",
  phone: "+375 17 255-10-11",
};

export interface ContactGroup {
  title: string;
  description?: string;
  contacts: Array<{
    label?: string;
    value: string;
    href?: string;
  }>;
}

export const contactGroups: ContactGroup[] = [
  {
    title: "BNTU 总机",
    contacts: [
      { value: "+375 17 255-10-11", href: "tel:+375172551011" },
      { value: "+375 17 293-93-30", href: "tel:+375172939330" },
    ],
  },
  {
    title: "热线电话",
    description: "意见、申请与投诉",
    contacts: [
      { value: "+375 44 721-31-29（Telegram）", href: "tel:+375447213129" },
      { label: "传真", value: "+375 17 282-11-37", href: "tel:+375172821137" },
    ],
  },
  {
    title: "文件事务办公室",
    description: "查询来信和传真办理进度",
    contacts: [{ value: "+375 17 318-74-16", href: "tel:+375173187416" }],
  },
  {
    title: "媒体与新闻中心",
    contacts: [
      { label: "负责人", value: "+375 17 292-93-05", href: "tel:+375172929305" },
      { label: "新闻部门", value: "+375 17 293-96-74", href: "tel:+375172939674" },
    ],
  },
  {
    title: "校长办公室",
    contacts: [{ value: "查看联系方式与接待时间", href: "https://bntu.by/departments/rectorate/contacts" }],
  },
  {
    title: "安全服务",
    contacts: [
      { label: "管理部门", value: "+375 17 301-10-53", href: "tel:+375173011053" },
      { label: "值班室（全天候）", value: "+375 17 290-98-50", href: "tel:+375172909850" },
    ],
  },
  {
    title: "招生办公室",
    contacts: [{ value: "+375 17 378-38-42", href: "tel:+375173783842" }],
  },
  {
    title: "人事管理处",
    contacts: [
      { label: "教师岗位", value: "+375 17 302-64-37", href: "tel:+375173026437" },
      { label: "教学辅助及服务岗位", value: "+375 17 293-92-22", href: "tel:+375172939222" },
      { label: "学生事务部门", value: "+375 17 236-35-16", href: "tel:+375172363516" },
    ],
  },
  {
    title: "财务处",
    contacts: [
      { label: "收费教育财务部门", value: "+375 17 293-91-08", href: "tel:+375172939108" },
      { label: "学生财务部门", value: "+375 17 293-92-66", href: "tel:+375172939266" },
    ],
  },
  {
    title: "法律管理处",
    contacts: [{ value: "+375 17 293-96-96", href: "tel:+375172939696" }],
  },
  {
    title: "BNTU 理事会",
    contacts: [{ value: "+375 17 338-77-83", href: "tel:+375173387783" }],
  },
  {
    title: "工会",
    contacts: [
      { label: "教职工", value: "+375 17 363-77-21", href: "tel:+375173637721" },
      { label: "学生", value: "+375 17 292-12-63", href: "tel:+375172921263" },
    ],
  },
  {
    title: "BRSМ 青年委员会",
    contacts: [{ value: "+375 17 292-77-92", href: "tel:+375172927792" }],
  },
  {
    title: "BNTU 出版社",
    contacts: [{ value: "+375 17 292-43-01", href: "tel:+375172924301" }],
  },
  {
    title: "《BNTU 新闻》编辑部",
    contacts: [{ value: "+375 17 235-14-03", href: "tel:+375172351403" }],
  },
];
