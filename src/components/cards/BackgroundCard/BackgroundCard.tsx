"use client";

import { useState } from "react";
import { ExpandableCard } from "../ExpandableCard";
import { Timeline } from "./Timeline";
import { backgroundData } from "@/data/background";
import styles from "./BackgroundCard.module.css";

export function BackgroundCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapsedPreview = (
    <>
      <p className={styles.headline}>{backgroundData.headline}</p>
      <p className={styles.subheadline}>{backgroundData.subheadline}</p>
      <div className={styles.miniTimeline}>
        <span className={styles.miniDot} />
        <span className={styles.miniLine} />
        <span className={styles.miniDot} />
        <span className={styles.miniLine} />
        <span className={styles.miniDot} />
      </div>
    </>
  );

  return (
    <ExpandableCard
      title="BACKGROUND"
      isExpanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
      collapsedPreview={collapsedPreview}
      ariaLabel="Background section with education and experience"
    >
      <Timeline
        education={backgroundData.education}
        experience={backgroundData.experience}
      />
    </ExpandableCard>
  );
}
