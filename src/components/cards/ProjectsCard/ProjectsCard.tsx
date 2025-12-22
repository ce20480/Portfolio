import type { Project } from "@/types";
import { ProjectItem } from "./ProjectItem";
import styles from "./ProjectsCard.module.css";

interface ProjectsCardProps {
  projects: Project[];
}

export function ProjectsCard({ projects }: ProjectsCardProps) {
  return (
    <div className={styles.projectsList}>
      {projects.map((project, index) => (
        <ProjectItem key={project.id} project={project} staggerIndex={index} />
      ))}
    </div>
  );
}
