import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#training", label: "Training" },
  { href: "#teams", label: "Teams" },
  { href: "#coaches", label: "Coaches" },
  { href: "#shop", label: "Shop" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/85 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-orange shadow-orange">
            <span className="font-display text-xl text-white">FC</span>
          </div>
          <span className="font-display text-xl tracking-wide text-white">FOCUS COURT</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-court-orange transition-smooth">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button variant="hero" size="sm" asChild><a href="#join">Join Now</a></Button>
        </div>
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-white/10 px-4 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-white/90 font-semibold uppercase text-sm tracking-wider">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild className="w-full"><a href="#join" onClick={() => setOpen(false)}>Join Now</a></Button>
        </div>
      )}
    </header>
  );
};
