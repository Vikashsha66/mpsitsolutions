import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/Section";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Maha Pradeep Singh" },
      {
        name: "description",
        content:
          "Career timeline: System & Network Administrator, Computer Lab Technician, Hardware Technician and more.",
      },
      { property: "og:title", content: "Experience — Maha Pradeep Singh" },
      { property: "og:description", content: "7+ years of professional IT experience." },
    ],
  }),
  component: ExperiencePage,
});

const timeline = [
  {
    role: "System & Network Administrator",
    company: "FBSPL, Udaipur",
    period: "June 2022 – Present",
    current: true,
  },
  {
    role: "Computer Lab Technician",
    company: "MITS, Jadan",
    period: "Jan 2022 – Jun 2022",
  },
  {
    role: "Computer Hardware Technician",
    company: "My Computer Sales & Service, Sojat",
    period: "Jan 2021 – Mar 2022",
  },
  {
    role: "Research Analyst",
    company: "Arcgate, Udaipur",
    period: "Jun 2019 – May 2020",
  },
  {
    role: "Server Operator",
    company: "Bhupal Nobles' University",
    period: "May 2018 – Apr 2019",
  },
];

function ExperiencePage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Experience"
        title="A Journey In Enterprise IT"
        description="From hardware to hybrid cloud — building expertise across every layer of IT."
      />

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:-translate-x-1/2" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <FadeIn key={item.role + i} delay={i * 0.08}>
              <div
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />

                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="glass rounded-2xl p-5 hover:border-primary/60 transition shadow-card-elevated">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 shrink-0 grid place-items-center rounded-xl bg-primary/10 text-primary">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <h3 className="font-bold leading-snug">{item.role}</h3>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {item.company}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs font-semibold text-primary">
                            {item.period}
                          </span>
                          {item.current && (
                            <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-emerald-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
