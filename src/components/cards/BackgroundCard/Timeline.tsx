import type { EducationEntry, ExperienceEntry } from "@/types";
import { TimelineItem } from "./TimelineItem";
import styles from "./BackgroundCard.module.css";

interface TimelineProps {
  education: EducationEntry[];
  experience: ExperienceEntry[];
}

export function Timeline({ education, experience }: TimelineProps) {
  return (
    <div className={styles.timeline}>
      {/* Education Section */}
      <h3 className={styles.sectionTitle}>Education</h3>
      {education.map((entry, index) => (
        <TimelineItem
          key={entry.id}
          title={entry.degree}
          subtitle={entry.institution}
          dateRange={entry.dateRange}
          description={entry.specialization}
          highlights={[
            ...(entry.grade ? [`Grade: ${entry.grade}`] : []),
            ...(entry.activities
              ? [`Activities: ${entry.activities.join(", ")}`]
              : []),
          ]}
          isCurrent={false}
          staggerIndex={index}
        />
      ))}

      {/* Experience Section */}
      <h3 className={styles.sectionTitle}>Experience</h3>
      {experience.map((entry, index) => (
        <TimelineItem
          key={entry.id}
          title={entry.role}
          subtitle={entry.company}
          dateRange={entry.dateRange}
          description={entry.description}
          highlights={entry.highlights}
          isCurrent={entry.isCurrent}
          staggerIndex={education.length + index}
        />
      ))}
    </div>
  );
}
