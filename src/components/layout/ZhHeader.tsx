import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

// Верхняя навигация. Структура пунктов — см. п.13 ТЗ.
// Вёрстку/дизайн доработать позже — здесь только семантический каркас.
export function ZhHeader() {
  return (
    <header>
      <div className="utility-bar">
        <div className="header-inner utility-inner">
          {/* <nav aria-label="服务导航">
            <ul>
              <li><a href="https://bntu.by/business">商务</a></li>
              <li><a href="https://bntu.by/university/work-here">招聘</a></li>
              <li><a href="https://bntu.by/user">个人账户</a></li>
              <li><a href="https://bntu.by/applicant">申请人</a></li>
            </ul>
          </nav> */}
          <nav className="language-nav" aria-label="语言切换">
            <ul>
              <li><Link href="/zh/">中文</Link></li>
              <li><a href="https://bntu.by/en/">English</a></li>
              <li><a href="https://bntu.by/be/">Беларуская</a></li>
              <li><a href="https://bntu.by/">Русский</a></li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>

      <div className="header-inner primary-inner">
        <details className="mobile-menu">
          <summary aria-label="Открыть меню"><span className="menu-icon" aria-hidden="true"><i></i><i></i><i></i></span></summary>
          <nav aria-label="主导航 мобильное меню">
            <ul>
              <li><Link href="/zh/">首页</Link></li>
              <li><Link href="/zh/faculties">专业方向</Link></li>
              <li><Link href="/zh/admission">招生信息</Link></li>
              <li><Link href="/zh/student-life">留学生活</Link></li>
              <li><Link href="/zh/partners">合作院校</Link></li>
              <li><Link href="/zh/agents">招生代理</Link></li>
            </ul>
          </nav>
        </details>
        <Link className="brand" href="/zh/" aria-label="BNTU 中文首页">
          <img className="brand-logo" src="/brand/bntu-logo.png" alt="BNTU" />
          <span className="brand-name">Белорусский национальный<br />технический университет</span>
        </Link>
        <nav className="primary-nav" aria-label="主导航">
          <ul>
            <li><Link href="/zh/">首页</Link></li>
            <li><Link href="/zh/faculties">专业方向</Link></li>
            <li><Link href="/zh/admission">招生信息</Link></li>
            <li><Link href="/zh/student-life">留学生活</Link></li>
            <li><Link href="/zh/partners">合作院校</Link></li>
            <li><Link href="/zh/agents">招生代理</Link></li>
          </ul>
        </nav>
        <a className="contact-link" href="https://bntu.by/contacts">☎ 联系我们</a>
        <a className="header-cta" href="#apply">申请入学 <span aria-hidden="true">↗</span></a>
        <ThemeToggle className="mobile-theme-toggle" />
      </div>
    </header>
  );
}
