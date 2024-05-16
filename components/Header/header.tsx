import Image from "next/image";

import styles from "./header.module.css";
import { Link } from "next-view-transitions";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} href="/">
        <Image
          className={styles.image}
          style={{ objectFit: "cover" }}
          src="/thief-head.png"
          alt="Thiefaine"
          width={80}
          height={80}
          priority={true}
          quality={100}
        />
        <span className={styles.informations}>
          <h1 className={styles.title}>Thiefaine Simonnou</h1>
          <p className={styles.description}>développeur web</p>
        </span>
      </Link>
    </header>
  );
}
