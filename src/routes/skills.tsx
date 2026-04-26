import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section, SectionHeader, FadeIn } from "@/components/Section";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Maha Pradeep Singh" },
      {
        name: "description",
        content:
          "Core skills: Microsoft 365, Intune, Active Directory, Windows Server, firewall & VPN, technical support.",
      },
      { property: "og:title", content: "Skills — Maha Pradeep Singh" },
      {
        property: "og:description",
        content: "Microsoft 365, Intune, AD, Windows Server, firewall & more.",
      },
    ],
  }),
  component: SkillsPage,
});

const coreSkills: { name: string; level: number }[] = [
  { name: "Microsoft 365 Administration", level: 95 },
  { name: "Microsoft Intune", level: 92 },
  { name: "Active Directory & Group Policy", level: 90 },
  { name: "Windows Server (2019/2022)", level: 88 },
  { name: "Advanced Troubleshooting", level: 94 },
  { name: "Firewall & VPN Configuration", level: 85 },
  { name: "Technical Support", level: 96 },
  { name: "Website Backend Technical Support", level: 82 },
];

const additionalSkills = [
  "Azure AD",
  "Exchange Online",
  "SharePoint & Teams",
  "Virtualization",
  "Windows Autopilot",
  "Endpoint Protection",
  "Remote Management Tools",
  "macOS Administration",
  "Linux (Ubuntu Basic)",
  "Network Monitoring Tools",
  "Wireshark, Nmap",
  "Ticketing Systems",
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">{name}</span>
          <span className="text-sm text-primary font-semibold">{level}%</span>
        </div>
        <div className="h-2 bg-surface-elevated rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay, ease: "easeOut" }}
            className="h-full bg-gradient-primary rounded-full"
          />
        </div>
      </div>
    </FadeIn>
  );
}

function SkillsPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Skills"
        title="Tools I Work With Every Day"
        description="A blend of enterprise Microsoft technologies, networking and hands-on troubleshooting."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="h-1.5 w-8 rounded-full bg-primary" /> Core Skills
          </h3>
          <div className="space-y-5">
            {coreSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.05} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="h-1.5 w-8 rounded-full bg-primary" /> Additional Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((s, i) => (
              <FadeIn key={s} delay={i * 0.04}>
                <span className="inline-flex items-center rounded-full glass px-4 py-2 text-sm hover:border-primary hover:text-primary transition cursor-default">
                  {s}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
