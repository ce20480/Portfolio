"use client";

import styles from "./CompactCard.module.css";

interface CompactCardProps {
  title: string;
  subtitle: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

export function CompactCard({ title, subtitle, onClick, icon }: CompactCardProps) {
  return (
    <button
      className={styles.card}
      onClick={onClick}
      aria-label={`Open ${title} details`}
    >
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.arrow} aria-hidden="true">
        <ArrowIcon />
      </div>
    </button>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
