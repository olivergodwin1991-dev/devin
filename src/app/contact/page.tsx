import type { Metadata } from "next";
import { Container, PageHeader, Card } from "@/components/ui";
import { profile } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    profile.phone
      ? { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` }
      : null,
    profile.linkedin
      ? { label: "LinkedIn", value: "View profile", href: profile.linkedin }
      : null,
    { label: "Location", value: profile.location, href: null },
  ].filter((x): x is { label: string; value: string; href: string | null } => Boolean(x));

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        intro={`${profile.availability}. The fastest way to reach me is email — I'd welcome a conversation about the GTM role at ${profile.targetCompany}.`}
      />

      <Container className="py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <Card key={item.label}>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-2 block text-lg text-ink hover:text-accent"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 text-lg text-ink">{item.value}</p>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent(
              "Re: GTM leadership at " + profile.targetCompany,
            )}`}
            className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Email {profile.name.split(" ")[0]}
          </a>
        </div>
      </Container>
    </>
  );
}
