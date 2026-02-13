# Aaron Vinod - Portfolio Context

This file preserves important context for Claude Code sessions working on this portfolio.

---

## About Aaron

**Education:** MEng Engineering Mathematics, First Class - University of Bristol (2024)
**Location:** Cambridge, UK
**Current Role:** CTO & Technical Co-founder at LINQ (Sep 2025 - Present)

### Personality & Quirks
- Badminton lover (discovered at uni during COVID, dad played too)
- Cambridge United dev squad in Year 6 (football background)
- Night owl by necessity (UK mornings are brutal)
- Runs on water only - no coffee ("pure willpower")
- Hyperfocus mode - forgets to eat, loses track of time, late to things
- "Game character" mindset - believes you can level up any skill
- Philosophy: "If you don't change it, you're choosing it"
- Genuinely curious about people and conversations

### Motivations
- **Impact** - Build things people actually use
- **Freedom** - Own path, own boss
- **Learning** - Understanding how things work
- **Competition** - Hackathons, proving yourself

---

## Projects & Technical Experience

### LINQ (CTO, Sep 2025 - Present)
AI-powered professional networking platform, partnered with Simon Squibb. Team of 4 (solo technical founder).

**Infrastructure:**
- AWS: CloudFront → ALB → ECS Fargate (auto-scaling) → RDS PostgreSQL
- CI/CD: GitHub Actions → ECR → ECS
- Security: CloudFront origin validation, Security Groups restricting traffic to ALB, authenticated endpoints

**ML/AI:**
- Gemini embeddings (752D), achieving 80-90% match accuracy
- Chose Gemini over OpenAI for cost efficiency
- Groq LLM re-ranking for fast inference (<5s latency)
- Benchmarked embedding models on synthetic data, evaluated score distribution variance (0.6-0.8 range)

**Stack:** React Native + FastAPI + PostgreSQL, React Query for caching

### ScrollBuddy (Founder, Aug 2025 - Present)
Anti-doomscrolling iOS app shipped to App Store.
- 2M+ organic TikTok views through content-led growth
- First paying user within 48 hours
- Stack: React Native/Expo

### Encode Club Hackathon ($2.5K Winner, Feb 2025)
Sign language detection system.
- Pivoted from image-based CNN to coordinate-based neural network using Google MediaPipe
- 70% accuracy on ASL dataset using hand coordinate features
- Decentralized ML: Filecoin for model storage + Lilypad for distributed compute
- Demo: Next.js frontend + Python API

### thoughts2actions (Jan 2025)
Voice-to-structured-actions web app.
- Built in 7 days, concept to production
- Pipeline: audio → transcription → AI processing → searchable knowledge base
- Stack: Next.js + Vercel

### Aviini Ltd (Jul 2023 - Jan 2025)
E-commerce business.
- £25K profit at 25-35% margin over 18 months
- Built eBay/Etsy API integrations for automated revenue and order tracking

### MyGreenDoor (ML Engineer, Jan-Jun 2023)
Property retrofit recommendations for UK sustainability initiative.
- k-NN clustering with feature selection and hyperparameter tuning
- Evaluated feature subsets, iterated on k values and distance metrics
- Stack: Python, pandas, scikit-learn

---

## Portfolio Design Decisions

### Hero Section Terminal
- Shows **personality code snippets** (NOT name/role - that would be redundant)
- 12 snippets in `/src/data/codeSnippets.tsx` covering:
  - **Sports:** Badminton discovery, Cambridge United throwback
  - **Work style:** Hyperfocus mode, grind loop, late to everything, game character leveling
  - **Philosophy:** Change or choose it, conversation collector, freedom, impact driven
  - **Lifestyle:** Night owl, hydration gang (water only)
- Shuffle button (Lucide React `<Shuffle />` icon) to cycle through snippets
- Languages cycle: TypeScript (.tsx), Python (.py), C++ (.cpp)

### Desktop Layout (>768px)
- "AARON VINOD" headline: **VISIBLE**
- "Founder & Engineer" role: **HIDDEN** (redundant - terminal has this context)
- Subtitle: "Building products end-to-end: React Native to AWS infrastructure."

### Mobile Layout (≤768px)
- "AARON VINOD" headline: **VISIBLE** (responsive font: `clamp(2.5rem, 10vw, 4rem)`)
- Role: **HIDDEN**
- Terminal + cards stack vertically
- Visual section has `order: -1` (appears before text content)

### Social Links (all 6 shown)
| Platform | URL |
|----------|-----|
| GitHub | github.com/ce20480 |
| LinkedIn | linkedin.com/in/aaron-vinod-a80016243 |
| X (Twitter) | x.com/AviniLimited |
| YouTube | youtube.com/@aviini |
| Instagram | instagram.com/aviinilimited |
| TikTok | tiktok.com/@aviinilimited |

---

## Technical Stack

**Framework:** Next.js 16.1.0 (Turbopack, App Router)
**Language:** TypeScript
**Styling:** CSS Modules
**Deployment:** Vercel

### Key Files
| File | Purpose |
|------|---------|
| `/src/components/hero/HeroVisual.tsx` | Terminal + cards + social icons |
| `/src/components/hero/HeroContent.tsx` | Headline + subtitle |
| `/src/components/hero/Hero.module.css` | All hero styling + responsive breakpoints |
| `/src/data/codeSnippets.tsx` | 12 personality code snippets |
| `/src/data/socials.ts` | Social link URLs and metadata |
| `/src/types/index.ts` | TypeScript interfaces (SocialLink, Project, etc.) |

### Dependencies Added
- `lucide-react` - Shuffle icon for terminal
- `@vercel/analytics` - Analytics tracking

---

## Resume/CV Context

### Target Companies
Mid-size UK tech: Monzo, Revolut, Wise, Deliveroo, Checkout.com, Starling Bank, GoCardless, Paddle

### Key Skills
**Languages:** TypeScript, Python, SQL
**Frontend:** React Native/Expo, Next.js/React
**Backend:** FastAPI, Node.js, PostgreSQL, REST APIs
**Cloud & DevOps:** AWS (ECS Fargate, RDS, CloudFront, ALB), Docker, CI/CD (GitHub Actions), Vercel
**ML:** Vector embeddings, LLM integration (Groq, Gemini), scikit-learn, PyTorch, RAG, Computer Vision (MediaPipe)

### ATS Keywords to Include
CI/CD, GitHub Actions, Docker, REST APIs, PostgreSQL, RAG, Computer Vision, MediaPipe, Feature Engineering, Model Evaluation, Microservices

---

## Contact
- Email: aaronvinod25@gmail.com
- Phone: +44 7476 904065
- Portfolio: portfolio-zeta-ecru-53.vercel.app
