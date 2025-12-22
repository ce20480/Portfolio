import styles from "./Hero.module.css";

export function HeroContent() {
  return (
    <div className={styles.content}>
      <h1 className={styles.headline}>
        AARON
        <br />
        VINOD
      </h1>
      <p className={styles.subtitle}>
        Full-Stack Developer crafting modern web experiences.
        <br />
        Building with React, TypeScript, and cloud technologies.
      </p>
      <div className={styles.ctas}>
        <a href="#projects" className={styles.btnPrimary}>
          View Projects
        </a>
        <a href="#contact" className={styles.btnSecondary}>
          Get in Touch
        </a>
      </div>
    </div>
  );
}
