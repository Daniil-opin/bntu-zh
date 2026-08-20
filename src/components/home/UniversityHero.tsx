// Hero-блок главной. По ТЗ (п.15.1) это единственное место,
// где на всей странице разрешён <h1>. Остальной текст hero —
// НЕ через h1-h6 (просто <p> / обычная разметка).
export function UniversityHero() {
  return (
    <section className="hero-section" aria-label="Hero">
      <div className="hero-content">
        <p className="hero-kicker">白俄罗斯国立技术大学 · 自 1920 年</p>
        <h1>工程教育<br />塑造未来</h1>
        <p className="hero-lead">面向国际学生的本科、硕士及预科留学申请</p>
        <div className="hero-actions">
          <a className="hero-primary-action" href="#apply">立即申请 <span aria-hidden="true">↗</span></a>
          <a className="hero-secondary-action" href="#faculties">探索专业</a>
        </div>
      </div>
      <div className="hero-note" aria-hidden="true">BNTU<br /><span>1920</span></div>
    </section>
  );
}
