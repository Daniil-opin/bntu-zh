import type { Metadata } from "next";
import { contactGroups, contactInfo } from "@/content/zh/contacts";

export const metadata: Metadata = {
  title: "联系我们 | 白俄罗斯国立技术大学",
  description: "白俄罗斯国立技术大学 BNTU 官方联系方式、地址、招生办公室及各部门电话。",
  alternates: {
    canonical: "https://bntu.by/zh/contacts",
  },
};

export default function ContactsPage() {
  return (
    <div className="contacts-page">
      <section className="contacts-intro" aria-labelledby="contacts-title">
        <p className="contacts-kicker">BNTU · 明斯克</p>
        <h1 id="contacts-title">联系我们</h1>
        <p className="contacts-lead">如需了解招生、学习或学校服务信息，请联系相应部门。</p>
        <div className="contacts-overview">
          <div>
            <span className="contacts-overview-label">地址</span>
            <p>白俄罗斯共和国，明斯克市<br />独立大街 65 号</p>
          </div>
          <div>
            <span className="contacts-overview-label">电子邮箱</span>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </div>
          <div>
            <span className="contacts-overview-label">总机</span>
            <a href={`tel:${contactInfo.phone?.replaceAll(" ", "")}`}>{contactInfo.phone}</a>
          </div>
        </div>
      </section>

      <section className="contacts-directory" aria-labelledby="directory-title">
        <div className="contacts-section-heading">
          <p className="contacts-kicker">官方渠道</p>
          <h2 id="directory-title">部门联系方式</h2>
        </div>
        <div className="contact-groups">
          {contactGroups.map((group) => (
            <article className="contact-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.description && <p className="contact-group-description">{group.description}</p>}
              <ul>
                {group.contacts.map((contact) => (
                  <li key={`${contact.label ?? "contact"}-${contact.value}`}>
                    {contact.label && <span>{contact.label}</span>}
                    {contact.href ? (
                      <a href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}>
                        {contact.value}
                      </a>
                    ) : (
                      <b>{contact.value}</b>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contacts-links" aria-labelledby="links-title">
        <h2 id="links-title">更多信息</h2>
        <div>
          <a href="https://bntu.by/departments" target="_blank" rel="noreferrer">查看大学各部门 <span aria-hidden="true">↗</span></a>
          <a href="https://bntu.by/departments/odo" target="_blank" rel="noreferrer">文件事务办公室 <span aria-hidden="true">↗</span></a>
          <a href="https://bntu.by/departments/rectorate/contacts" target="_blank" rel="noreferrer">校长办公室接待信息 <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </div>
  );
}
