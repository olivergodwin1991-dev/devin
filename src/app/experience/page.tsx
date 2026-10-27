import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/ui";
import { experience } from "@/content/site";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="A decade of net-new growth and team leadership"
        intro="Progressive commercial roles across Datadog, Splunk, and Dell Technologies — consistently exceeding target and building the teams and territories that deliver it."
      />

      <Container className="py-16 md:py-24">
        <div className="relative border-l border-line pl-8">
          {experience.map((role, i) => (
            <div key={`${role.company}-${i}`} className="relative mb-14 last:mb-0">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h2 className="text-xl font-semibold text-ink">{role.title}</h2>
                <span className="text-sm text-ink-soft">{role.period}</span>
              </div>
              <p className="mt-1 font-medium text-accent">
                {role.company}
                {role.location ? ` · ${role.location}` : ""}
              </p>
              <p className="mt-3 max-w-3xl text-ink-soft">{role.summary}</p>
              {role.achievements.length > 0 && (
                <ul className="mt-4 max-w-3xl space-y-2">
                  {role.achievements.map((a) => (
                    <li key={a} className="flex gap-3 text-ink-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {a}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
