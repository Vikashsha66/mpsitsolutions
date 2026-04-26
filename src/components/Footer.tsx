import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © 2026 Maha Pradeep Singh — All Rights Reserved
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/maha-pradeep-singh"
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:mpsinghper@gmail.com"
            className="h-9 w-9 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
