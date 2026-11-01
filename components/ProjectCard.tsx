import React from "react";

interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectCardProps {
  title: string;
  badge: string;
  description: React.ReactNode;
  tech: string[];
  links: ProjectLink[];
  metrics?: { label: string; value: string }[];
  bullets?: string[];
}

export default function ProjectCard({
  title,
  badge,
  description,
  tech,
  links,
  metrics,
  bullets,
}: ProjectCardProps) {
  return (
    <article className="group space-y-3 bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 hover:border-zinc-700 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
        <h3 className="text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors flex items-center gap-2">
          {title}
        </h3>
        <span className="text-xs font-mono text-zinc-400 bg-zinc-800/60 px-2.5 py-0.5 rounded-full">
          {badge}
        </span>
      </div>

      <p className="text-zinc-300 text-sm leading-relaxed">{description}</p>

      {metrics && metrics.length > 0 && (
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-300 py-1">
          {metrics.map((m, i) => (
            <div key={i}>
              <span className="text-zinc-500">{m.label}:</span> {m.value}
            </div>
          ))}
        </div>
      )}

      {bullets && bullets.length > 0 && (
        <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-400 font-sans leading-relaxed pt-1">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      {tech.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-400 pt-2">
          <span className="text-zinc-500">Tech:</span>
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800 text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-3 font-mono text-xs border-t border-zinc-800/40 mt-3">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white underline underline-offset-4 decoration-zinc-700 flex items-center gap-1"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </article>
  );
}
