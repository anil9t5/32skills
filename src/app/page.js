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
      <div className="container">
        <div className="flex-container text-align-center">
          <div className={`${styles.item_container} flex-item`}>
            <Link href="/pages/jokes">
              <Image
                src="/jokes.png"
                width={400}
                height={250}
                alt="Picture of the menu"
              />
            </Link>
          </div>
          <div className={`${styles.item_container} flex-item`}>
            <Link href="/pages/lyrics">Lyrics</Link>
          </div>
          <div className={`${styles.item_container} flex-item`}>
            <Link href="/pages/lyrics">Orange Catcher</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
