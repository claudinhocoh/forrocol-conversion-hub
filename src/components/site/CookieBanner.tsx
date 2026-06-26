import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "forrocol-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl border border-white/10 bg-ink/95 p-5 text-sm text-white shadow-2xl backdrop-blur md:flex-row md:items-center md:gap-6">
        <p className="flex-1 leading-relaxed text-white/85">
          A Forrocol utiliza cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar conteúdos e anúncios.
          Ao continuar navegando, você concorda com nossa{" "}
          <Link to="/privacidade" className="font-semibold text-gold underline-offset-2 hover:underline">
            Política de Privacidade
          </Link>{" "}
          e{" "}
          <Link to="/termos" className="font-semibold text-gold underline-offset-2 hover:underline">
            Termos de Uso
          </Link>.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-gold-deep"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
