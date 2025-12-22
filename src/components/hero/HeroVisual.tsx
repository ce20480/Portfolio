import styles from "./Hero.module.css";

export function HeroVisual() {
  return (
    <div className={styles.visual}>
      {/* Terminal/Code mockup */}
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalDots}>
            <span className={styles.dot} data-color="red" />
            <span className={styles.dot} data-color="yellow" />
            <span className={styles.dot} data-color="green" />
          </div>
          <span className={styles.terminalTitle}>portfolio.tsx</span>
        </div>
        <div className={styles.terminalBody}>
          <code className={styles.code}>
            <span className={styles.keyword}>const</span>{" "}
            <span className={styles.variable}>developer</span>{" "}
            <span className={styles.operator}>=</span> {"{"}
            <br />
            {"  "}
            <span className={styles.property}>name</span>:{" "}
            <span className={styles.string}>&quot;Aaron Vinod&quot;</span>,
            <br />
            {"  "}
            <span className={styles.property}>role</span>:{" "}
            <span className={styles.string}>&quot;Full-Stack Developer&quot;</span>,
            <br />
            {"  "}
            <span className={styles.property}>skills</span>: [
            <br />
            {"    "}
            <span className={styles.string}>&quot;React&quot;</span>,{" "}
            <span className={styles.string}>&quot;TypeScript&quot;</span>,
            <br />
            {"    "}
            <span className={styles.string}>&quot;Node.js&quot;</span>,{" "}
            <span className={styles.string}>&quot;Cloud&quot;</span>
            <br />
            {"  "}],
            <br />
            {"  "}
            <span className={styles.property}>passion</span>:{" "}
            <span className={styles.string}>&quot;Building things&quot;</span>
            <br />
            {"}"};
            <br />
            <br />
            <span className={styles.keyword}>export default</span> developer;
            <span className={styles.cursor}>|</span>
          </code>
        </div>
      </div>
    </div>
  );
}
