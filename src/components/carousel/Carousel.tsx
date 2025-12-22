"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Carousel.module.css";

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
}

export function Carousel({ children, className }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update active index on scroll
  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const slideWidth = container.offsetWidth;
    const newIndex = Math.round(scrollLeft / slideWidth);

    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < children.length) {
      setActiveIndex(newIndex);
    }
  };

  // Scroll to slide when clicking indicator
  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return;
    const slideWidth = containerRef.current.offsetWidth;
    containerRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  // Set up scroll listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeIndex, children.length]);

  return (
    <div className={`${styles.carousel} ${className || ""}`}>
      <div
        ref={containerRef}
        className={styles.track}
        aria-roledescription="carousel"
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={styles.slide}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${children.length}`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Indicator dots */}
      {children.length > 1 && (
        <div className={styles.indicators} role="tablist">
          {children.map((_, index) => (
            <button
              key={index}
              className={styles.dot}
              data-active={index === activeIndex}
              onClick={() => scrollToSlide(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
