import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/Section";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Maha Pradeep Singh" },
      {
        name: "description",
        content:
          "Real-world enterprise IT projects: Microsoft 365 migration, Intune deployment, BitLocker, Active Directory & more.",
      },
      { property: "og:title", content: "Projects — Maha Pradeep Singh" },
      {
        property: "og:description",
        content: "Selected enterprise IT project highlights.",
      },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    tag: "Cloud Migration",
    title: "Microsoft 365 Migration & Exchange Online",
    desc: "Migrated users and mailboxes from On-Premises Exchange to Microsoft 365 with secure data transfer and minimal downtime.",
  },
  {
    tag: "Endpoint Management",
    title: "Microsoft Intune MDM Deployment",
    desc: "Implemented device enrollment, configuration profiles, application deployment and centralized monitoring.",
  },
  {
    tag: "Security",
    title: "BitLocker Implementation",
    desc: "Deployed BitLocker encryption policies via Intune ensuring recovery key backup and device security.",
  },
  {
    tag: "Web Support",
    title: "Website Backend Troubleshooting",
    desc: "Provided backend technical support for WordPress, Hostinger and other hosting platforms.",
  },
  {
    tag: "Infrastructure",
    title: "Active Directory & DHCP Server Deployment",
    desc: "Configured domain services, authentication systems and DHCP-based network management.",
  },
  {
    tag: "Compliance",
    title: "Intune Compliance Policy Implementation",
    desc: "Developed and enforced compliance policies to enhance device security and regulatory compliance.",
  },
  {
    tag: "Governance",
    title: "Microsoft Purview Implementation",
    desc: "Configured compliance and governance settings for enterprise data protection.",
  },
];

function ProjectsPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Projects"
        title="Selected Work & Implementations"
        description="A look at enterprise IT initiatives I've led or contributed to over the years."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.05}>
            <article className="group relative glass rounded-3xl p-6 h-full overflow-hidden hover:border-primary/60 transition shadow-card-elevated">
              <div
                className="absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 blur-3xl"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {p.tag}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
