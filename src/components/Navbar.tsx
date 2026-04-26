import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-card-elevated" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-lg tracking-tight">
          <span className="text-gradient">MPS IT Solutions</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://drive.google.com/file/d/1WSEl-k3aEs0h6-GSbZzx2HsuuhPtXiii/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-glow"
        >
          Download CV
        </a>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1WSEl-k3aEs0h6-GSbZzx2HsuuhPtXiii/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
