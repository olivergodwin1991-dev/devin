import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/ui";
import { plan } from "@/content/site";

export const metadata: Metadata = { title: "30 / 60 / 90 Day Plan" };

export default function PlanPage() {
  return (
    <>
      <PageHeader
        eyebrow="30 / 60 / 90"
        title="My first 90 days as a GTM leader at Cognition"
        intro="A phased plan to move from understanding the business, to aligning on a strategy, to executing and showing measurable momentum."
      />

      <Container className="py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {plan.map((phase, i) => (
            <div
              key={phase.window}
              className="flex flex-col rounded-2xl border border-line bg-surface p-7 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink">{phase.window}</p>
                  <p className="text-sm text-accent">{phase.theme}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {phase.objectives.map((o) => (
                  <li key={o} className="flex gap-3 text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {o}
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
