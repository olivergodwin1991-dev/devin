import type { Metadata } from "next";
import { Container, PageHeader, Card, ButtonLink } from "@/components/ui";
import { profile, strengths, experience, whyCognition } from "@/content/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title={`${profile.name} — ${profile.role}`}
        intro={profile.summary}
      />

      <Container className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr] md:items-start">
          <div className="space-y-6 text-lg text-ink-soft">
            <p>
              I&apos;m a sales leader based in {profile.location}. Over the past decade
              I&apos;ve taken technical products — observability, security, data
              protection, and infrastructure — to market and built the teams that win
              net-new business against entrenched alternatives.
            </p>
            <p>
              Today I lead a commercial and mid-market sales team at Datadog across
              Australia and New Zealand, where we finished FY25 at 152% attainment and
              ranked in the top 5 of roughly 150 sales teams globally. Before that I
              founded a net-new territory at Splunk and carried enterprise quotas at
              Splunk and Dell Technologies.
            </p>
            <p>{whyCognition}</p>
          </div>

          <Card>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Signature strengths
            </h2>
            <ul className="mt-4 space-y-2">
              {strengths.map((s) => (
                <li key={s} className="flex gap-2 text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Career at a glance
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experience.slice(0, 6).map((r, i) => (
              <Card key={`${r.company}-${i}`}>
                <p className="text-sm text-ink-soft">{r.period}</p>
                <p className="mt-1 font-semibold text-ink">{r.title}</p>
                <p className="text-ink-soft">{r.company}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/experience">Full experience</ButtonLink>
            <ButtonLink href="/cv" variant="secondary">
              View CV
            </ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
