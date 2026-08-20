import Image from "next/image";
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <h1 className={styles.visuallyHidden}>Страница не найдена</h1>
      <Link className={styles.homeLink} href="/zh/" aria-label="Вернуться на главную">
        <Image
          className={styles.illustration}
          src="/brand/404.png"
          alt="Страница не найдена"
          width={7930}
          height={4120}
          priority
        />
      </Link>
    </main>
  );
}
