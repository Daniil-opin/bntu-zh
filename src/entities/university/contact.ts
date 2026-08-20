// Контакты. Если WeChat не существует — соответствующий элемент
// не отображать (п.22 ТЗ), поэтому все поля опциональны.
export interface ContactInfo {
  email?: string;
  phone?: string;
  wechat?: string;
  wechatQr?: string;
}
