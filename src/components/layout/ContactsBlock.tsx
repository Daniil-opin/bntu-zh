import { contactInfo } from "@/content/zh/contacts";

// Переиспользуемый на всех нужных страницах компонент (п.22 ТЗ).
// WeChat-элементы рендерятся, только если данные реально есть.
export function ContactsBlock() {
  return (
    <section aria-label="联系方式">
      {contactInfo.email && <p>邮箱：{contactInfo.email}</p>}
      {contactInfo.phone && <p>电话：{contactInfo.phone}</p>}
      {contactInfo.wechat && <p>WeChat：{contactInfo.wechat}</p>}
      {/* wechatQr — картинка QR-кода, добавим когда появится реальный WeChat */}
    </section>
  );
}
