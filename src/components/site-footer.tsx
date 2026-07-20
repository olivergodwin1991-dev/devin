import Link from "next/link";
import { nav, profile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-soft">
            {profile.role} · {profile.location}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="text-ink-soft transition-colors hover:text-accent"
          >
            Email
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-6 py-4 text-xs text-ink-soft">
          © {new Date().getFullYear()} {profile.name}. Built for the {profile.targetCompany} interview process.
        </p>
      </div>
    </footer>
  );
}
