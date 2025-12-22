import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { HandDrawnLines } from "./HandDrawnLines";
import styles from "./Hero.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero section">
      {/* Decorative SVG lines */}
      <HandDrawnLines />

      <div className={styles.container}>
        {/* Left side: Content */}
        <HeroContent />

        {/* Right side: Visual/Mockup */}
        <HeroVisual />
      </div>
    </section>
  );
}
