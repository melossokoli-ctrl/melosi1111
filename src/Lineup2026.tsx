import { Facebook, Instagram } from "lucide-react";
import { FACEBOOK_URL, INSTAGRAM_URL, lineup2026 } from "./data";

export default function Lineup2026() {
  return (
    <section id="lineup" className="py-24 px-5 relative">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-3xl mx-auto relative">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-8 bg-primary" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary">
            Lineup 2026 · Hot Edition
          </span>
        </div>
        <h2 className="font-display text-5xl sm:text-7xl uppercase italic tracking-tight">
          Artistët
        </h2>

        <div className="mt-10 flex flex-row items-stretch justify-center gap-3 sm:gap-4">
          {lineup2026.map((artist) => (
            <figure
              key={artist.name}
              className="lineup-poster group overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
            >
              <img
                src={artist.image}
                alt={`${artist.name} — ChilliFestë 2026`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto group-hover:scale-[1.02] transition duration-500"
              />
            </figure>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:scale-105 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <Instagram size={16} aria-hidden /> @chillifeste
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/50 text-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/10 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <Facebook size={16} aria-hidden /> chillifeste
          </a>
        </div>
      </div>
    </section>
  );
}
