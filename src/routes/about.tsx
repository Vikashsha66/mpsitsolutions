import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Award,
  Briefcase,
  Users,
  CloudUpload,
  ShieldCheck,
  Server,
  Network,
  Lock,
  Mail,
  Settings,
  Wifi,
  Globe,
  Eye,
  FileSearch,
  Wrench,
  KeyRound,
  Cog,
  FileText,
  LifeBuoy,
  Building2,
  GraduationCap as SchoolIcon,
  CloudCog,
  MonitorSmartphone,
  Server as ServerIcon,
  Target,
  Activity,
  Sparkles,
  HeartHandshake,
  Trophy,
  Rocket,
} from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maha Pradeep Singh" },
      {
        name: "description",
        content:
          "Learn about Maha Pradeep Singh — a System & Network Administrator with 7+ years of enterprise IT experience.",
      },
      { property: "og:title", content: "About Maha Pradeep Singh" },
      {
        property: "og:description",
        content: "Background, education and certifications.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="About Me"
        title="Designing Reliable IT, Not Just Systems"
        description="A passionate System & Network Administrator focused on building stable, secure and high-performing enterprise environments."
      />

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <FadeIn>
          <div className="glass rounded-3xl p-8 shadow-card-elevated">
            <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              System & Network Administrator with 7+ years of experience supporting
              enterprise IT environments. Experienced in Microsoft 365, Active
              Directory, Windows Server, and advanced troubleshooting. Proven ability
              to maintain reliable systems and deliver technical solutions across
              multiple industries including education, corporate and IT services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Passionate about learning new technologies and continuously improving
              IT processes to support business productivity.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={0.1}>
            <div className="glass rounded-3xl p-6 hover:border-primary/50 transition">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="font-semibold">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Bhupal Nobles' University, Udaipur
                  </p>
                  <p className="text-xs text-primary mt-1">2017 – 2020</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Link
              to="/certifications"
              className="block glass rounded-3xl p-6 hover:border-primary/50 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary/10 text-primary">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="font-semibold">Microsoft Certifications</h4>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• MD-102: Endpoint Administrator Associate</li>
                    <li>• AZ-800: Windows Server Hybrid Administrator Associate</li>
                  </ul>
                </div>
              </div>
            </Link>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Link
              to="/experience"
              className="block glass rounded-3xl p-6 hover:border-primary/50 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary/10 text-primary">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h4 className="font-semibold">Industries Served</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Education · Corporate · IT Services
                  </p>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* Experience Highlights / Metrics */}
      <FadeIn>
        <div className="mt-20 glass rounded-3xl p-8 md:p-10 shadow-card-elevated">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "7+", label: "Years Experience" },
              { value: "1000+", label: "Employees Supported" },
              { value: "150+", label: "Users Migrated" },
              { value: "Enterprise", label: "IT Environments Managed" },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-3xl md:text-5xl font-bold text-gradient">{m.value}</p>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Key Achievements */}
      <div className="mt-24">
        <SectionHeader
          eyebrow="Key Achievements"
          title="Delivering Measurable Impact"
          description="Tangible results from years of managing and modernizing enterprise IT environments."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Users, stat: "1000+", title: "Employees Supported", desc: "Managed enterprise IT infrastructure across multiple business units." },
            { icon: CloudUpload, stat: "150+", title: "Microsoft 365 Migrations", desc: "Migrated users seamlessly from On-Premises to Microsoft 365." },
            { icon: ShieldCheck, stat: "MDM", title: "Intune & BitLocker", desc: "Implemented Microsoft Intune MDM and BitLocker encryption at scale." },
            { icon: Server, stat: "AD/DHCP", title: "Server Environments", desc: "Designed and deployed Active Directory and DHCP server infrastructure." },
            { icon: Lock, stat: "Policy", title: "Security Compliance", desc: "Created and enforced compliance policies via Microsoft Intune." },
            { icon: Wrench, stat: "24/7 Support", title: "Enterprise IT Support & Troubleshooting", desc: "Delivered enterprise-level IT support and troubleshooting for environments supporting 1000+ users, resolving issues across Windows systems, Microsoft 365, networks, and endpoints to ensure secure and reliable IT operations." },
          ].map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/50 transition group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition">
                    <a.icon size={20} />
                  </div>
                  <p className="text-2xl font-bold text-gradient">{a.stat}</p>
                </div>
                <h4 className="font-semibold mb-1">{a.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-24">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Technologies I Work With"
          description="Tools and platforms I use to design, secure, and operate enterprise IT."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { icon: Mail, name: "Microsoft 365" },
            { icon: MonitorSmartphone, name: "Microsoft Intune" },
            { icon: CloudCog, name: "Azure Active Directory" },
            { icon: ServerIcon, name: "Windows Server" },
            { icon: Users, name: "Active Directory" },
            { icon: Lock, name: "BitLocker Encryption" },
            { icon: Mail, name: "Exchange Online" },
            { icon: Settings, name: "Group Policy (GPO)" },
            { icon: Network, name: "Networking & DHCP" },
            { icon: Globe, name: "WordPress & Hosting" },
            { icon: ShieldCheck, name: "Endpoint Security" },
            { icon: Eye, name: "Microsoft Purview" },
          ].map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.03}>
              <div className="glass rounded-xl p-4 flex items-center gap-3 hover:border-primary/50 hover:-translate-y-0.5 transition">
                <div className="h-9 w-9 grid place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <t.icon size={18} />
                </div>
                <span className="text-sm font-medium">{t.name}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Professional Strengths */}
      <div className="mt-24">
        <SectionHeader
          eyebrow="Strengths"
          title="Professional Strengths"
          description="Core competencies refined through years of hands-on enterprise IT work."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Server, title: "Enterprise IT Infrastructure Management" },
            { icon: ShieldCheck, title: "Endpoint Security Implementation" },
            { icon: FileSearch, title: "Troubleshooting & Root Cause Analysis" },
            { icon: KeyRound, title: "Identity & Access Management" },
            { icon: Cog, title: "System Deployment & Configuration" },
            { icon: FileText, title: "IT Documentation & Standardization" },
            { icon: LifeBuoy, title: "User Support & Issue Resolution" },
            { icon: Trophy, title: "Process Improvement & Automation" },
          ].map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.04}>
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/50 transition flex items-start gap-4">
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <s.icon size={20} />
                </div>
                <p className="font-semibold leading-snug pt-2">{s.title}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* My Approach */}
      <div className="mt-24">
        <SectionHeader
          eyebrow="My Approach"
          title="How I Build & Operate IT"
          description="A philosophy grounded in security, reliability, and people."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: "Security-First Design", desc: "Every system is built with security baked in from the start." },
            { icon: Activity, title: "Reliable & Scalable Planning", desc: "Infrastructure that grows with the business without compromise." },
            { icon: Target, title: "Proactive Monitoring", desc: "Detect and resolve issues before users ever notice them." },
            { icon: HeartHandshake, title: "User-Focused Support", desc: "Technology serves people — clear, patient, helpful service." },
            { icon: Rocket, title: "Continuous Learning", desc: "Always exploring new tools, certifications, and best practices." },
            { icon: Sparkles, title: "Clean Documentation", desc: "Standardized processes that outlast any single administrator." },
          ].map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/50 transition">
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/10 text-primary mb-4">
                  <a.icon size={20} />
                </div>
                <h4 className="font-semibold mb-2">{a.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Who I Help */}
      <div className="mt-24">
        <SectionHeader
          eyebrow="Who I Help"
          title="Built for Businesses That Depend on IT"
          description="Partnering with organizations that value secure, productive technology."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Building2, title: "Small & Medium Businesses", desc: "Right-sized IT that scales with your growth." },
            { icon: Briefcase, title: "Corporate Offices", desc: "Reliable infrastructure for distributed teams." },
            { icon: SchoolIcon, title: "Educational Institutions", desc: "Secure environments for staff and students." },
            { icon: CloudUpload, title: "Microsoft 365 Migrations", desc: "Smooth transitions from legacy on-premises systems." },
            { icon: MonitorSmartphone, title: "Secure Endpoint Management", desc: "Modern device control with Intune and BitLocker." },
            { icon: ServerIcon, title: "IT Infrastructure Support", desc: "Ongoing operations, monitoring, and improvement." },
          ].map((w, i) => (
            <FadeIn key={w.title} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/50 transition">
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/10 text-primary mb-4">
                  <w.icon size={20} />
                </div>
                <h4 className="font-semibold mb-2">{w.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Personal Note */}
      <FadeIn>
        <div className="mt-24 relative overflow-hidden rounded-3xl glass p-10 md:p-14 text-center shadow-card-elevated">
          <div className="absolute inset-0 bg-gradient-primary opacity-[0.06] pointer-events-none" />
          <div className="relative">
            <div className="h-12 w-12 mx-auto grid place-items-center rounded-xl bg-primary/10 text-primary mb-5">
              <Sparkles size={22} />
            </div>
            <p className="text-lg md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
              "I am passionate about building reliable, secure, and efficient IT systems.
              I continuously explore new technologies and best practices to ensure
              organizations stay <span className="text-gradient font-semibold">secure, productive, and future-ready</span>."
            </p>
            <p className="mt-5 text-sm tracking-[0.25em] uppercase text-primary">— Maha Pradeep Singh</p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
