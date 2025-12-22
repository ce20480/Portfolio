"use client";

import { useCallback, useId } from "react";
import styles from "./ExpandableCard.module.css";

interface ExpandableCardProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  collapsedPreview: React.ReactNode;
  children: React.ReactNode;
  ariaLabel: string;
}

export function ExpandableCard({
  title,
  isExpanded,
  onToggle,
  collapsedPreview,
  children,
  ariaLabel,
}: ExpandableCardProps) {
  const contentId = useId();
  const headerId = useId();

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onToggle();
      }
    },
    [onToggle]
  );

  return (
    <article
      className={styles.card}
      data-expanded={isExpanded}
      aria-label={ariaLabel}
    >
      {/* Header - clickable toggle */}
      <header
        id={headerId}
        className={styles.cardHeader}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-controls={contentId}
      >
        <span className={styles.cardTitle}>{title}</span>
        <ChevronIcon
          className={styles.expandIcon}
          data-expanded={isExpanded}
          aria-hidden="true"
        />
      </header>

      {/* Collapsed Preview - visible when collapsed */}
      {!isExpanded && (
        <div className={styles.collapsedPreview} aria-hidden={isExpanded}>
          {collapsedPreview}
        </div>
      )}

      {/* Expandable Content */}
      <div
        id={contentId}
        className={styles.expandableContent}
        data-expanded={isExpanded}
        role="region"
        aria-labelledby={headerId}
        aria-hidden={!isExpanded}
      >
        <div className={styles.expandableInner}>
          <div className={styles.expandedContent}>{children}</div>
        </div>
      </div>
    </article>
  );
}

function ChevronIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { "data-expanded"?: boolean }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
