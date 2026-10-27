import type { Metadata } from "next";
import { Container, PageHeader, Card } from "@/components/ui";
import { management } from "@/content/site";

export const metadata: Metadata = { title: "Management Style" };

export default function ManagementPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Highlights of my management style"
        intro={management.intro}
      />

      <Container className="py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {management.principles.map((p) => (
            <Card key={p.title}>
              <h2 className="text-lg font-semibold text-ink">{p.title}</h2>
              <p className="mt-3 text-ink-soft">{p.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-line bg-surface p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Coming soon
          </p>
          <p className="mx-auto mt-3 max-w-xl text-ink-soft">
            This page is a work in progress. I&apos;ll expand each principle with concrete
            stories, coaching examples, and how I build high-performing, inclusive teams.
          </p>
        </div>
      </Container>
    </>
  );
}
