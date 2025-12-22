import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "linq",
    title: "LINQ",
    tagline: "AI-Powered Professional Networking",
    description:
      "Built end-to-end: React Native + FastAPI + PostgreSQL on AWS (CloudFront, ALB, ECS Fargate, RDS). Implemented vector similarity matching with Gemini embeddings and LLM re-ranking.",
    technologies: ["React Native", "FastAPI", "AWS", "PostgreSQL", "AI/ML"],
    links: {
      live: "https://www.joinlinqapp.com",
      demo: "https://www.joinlinqapp.com/app",
    },
    featured: true,
  },
  {
    id: "scrollbuddy",
    title: "ScrollBuddy",
    tagline: "Break Free from the Feed",
    description:
      "Anti-doomscrolling app with accountability partner system. Live on the App Store. Partner controls app access instead of relying on willpower.",
    technologies: ["React Native", "App Store"],
    links: {
      live: "https://doomscrollr.vercel.app",
      demo: "https://doomscrollr.vercel.app/scrollbuddy",
    },
    featured: true,
  },
  {
    id: "sign-language-detection",
    title: "Sign Language Detection",
    tagline: "Decentralized ML Training",
    description:
      "CNN trained on ASL with decentralized storage (Akave/Filecoin) and compute (Lilypad). Users upload training data to improve the model.",
    technologies: ["Python", "CNN", "Web3", "Filecoin", "Lilypad"],
    links: {
      demo: "https://youtu.be/_Gkln8kPmD0",
    },
    award: "$2.5K Hackathon Winner",
    featured: true,
  },
  {
    id: "thoughts2actions",
    title: "thoughts2actions",
    tagline: "Turn Thoughts into Action",
    description:
      "Voice/video thought capture with AI processing. Transforms fleeting ideas into organized, searchable knowledge.",
    technologies: ["Next.js", "AI", "Mobile"],
    links: {
      live: "https://www.thoughts2action.com",
      demo: "https://youtu.be/0Wewk1EFAUY",
    },
    featured: false,
  },
];

export const projectsSummary = {
  headline: "4 Projects · $2.5K Winner",
  subheadline: "LINQ · ScrollBuddy · Sign Language · T2A",
};
