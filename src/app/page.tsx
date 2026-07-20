import { Container, Card, ButtonLink } from "@/components/ui";
import {
  profile,
  metrics,
  highlights,
  strengths,
  whyCognition,
} from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <Container className="py-20 md:py-28">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {profile.availability}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-ink md:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">{profile.summary}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/plan">View my 30 / 60 / 90 plan</ButtonLink>
            <ButtonLink href="/gtm" variant="secondary">
              Go-to-market plan
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Get in touch
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Metrics */}
      <section className="border-b border-line">
        <Container className="grid grid-cols-2 gap-px overflow-hidden py-0 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="px-4 py-10 text-center md:px-6">
              <div className="text-2xl font-semibold text-ink md:text-3xl">{m.value}</div>
              <div className="mt-2 text-sm text-ink-soft">{m.label}</div>
            </div>
          ))}
        </Container>
      </section>

      {/* Highlights */}
      <section>
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            What I bring
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <Card key={h.title}>
                <h3 className="text-lg font-semibold text-ink">{h.title}</h3>
                <p className="mt-3 text-ink-soft">{h.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Cognition */}
      <section className="border-y border-line bg-surface">
        <Container className="py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Why {profile.targetCompany}
            </h2>
            <div>
              <p className="text-lg text-ink-soft">{whyCognition}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {strengths.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-background px-3 py-1 text-sm text-ink-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container className="py-16 md:py-24">
          <div className="rounded-2xl border border-line bg-ink px-8 py-12 text-center md:py-16">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Let&apos;s talk about scaling Devin&apos;s go-to-market.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Explore my experience, plans, and management approach — or reach out directly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/experience" variant="secondary">
                See my experience
              </ButtonLink>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent hover:text-white"
              >
                Email me
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
