import styles from "./Hero.module.css";

export function HandDrawnLines() {
  return (
    <div className={styles.decorations} aria-hidden="true">
      {/* Curved line top-left */}
      <svg
        className={styles.lineTopLeft}
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 80 Q 50 10, 100 50 T 190 30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className={styles.animatedLine}
          style={{ "--line-length": "300" } as React.CSSProperties}
        />
      </svg>

      {/* Curved line bottom-right */}
      <svg
        className={styles.lineBottomRight}
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 20 Q 60 90, 110 50 T 190 70"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className={styles.animatedLine}
          style={{ "--line-length": "300", "--delay": "200ms" } as React.CSSProperties}
        />
      </svg>

      {/* Small star accent */}
      <svg
        className={styles.starAccent}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>

      {/* Circle accent */}
      <div className={styles.circleAccent} />
    </div>
  );
}
