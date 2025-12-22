import { HeroSection } from "@/components/hero";
import { BackgroundCard, SocialCard } from "@/components/cards";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />

      {/* Cards Section */}
      <section className={styles.cardsSection} aria-label="About me">
        <div className={styles.cardsContainer}>
          <BackgroundCard />
          <SocialCard />
        </div>
      </section>

      {/* Footer will be added here */}
      {/* <Footer /> */}
    </main>
  );
}
