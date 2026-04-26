import { createFileRoute } from "@tanstack/react-router";
import {
  Cloud,
  Smartphone,
  Server,
  Shield,
  Globe,
  Headphones,
  Wrench,
  LifeBuoy,
} from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Maha Pradeep Singh" },
      {
        name: "description",
        content:
          "Microsoft 365, Intune, Active Directory, firewall, remote support and advanced troubleshooting services.",
      },
      { property: "og:title", content: "Services — Maha Pradeep Singh" },
      {
        property: "og:description",
        content: "Enterprise IT services I offer.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: LifeBuoy,
    title: "IT Support & Troubleshooting",
    desc: "I provide reliable 24/7 IT support and troubleshooting services to resolve system, network, and user-related issues, ensuring smooth operations and minimal downtime for your business.",
  },
  {
    icon: Cloud,
    title: "Microsoft 365 Administration",
    desc: "Tenant setup, user lifecycle, Exchange Online, SharePoint and Teams configuration.",
  },
  {
    icon: Smartphone,
    title: "Intune Device Management",
    desc: "Device enrollment, policies, Autopilot, app deployment and compliance.",
  },
  {
    icon: Server,
    title: "Active Directory & Windows Server",
    desc: "Domain services, Group Policy, DHCP, DNS and hybrid identity.",
  },
  {
    icon: Shield,
    title: "Firewall & VPN Configuration",
    desc: "Perimeter security, VPN tunnels, rule auditing and hardening.",
  },
  {
    icon: Globe,
    title: "Website Backend Support",
    desc: "WordPress, Hostinger and hosting platform troubleshooting & maintenance.",
  },
  {
    icon: Headphones,
    title: "Remote Technical Support",
    desc: "End-user assistance, ticket resolution and proactive monitoring.",
  },
  {
    icon: Wrench,
    title: "Advanced System Troubleshooting",
    desc: "Root cause analysis for complex infrastructure and endpoint issues.",
  },
];

function ServicesPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Services"
        title="What I Can Do For You"
        description="End-to-end IT services built around Microsoft technologies and enterprise reliability."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.06}>
            <div className="group glass rounded-3xl p-6 h-full hover:-translate-y-1 hover:border-primary/60 transition-all duration-300 shadow-card-elevated hover:shadow-glow">
              <div className="h-12 w-12 grid place-items-center rounded-2xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
