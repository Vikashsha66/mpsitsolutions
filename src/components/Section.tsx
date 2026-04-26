import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28", className)}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-2xl mx-auto mb-14"
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg">{description}</p>
      )}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
