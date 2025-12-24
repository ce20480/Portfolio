'use client';

import { Problem } from '@/data/problems';
import styles from './Problem.module.css';

interface ProblemPanelProps {
  problem: Problem;
}

export function ProblemPanel({ problem }: ProblemPanelProps) {
  const difficultyClass = styles[problem.difficulty.toLowerCase() as keyof typeof styles];
  
  return (
    <div className={styles.problemPanel}>
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.tabActive}`}>Description</button>
        <button className={styles.tab}>Solutions</button>
        <button className={styles.tab}>Submissions</button>
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>{problem.title}</h1>
          <div className={styles.meta}>
            <span className={`${styles.difficulty} ${difficultyClass}`}>
              {problem.difficulty}
            </span>
            {problem.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div 
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: problem.description }}
        />

        {problem.examples.map((example, index) => (
          <div key={index} className={styles.example}>
            <div className={styles.exampleLabel}>Example {index + 1}:</div>
            <div className={styles.exampleContent}>
              <div><span className={styles.label}>Input:</span> {example.input}</div>
              <div><span className={styles.label}>Output:</span> {example.output}</div>
            </div>
            {example.explanation && (
              <div className={styles.explanation}>
                <strong>Explanation:</strong> {example.explanation}
              </div>
            )}
          </div>
        ))}

        <div className={styles.constraints}>
          <div className={styles.constraintsTitle}>Constraints:</div>
          <ul className={styles.constraintsList}>
            {problem.constraints.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
