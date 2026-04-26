import { createFileRoute } from "@tanstack/react-router";
import { Award, BadgeCheck } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/Section";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Maha Pradeep Singh" },
      {
        name: "description",
        content:
          "Microsoft certifications: MD-102 Endpoint Administrator and AZ-800 Windows Server Hybrid Administrator.",
      },
      { property: "og:title", content: "Certifications — Maha Pradeep Singh" },
      {
        property: "og:description",
        content: "Microsoft certifications and credentials.",
      },
    ],
  }),
  component: CertsPage,
});

const certs = [
  {
    code: "MD-102",
    title: "Microsoft 365 Certified: Endpoint Administrator Associate",
    desc: "Plan, deploy and manage Windows endpoints, apps and identity using Intune and Microsoft 365.",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/MahaPradeepSingh-9883/59150E8C157C56AC?sharingId=ED57CDDC5AAE1276",
  },
  {
    code: "AZ-800",
    title: "Microsoft Certified: Windows Server Hybrid Administrator Associate",
    desc: "Configure and manage Windows Server on-premises, hybrid and Infrastructure-as-a-Service workloads.",
  },
];

function CertsPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Certifications"
        title="Recognized & Credentialed"
        description="Validated Microsoft expertise across endpoint and server hybrid administration."
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certs.map((c, i) => {
          const Wrapper: any = c.url ? "a" : "div";
          const wrapperProps = c.url
            ? { href: c.url, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <FadeIn key={c.code} delay={i * 0.1}>
              <Wrapper
                {...wrapperProps}
                className="block relative glass rounded-3xl p-8 overflow-hidden hover:border-primary/60 transition shadow-card-elevated h-full focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="absolute top-4 right-4 text-primary">
                  <BadgeCheck size={28} />
                </div>
                <div className="h-16 w-16 grid place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Award size={28} />
                </div>
                <p className="mt-5 text-xs font-semibold tracking-widest uppercase text-primary">
                  {c.code}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active credential
                </div>
              </Wrapper>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
