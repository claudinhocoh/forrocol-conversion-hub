import { MessageCircle, WA_LINK } from "./icons";

export default function FloatingWA() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 btn-wa inline-flex items-center gap-2 px-4 py-3 rounded-full font-semibold shadow-2xl"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Fale conosco</span>
    </a>
  );
}
