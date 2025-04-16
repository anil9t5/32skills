import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1>anilhitang</h1>
        <p>Try out some random fun stuff</p>
      </main>
      <Link href="/pages/jokes">Jokes</Link>
      <Link href="/pages/lyrics">Lyrics</Link>
    </div>
  );
}
