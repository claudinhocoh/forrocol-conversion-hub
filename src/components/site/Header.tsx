import { useEffect, useState } from "react";
import { Phone, MessageCircle, Menu, X, WA_LINK } from "./icons";
import logo from "@/assets/forrocol-logo.jpeg";

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
      {/* Top contact bar */}
      <div className="bg-ink text-white text-xs md:text-sm">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-2">
          <div className="flex items-center gap-4">
            <a href="tel:+553133685600" className="inline-flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="h-3.5 w-3.5" /> (31) 3368-5600
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold transition-colors">
              <MessageCircle className="h-3.5 w-3.5" /> (31) 9 9580-5600
            </a>
          </div>
          <span className="hidden md:inline text-white/60">Atendimento em Contagem, BH e região</span>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-40 transition-all ${scrolled ? "bg-white/95 backdrop-blur border-b border-border shadow-sm" : "bg-white"}`}>
        <div className="container-x flex items-center justify-between py-3 md:py-4">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Forrocol — 53 anos" className="h-11 md:h-14 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setActive(n.href)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active === n.href ? "text-ink bg-gold/20" : "text-foreground/80 hover:text-ink hover:bg-muted"
                }`}
              >
                {n.label}
              </a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="ml-3 btn-wa inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold">
              <MessageCircle className="h-4 w-4" /> Orçamento no WhatsApp
            </a>
          </nav>
          <button
            className="lg:hidden p-2 rounded-md border border-border"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="container-x py-3 flex flex-col gap-1">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm font-semibold hover:bg-muted"
                >
                  {n.label}
                </a>
              ))}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold">
                <MessageCircle className="h-4 w-4" /> Orçamento no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
