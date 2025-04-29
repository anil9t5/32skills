import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <br />
        <br />
        <h1 style={{ fontFamily: "var(--font-dynapuff), cursive" }}>
          anilhitang
        </h1>
        <p>Try out some random fun stuff</p>
      </header>
      <div className="container">
        <br />
        <br />
        <div className="flex-container text-align-center">
          <div className={`${styles.item_container} flex-item`}>
            <Link href="/pages/jokes">
              <Image
                src="/jokes.png"
                width={600}
                height={300}
                alt="Picture of the menu"
              />
              <h4>Jokes</h4>
            </Link>
          </div>
          <div className={`${styles.item_container} flex-item`}>
            <Link href="/pages/lyrics">
              <Image
                src="/lyrics-cover.png"
                width={600}
                height={300}
                alt="Picture of the menu"
              />
              <h4>Lyrics Finder</h4>
            </Link>
          </div>
          <div className={`${styles.item_container} flex-item`}>
            <Link href="/pages/paintings">
              <Image
                src="/orange-cover.png"
                width={600}
                height={300}
                alt="Picture of the menu"
              />
              <h4>Paint</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
