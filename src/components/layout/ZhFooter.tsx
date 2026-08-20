export function ZhFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-map">
          <iframe
            title="Карта БНТУ"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Abc9b59470b2849276815b1728e1b3d88c0e5a99129efb0188f09f51a41be2b8c&amp;source=constructor"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <div className="footer-contacts">
          {/* Требуется добавить официальный белый SVG логотипа БНТУ. */}
          <div className="footer-brand">БНТУ <span>1920</span></div>
          <h2>联系方式</h2>
          <a href="tel:+375172551011" className="footer-contact-link">☎ <span>8 (017) 255-10-11</span></a>
          <a href="mailto:bntu@bntu.by" className="footer-contact-link">✉ <span>bntu@bntu.by</span></a>
          <p className="footer-address">Беларусь, г. Минск,<br />проспект Независимости, 65</p>
          <div className="footer-socials" aria-label="社交网络">
            <a href="https://vk.com/bntuby" target="_blank" rel="noreferrer" aria-label="VK">vk</a>
            <a href="https://www.facebook.com/bntuby" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href="https://www.youtube.com/bntuby" target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
            <a href="https://www.instagram.com/bntu" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
            <a href="https://by.linkedin.com/school/bntuby" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://m.me/bntuby" target="_blank" rel="noreferrer" aria-label="Messenger">m</a>
            <a href="https://t.me/bntuby" target="_blank" rel="noreferrer" aria-label="Telegram">tg</a>
          </div>
          <p className="footer-address">
  <strong>Адрес:</strong> Республика Беларусь,
  <br />
  г. Минск, пр-т Независимости, 65
</p>
        </div>
      </div>
    </footer>
  );
}
