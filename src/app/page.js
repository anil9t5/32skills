import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";



export default function Home() {
  return (
    <div className={styles.page}>
      <main><h1>Welcome to 32skills</h1></main>
      <Link href="/jokes">Jokes</Link>

    </div>
  );
}
