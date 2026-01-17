import styles from "@/components/hero/Hero.module.css";

export interface CodeSnippet {
  filename: string;
  content: React.ReactNode;
}

export const codeSnippets: CodeSnippet[] = [
  // ===== PERSONAL/SPORTS =====

  // 1. Badminton Discovery (Python)
  {
    filename: "pivot.py",
    content: (
      <>
        <span className={styles.comment}>{"# best pivot of my life"}</span>
        <br />
        <span className={styles.keyword}>try</span>:
        <br />
        {"    "}
        <span className={styles.variable}>join_football_team</span>()
        <br />
        <span className={styles.keyword}>except</span>{" "}
        <span className={styles.variable}>COVID</span>:
        <br />
        {"    "}
        <span className={styles.variable}>discover_badminton</span>()
      </>
    ),
  },

  // 2. Cambridge United Throwback (TypeScript)
  {
    filename: "hunger.tsx",
    content: (
      <>
        <span className={styles.comment}>{"// year 6: cambridge united"}</span>
        <br />
        <span className={styles.comment}>{"// year 26: still got that drive"}</span>
        <br />
        <span className={styles.keyword}>const</span>{" "}
        <span className={styles.variable}>hunger</span>{" "}
        <span className={styles.operator}>=</span>{" "}
        <span className={styles.keyword}>Infinity</span>;
      </>
    ),
  },

  // 3. Night Owl Struggle (Python)
  {
    filename: "nights.py",
    content: (
      <>
        <span className={styles.comment}>{"# uk mornings are brutal"}</span>
        <br />
        <span className={styles.keyword}>while</span>{" "}
        <span className={styles.keyword}>not</span>{" "}
        <span className={styles.variable}>sunrise</span>:
        <br />
        {"    "}
        <span className={styles.variable}>build</span>()
        <br />
        {"    "}
        <span className={styles.variable}>ship</span>()
      </>
    ),
  },

  // 4. Hydration Gang (TypeScript)
  {
    filename: "fuel.tsx",
    content: (
      <>
        <span className={styles.keyword}>const</span>{" "}
        <span className={styles.variable}>fuel</span>{" "}
        <span className={styles.operator}>=</span> {"{"}
        <br />
        {"  "}
        <span className={styles.property}>coffee</span>:{" "}
        <span className={styles.keyword}>false</span>,
        <br />
        {"  "}
        <span className={styles.property}>water</span>:{" "}
        <span className={styles.keyword}>true</span>,
        <br />
        {"}"};{" "}
        <span className={styles.comment}>{"// pure willpower"}</span>
      </>
    ),
  },

  // ===== WORK STYLE =====

  // 5. Hyperfocus Mode (TypeScript)
  {
    filename: "focus.tsx",
    content: (
      <>
        <span className={styles.comment}>{"// TODO: eat lunch"}</span>
        <br />
        <span className={styles.comment}>{"// TODO: reply to texts"}</span>
        <br />
        <span className={styles.keyword}>await</span>{" "}
        <span className={styles.variable}>build</span>();
        <br />
        <span className={styles.comment}>{"// 8 hours later..."}</span>
      </>
    ),
  },

  // 6. Game Character (Python)
  {
    filename: "levelup.py",
    content: (
      <>
        <span className={styles.variable}>aaron</span>.
        <span className={styles.variable}>level_up</span>(
        <span className={styles.string}>"badminton"</span>)
        <br />
        <span className={styles.variable}>aaron</span>.
        <span className={styles.variable}>level_up</span>(
        <span className={styles.string}>"startups"</span>)
        <br />
        <span className={styles.variable}>aaron</span>.
        <span className={styles.variable}>level_up</span>(
        <span className={styles.string}>"ML"</span>)
        <br />
        <span className={styles.comment}>{"# no cap on skills"}</span>
      </>
    ),
  },

  // 7. Late to Everything (C++)
  {
    filename: "oops.cpp",
    content: (
      <>
        <span className={styles.keyword}>if</span> (
        <span className={styles.variable}>locked_in</span>) {"{"}
        <br />
        {"  "}
        <span className={styles.variable}>time</span>{" "}
        <span className={styles.operator}>=</span>{" "}
        <span className={styles.keyword}>nullptr</span>;
        <br />
        {"  "}
        <span className={styles.comment}>{"// oops"}</span>
        <br />
        {"}"}
      </>
    ),
  },

  // 8. The Grind Loop (TypeScript)
  {
    filename: "grind.tsx",
    content: (
      <>
        <span className={styles.comment}>{"// optimizing for outcomes"}</span>
        <br />
        <span className={styles.keyword}>while</span> (
        <span className={styles.variable}>awake</span>) {"{"}
        <br />
        {"  "}
        <span className={styles.variable}>learn</span>();
        <br />
        {"  "}
        <span className={styles.variable}>build</span>();
        <br />
        {"  "}
        <span className={styles.variable}>ship</span>();
        <br />
        {"}"}
      </>
    ),
  },

  // ===== PHILOSOPHY =====

  // 9. Change It or Choose It (Python)
  {
    filename: "truth.py",
    content: (
      <>
        <span className={styles.keyword}>if</span>{" "}
        <span className={styles.keyword}>not</span>{" "}
        <span className={styles.variable}>changing</span>(
        <span className={styles.variable}>habit</span>):
        <br />
        {"    "}
        <span className={styles.comment}>{"# you're choosing it"}</span>
        <br />
        {"    "}
        <span className={styles.keyword}>pass</span>
      </>
    ),
  },

  // 10. Conversation Collector (TypeScript)
  {
    filename: "wisdom.tsx",
    content: (
      <>
        <span className={styles.keyword}>for</span> (
        <span className={styles.keyword}>const</span>{" "}
        <span className={styles.variable}>person</span>{" "}
        <span className={styles.keyword}>of</span>{" "}
        <span className={styles.variable}>everyone</span>) {"{"}
        <br />
        {"  "}
        <span className={styles.variable}>wisdom</span>.
        <span className={styles.variable}>push</span>(
        <span className={styles.variable}>person</span>.
        <span className={styles.property}>story</span>);
        <br />
        {"}"}
        <br />
        <span className={styles.comment}>{"// maximize time on earth"}</span>
      </>
    ),
  },

  // 11. Freedom (C++)
  {
    filename: "freedom.cpp",
    content: (
      <>
        <span className={styles.keyword}>const</span>{" "}
        <span className={styles.keyword}>char</span>*{" "}
        <span className={styles.variable}>boss</span>{" "}
        <span className={styles.operator}>=</span>{" "}
        <span className={styles.keyword}>nullptr</span>;
        <br />
        <span className={styles.comment}>{"// by design"}</span>
      </>
    ),
  },

  // 12. Impact Driven (Python)
  {
    filename: "impact.py",
    content: (
      <>
        <span className={styles.keyword}>while</span>{" "}
        <span className={styles.variable}>building</span>:
        <br />
        {"    "}
        <span className={styles.keyword}>if</span>{" "}
        <span className={styles.variable}>users</span>.
        <span className={styles.property}>happy</span>:
        <br />
        {"        "}
        <span className={styles.variable}>dopamine</span>{" "}
        <span className={styles.operator}>+=</span> 1
      </>
    ),
  },
];
