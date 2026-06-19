import { useEffect, useState } from "react";
import { Phone, MessageCircle, Menu, X, WA_LINK } from "./icons";
import logo from "@/assets/forrocol-logo-transparent.png";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Empresa", href: "#empresa" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-ink text-xs text-white md:text-sm">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-2">
          <div className="flex items-center gap-4">
            <a href="tel:+553133685600" className="inline-flex items-center gap-2 transition-colors hover:text-gold">
              <Phone className="h-3.5 w-3.5" /> (31) 3368-5600
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-gold">
              <MessageCircle className="h-3.5 w-3.5" /> (31) 9 9580-5600
            </a>
          </div>
          <span className="hidden text-white/60 md:inline">Atendimento em Contagem, BH e região</span>
        </div>
      </div>

      <header className={`sticky top-0 z-40 transition-all ${scrolled ? "border-b border-border bg-white/95 shadow-sm backdrop-blur" : "bg-white"}`}>
        <div className="container-x flex items-center justify-between py-3 md:py-4">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Forrocol — 53 anos" className="h-11 w-auto md:h-14" />
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setActive(n.href)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === n.href ? "bg-gold/20 text-ink" : "text-foreground/80 hover:bg-muted hover:text-ink"
                }`}
              >
                {n.label}
              </a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa ml-3 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
              <MessageCircle className="h-4 w-4" /> Orçamento no WhatsApp
            </a>
          </nav>
          <button
            className="rounded-md border border-border p-2 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-white lg:hidden">
            <div className="container-x flex flex-col gap-1 py-3">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-semibold hover:bg-muted"
                >
                  {n.label}
                </a>
              ))}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
                <MessageCircle className="h-4 w-4" /> Orçamento no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
