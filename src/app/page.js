import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <h1>anilhitang</h1>
        <p>Try out some random fun stuff</p>
      </header>
      <main>
        <div className="grid-container">
          <div className={styles.item_container}>
            <Link href="/pages/jokes">Jokes</Link>
          </div>
          <div className={styles.item_container}>
            <Link href="/pages/lyrics">Lyrics</Link>
          </div>
          <div className={styles.item_container}>
            <Link href="/pages/lyrics">Orange Catcher</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
