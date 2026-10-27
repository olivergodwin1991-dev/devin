import type { Metadata } from "next";
import { Container, PageHeader, Card, ButtonLink } from "@/components/ui";
import {
  profile,
  experience,
  education,
  certifications,
  skills,
} from "@/content/site";

export const metadata: Metadata = { title: "CV" };

export default function CvPage() {
  return (
    <>
      <PageHeader
        eyebrow="Curriculum vitae"
        title="Curriculum Vitae"
        intro={profile.summary}
      />

      <Container className="py-12 md:py-16">
        {/* Contact / actions */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink-soft">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`} className="hover:text-accent">
              {profile.email}
            </a>
            {profile.phone && <span>{profile.phone}</span>}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                LinkedIn
              </a>
            )}
          </div>
          <div className="flex gap-3">
            {profile.resumeUrl ? (
              <ButtonLink href={profile.resumeUrl} external>
                Download PDF
              </ButtonLink>
            ) : null}
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.7fr_1fr] md:items-start">
          {/* Experience */}
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink">Experience</h2>
            <div className="mt-6 space-y-8">
              {experience.map((role, i) => (
                <div key={`${role.company}-${i}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-semibold text-ink">
                      {role.title} · <span className="text-accent">{role.company}</span>
                    </h3>
                    <span className="text-sm text-ink-soft">{role.period}</span>
                  </div>
                  {role.location && (
                    <p className="text-sm text-ink-soft">{role.location}</p>
                  )}
                  <p className="mt-2 text-ink-soft">{role.summary}</p>
                  {role.achievements.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {role.achievements.map((a) => (
                        <li key={a} className="flex gap-2 text-sm text-ink-soft">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
                Core skills
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-background px-3 py-1 text-sm text-ink-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
                Education
              </h2>
              <ul className="mt-4 space-y-3">
                {education.map((e) => (
                  <li key={e.institution}>
                    <p className="font-medium text-ink">{e.detail}</p>
                    <p className="text-sm text-ink-soft">{e.institution}</p>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
                Certifications
              </h2>
              <ul className="mt-4 space-y-2">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-ink-soft">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}
