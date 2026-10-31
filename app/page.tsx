import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans antialiased selection:bg-zinc-800 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-zinc-800/60">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
          <Link href="#" className="font-mono font-medium text-zinc-100 hover:text-white transition-colors">
            
          </Link>
          <nav className="flex items-center gap-6 text-zinc-400 font-mono text-xs sm:text-sm">
            <a href="#about" className="hover:text-zinc-100 transition-colors">About</a>
            <a href="#work" className="hover:text-zinc-100 transition-colors">Work</a>
            <a href="#writing" className="hover:text-zinc-100 transition-colors">Notes</a>
            <a href="#experience" className="hover:text-zinc-100 transition-colors">Experience</a>
            <a href="#now" className="hover:text-zinc-100 transition-colors">Now</a>
            <a href="#contact" className="hover:text-zinc-100 transition-colors">Elsewhere</a>
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-3xl mx-auto px-6 py-16 sm:py-24 space-y-24">

        {/* Hero Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Ibraheem Gbolahan
              </h1>
              <p className="text-zinc-400 font-mono text-sm">
                Applied AI Engineer
              </p>
            </div>
            <div className="font-mono text-xs text-zinc-500 sm:text-right space-y-1">
              <div>Lagos, Nigeria</div>
              <div>6.5244° N, 3.3792° E</div>
              <div className="text-zinc-400">v0.2 / 2026</div>
            </div>
          </div>

          <p className="text-lg text-zinc-300 leading-relaxed font-light">
            &ldquo;I build things, learn difficult stuff, and explore better ways to think.&rdquo;
          </p>

          <p className="text-zinc-400 leading-relaxed">
            Focuses on production systems involving agentic workflows, retrieval mechanisms, and multimodal AI, with an eye toward future research engineering.
          </p>

          <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs text-zinc-400">
            <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">&#123;agents&#125;</span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">&#123;retrieval&#125;</span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">&#123;research&#125;</span>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-6 scroll-mt-24">
          <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-500">
            About
          </h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>
              <strong className="text-white font-medium">&ldquo;Engineer first, researcher in the making.&rdquo;</strong> Prioritizes real-world reliability, durable sessions, and error handling. Exploring low-resource LLMs and interpretability.
            </p>
            <p className="text-zinc-400 text-sm">
              B.Sc in Computer Science from Kwara state University (<span className="text-white font-mono">second class(upper division)</span>).
            </p>
          </div>
        </section>

        {/* Selected Projects Section */}
        <section id="work" className="space-y-10 scroll-mt-24">
          <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-500">
            Selected Projects
          </h2>

          <div className="space-y-12">
            <ProjectCard
              title="Lead Gen SaaS — Automated Prospecting & Outreach Platform"
              badge="Backend Platform · 2026"
              description="A modular backend platform that scrapes, enriches, and deduplicates business leads, then runs personalized outreach campaigns — from job submission through CSV export."
              // bullets={[
              //   "Built an async lead-generation pipeline across 5 Celery stages (scrape, normalize, deduplicate, persist, enrich) with per-step status and progress tracking, structured error capture, and cooperative cancellation checks between stages.",
              //   "Designed a concurrent enrichment service (asyncio.Semaphore, shared connection pool) to parallelize third-party API calls within rate limits, and a multi-key deduplication engine — place ID, domain, phone, name+location — that merges duplicate leads instead of discarding them.",
              //   "Built a 20-endpoint FastAPI backend with hashed refresh-token auth, per-device session tracking and revocation, and a Celery configuration (task_acks_late, prefetch_multiplier=1) tuned to avoid losing in-flight work on worker failure; async exports stream CSVs to S3-compatible storage."
              // ]}
              tech={["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "SQLModel", "Alembic", "Apify", "S3-compatible storage"]}
              links={[
                { label: "Repo", href: "https://github.com/gholahan/leadgen-saas" }
              ]}
            />

            <ProjectCard
              title="Schedly — AI Calendar Scheduling Agent"
              badge="AI Scheduling Agent · 2026"
              description="An AI-powered scheduling agent that connects directly to Google Calendar, allowing users to create, retrieve, update, delete, and query events through natural-language conversations. It checks calendar availability and helps users find suitable meeting slots based on their scheduling preferences."
              // bullets={[
              //   "Built a conversational AI scheduling agent using LangGraph for state machine and tool orchestration to create, retrieve, update, and delete Google Calendar events, check availability, and discover free slots.",
              //   "Implemented Google OAuth 2.0 with PKCE and Redis-backed, single-use OAuth state; securely stored encrypted calendar tokens in PostgreSQL and supported token refresh."
              // ]}
              tech={["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "LangGraph", "PostgreSQL", "Redis", "Google Calendar API"]}
              links={[
                { label: "Live", href: "https://schedly.vercel.app" },
                { label: "Repo", href: "https://github.com/gholahan/schedly" }
              ]}
            />

            <ProjectCard
              title="CampusIQ — AI-Powered Peer Tutoring Platform"
              badge="AI Peer Tutoring · 2026"
              description="Designed and built an AI-powered peer tutoring platform end-to-end — tutor discovery, session booking, and an AI academic assistant that uses RAG to help students answer questions and prepare for exams."
              // bullets={[
              //   "Architected a 40+ endpoint FastAPI backend with async DB connections, Supabase-JWT auth carrying custom role claims, and full RBAC across student, tutor, and admin roles.",
              //   "Designed a normalized PostgreSQL schema (15 tables) with JSONB availability columns, composite unique constraints, and cascade rules, versioned through a complete Alembic migration history."
              // ]}
              tech={["React", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL", "LangGraph", "WebSockets", "Redis", "pgvector"]}
              links={[
                { label: "Live", href: "https://campus-iq-edu.vercel.app" },
                { label: "Frontend", href: "https://github.com/gholahan/campusIQ_frontend" },
                { label: "Backend", href: "https://github.com/gholahan/campusIQ_backend" }
              ]}
            />
          </div>
        </section>

        {/* Writing / Notes Section
        <section id="writing" className="space-y-6 scroll-mt-24">
          <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-500">
            Notes & Writing
          </h2>
          <div className="space-y-6">
            <article className="group space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base font-medium text-white group-hover:text-zinc-200 transition-colors">
                  Building and deploying Parallax on Alibaba Cloud with Tailscale and Nginx
                </h3>
                <span className="text-xs font-mono text-zinc-500">Medium · July 2026</span>
              </div>
              <p className="text-zinc-400 text-sm">
                A technical breakdown of scaling multi-agent infrastructure across secure private subnets.
              </p>
            </article>

            <article className="group space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base font-medium text-white group-hover:text-zinc-200 transition-colors">
                  Self-hosting OpenClaw on GCP covering cloud networking, VPNs, and SSH hardening
                </h3>
                <span className="text-xs font-mono text-zinc-500">Medium · May 2026</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Step-by-step guide on securing production cloud instances against brute-force attacks.
              </p>
            </article>
          </div>
        </section> */}

        {/* Experience Section */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-500">
            Experience
          </h2>
          <div className="space-y-8 text-sm">
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="text-white font-medium">Frontend Developer Intern <span className="text-zinc-500 font-normal">at United Bank for Africa (UBA Group), Lagos, Nigeria</span></h3>
                <span className="text-xs font-mono text-zinc-500">Oct 2025 – Jan 2026</span>
              </div>
              <p className="text-zinc-400">Built UI components and integrated them with backend APIs for parts of the application, partnering with senior engineers across Agile sprints to scope and deliver features against real production requirements and deadlines.</p>
            </div>

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="text-white font-medium">Freelance Software Developer <span className="text-zinc-500 font-normal">at Self-Employed, Remote</span></h3>
                <span className="text-xs font-mono text-zinc-500">2024 – 2026</span>
              </div>
              <p className="text-zinc-400">Designed and integrated RESTful APIs with authentication, validation, and async data flow between frontend and backend.</p>
            </div>
          </div>
        </section>

        {/* Now Section */}
        <section id="now" className="space-y-6 scroll-mt-24">
          <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-500">
            Now
          </h2>
          <div className="space-y-3 text-zinc-300 text-sm leading-relaxed">
            <p className="text-xs font-mono text-zinc-500 mb-2">Updated August 2026</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>Building multi-agent systems.</li>
              <li>Exploring multilingual/low-resource LLMs, retrieval, and interpretability.</li>
              <li>Writing technical notes on applied AI systems.</li>
            </ul>
          </div>
        </section>

        {/* Elsewhere / Contact Section */}
        <section id="contact" className="space-y-6 scroll-mt-24 pb-12">
          <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-500">
            Elsewhere
          </h2>
          <div className="flex flex-wrap gap-6 font-mono text-sm">
            <a href="mailto:abdulazeezibraheem68@gmail.com" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 transition-colors">
              Email
            </a>
            <a href="https://github.com/gbolahan" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/abdulazeez-ibraheem/" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 transition-colors">
              LinkedIn
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 py-8 text-center text-xs font-mono text-zinc-500">
        <p>&copy; 2026 Ibraheem Gbolahan. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
