import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/ui";
import { gtm } from "@/content/site";

export const metadata: Metadata = { title: "Go-To-Market Plan" };

export default function GtmPage() {
  return (
    <>
      <PageHeader
        eyebrow="Go-to-market"
        title="A go-to-market point of view for Devin"
        intro={gtm.intro}
      />

      <Container className="py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {gtm.sections.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-line bg-surface p-7 shadow-sm"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-lg font-semibold text-ink">{s.title}</h2>
              </div>
              <p className="mt-3 text-ink-soft">{s.body}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
