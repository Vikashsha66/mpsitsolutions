import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/Section";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maha Pradeep Singh" },
      {
        name: "description",
        content:
          "Get in touch with Maha Pradeep Singh — System & Network Administrator based in Udaipur, Rajasthan.",
      },
      { property: "og:title", content: "Contact — Maha Pradeep Singh" },
      { property: "og:description", content: "Let's connect and discuss your IT needs." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: payload,
      });
      if (error || (data as { error?: string })?.error) {
        throw new Error(error?.message ?? (data as { error?: string })?.error ?? "Failed");
      }
      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send message. Please try again or email directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section>
      <Toaster richColors />
      <SectionHeader
        eyebrow="Contact"
        title="Let's Build Something Reliable"
        description="Got a project, a tricky issue, or want to collaborate? Reach out — I respond quickly."
      />

      <div className="grid lg:grid-cols-5 gap-8">
        <FadeIn className="lg:col-span-2">
          <div className="glass rounded-3xl p-8 h-full shadow-card-elevated">
            <h3 className="text-xl font-bold mb-6">Get in touch</h3>

            <div className="space-y-5">
              <a
                href="mailto:mpsinghper@gmail.com"
                className="flex items-start gap-4 group"
              >
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <p className="font-medium group-hover:text-primary transition">
                    mpsinghper@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:+918529538071" className="flex items-start gap-4 group">
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Phone
                  </p>
                  <p className="font-medium group-hover:text-primary transition">
                    +91 85295 38071
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/maha-pradeep-singh"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    LinkedIn
                  </p>
                  <p className="font-medium group-hover:text-primary transition">
                    /in/maha-pradeep-singh
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/10 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Location
                  </p>
                  <p className="font-medium">Udaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="lg:col-span-3" delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="glass rounded-3xl p-8 shadow-card-elevated space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-xl bg-surface-elevated border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl bg-surface-elevated border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Subject
              </label>
              <input
                required
                name="subject"
                className="mt-2 w-full rounded-xl bg-surface-elevated border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={6}
                className="mt-2 w-full rounded-xl bg-surface-elevated border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                placeholder="Tell me about your project or question..."
              />
            </div>

            <button
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-glow disabled:opacity-60"
            >
              <Send size={16} /> {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </FadeIn>
      </div>
    </Section>
  );
}
