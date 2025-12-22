"use client";

import { useState } from "react";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { HandDrawnLines } from "./HandDrawnLines";
import { Modal } from "@/components/modal";
import { Timeline } from "@/components/cards/BackgroundCard/Timeline";
import { ProjectsCard } from "@/components/cards/ProjectsCard";
import { backgroundData } from "@/data/background";
import { projects } from "@/data/projects";
import styles from "./Hero.module.css";

export function HeroSection() {
  const [isBackgroundModalOpen, setIsBackgroundModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.hero} aria-label="Hero section">
        {/* Decorative SVG lines */}
        <HandDrawnLines />

        <div className={styles.container}>
          {/* Left side: Content */}
          <HeroContent />

          {/* Right side: Visual/Mockup + Cards */}
          <HeroVisual
            onOpenBackground={() => setIsBackgroundModalOpen(true)}
            onOpenProjects={() => setIsProjectsModalOpen(true)}
          />
        </div>
      </section>

      {/* Background Modal */}
      <Modal
        isOpen={isBackgroundModalOpen}
        onClose={() => setIsBackgroundModalOpen(false)}
        title="BACKGROUND"
      >
        <Timeline
          education={backgroundData.education}
          experience={backgroundData.experience}
        />
      </Modal>

      {/* Projects Modal */}
      <Modal
        isOpen={isProjectsModalOpen}
        onClose={() => setIsProjectsModalOpen(false)}
        title="PROJECTS"
      >
        <ProjectsCard projects={projects} />
      </Modal>
    </>
  );
}
