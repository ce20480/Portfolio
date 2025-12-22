import styles from "./Hero.module.css";

export function HeroContent() {
  return (
    <div className={styles.content}>
      <h1 className={styles.headline}>
        AARON
        <br />
        VINOD
      </h1>
      <p className={styles.role}>Founder & Engineer</p>
      <p className={styles.subtitle}>
        Building products end-to-end — from React Native to AWS infrastructure.
      </p>
    </div>
  );
}
