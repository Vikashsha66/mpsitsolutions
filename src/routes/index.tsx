import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.webp";
import { TypingText } from "@/components/TypingText";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maha Pradeep Singh — System & Network Administrator" },
      {
        name: "description",
        content:
          "Hi, I'm Maha Pradeep Singh — a System & Network Administrator specializing in Microsoft 365, Intune, Active Directory and enterprise IT infrastructure.",
      },
      { property: "og:title", content: "Maha Pradeep Singh — Portfolio" },
      {
        property: "og:description",
        content:
          "7+ years engineering reliable Microsoft 365 & Windows Server environments.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      <section className="relative mx-auto max-w-7xl px-6 lg:px-10 min-h-[calc(100vh-4rem)] flex items-center py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <Sparkles size={14} className="text-primary" />
              7+ Years Enterprise IT Experience
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Hello, I'm
              <br />
              <span className="text-gradient">Maha Pradeep</span>
              <br />
              Singh
            </h1>

            <div className="mt-6 text-xl md:text-2xl font-medium text-muted-foreground h-8">
              I'm a{" "}
              <TypingText
                words={[
                  "System Administrator",
                  "Microsoft 365 Specialist",
                  "Intune Administrator",
                  "IT Infrastructure Expert",
                ]}
              />
            </div>

            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              Dedicated System & Network Administrator with hands-on experience managing
              enterprise IT infrastructure, Microsoft 365 environments, Active Directory,
              Exchange, Intune and advanced systems troubleshooting.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1WSEl-k3aEs0h6-GSbZzx2HsuuhPtXiii/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-glow"
              >
                <Download size={16} /> Download Resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition"
              >
                <Mail size={16} /> Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-primary blur-2xl opacity-40 animate-pulse" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/40"
              />
              <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img
                  src={profileImg}
                  alt="Maha Pradeep Singh"
                  width={768}
                  height={768}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 glass rounded-2xl px-4 py-3 shadow-card-elevated">
                <div className="text-2xl font-bold text-gradient">7+</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Years Exp.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <ArrowDown size={20} />
        </motion.div>
      </section>
    </div>
  );
}
