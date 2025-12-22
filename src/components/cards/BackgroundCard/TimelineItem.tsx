import styles from "./BackgroundCard.module.css";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  dateRange: string;
  description?: string;
  highlights?: string[];
  isCurrent: boolean;
  staggerIndex: number;
}

export function TimelineItem({
  title,
  subtitle,
  dateRange,
  description,
  highlights,
  isCurrent,
  staggerIndex,
}: TimelineItemProps) {
  return (
    <div
      className={styles.timelineItem}
      data-current={isCurrent}
      style={{ "--stagger-delay": `${staggerIndex * 80}ms` } as React.CSSProperties}
    >
      <h4 className={styles.itemTitle}>{title}</h4>
      <p className={styles.itemSubtitle}>{subtitle}</p>
      <span className={styles.itemDate}>{dateRange}</span>
      {description && <p className={styles.itemDescription}>{description}</p>}
      {highlights && highlights.length > 0 && (
        <ul className={styles.itemHighlights}>
          {highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
