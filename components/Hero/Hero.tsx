import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageContainer}>
        <Image
          className={styles.heroImage}
          src="/images/landing-hero.jpg"
          layout="fill"
          objectFit="none"
          alt="le pressing"
        />
      </div>
      <h1 className={styles.heroText}>Dry Cleaning</h1>
    </section>
  );
}
