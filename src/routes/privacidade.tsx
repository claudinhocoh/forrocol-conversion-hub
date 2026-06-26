import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import FloatingWA from "@/components/site/FloatingWA";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Forrocol" },
      { name: "description", content: "Política de Privacidade da Forrocol: como coletamos, utilizamos e protegemos seus dados pessoais." },
      { property: "og:title", content: "Política de Privacidade | Forrocol" },
      { property: "og:description", content: "Saiba como a Forrocol coleta, utiliza e protege seus dados pessoais." },
      { property: "og:url", content: "/privacidade" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="py-16 md:py-24">
        <div className="container-x mx-auto max-w-3xl">
          <span className="eyebrow">Forrocol</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">Política de Privacidade</h1>
          <p className="mt-3 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

          <div className="prose mt-10 max-w-none space-y-6 text-base leading-relaxed text-foreground/90">
            <p>
              A <strong>Forrocol</strong> ("nós", "nosso") respeita sua privacidade e está comprometida em proteger os dados pessoais
              coletados por meio deste site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
            </p>

            <h2 className="text-2xl font-bold">1. Dados que coletamos</h2>
            <p>Podemos coletar as seguintes informações:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Dados fornecidos voluntariamente em formulários de contato e orçamento (nome, telefone, e-mail e mensagem);</li>
              <li>Dados de navegação coletados automaticamente, como endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e origem do acesso;</li>
              <li>Cookies e tecnologias semelhantes utilizados para análise de tráfego e personalização de conteúdo.</li>
            </ul>

            <h2 className="text-2xl font-bold">2. Como utilizamos seus dados</h2>
            <p>Utilizamos os dados coletados para:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Responder a solicitações de contato e orçamento;</li>
              <li>Melhorar a experiência de navegação no site;</li>
              <li>Analisar o desempenho do site e de campanhas de marketing;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2 className="text-2xl font-bold">3. Compartilhamento de dados</h2>
            <p>
              A Forrocol não comercializa seus dados pessoais. Podemos compartilhar informações com prestadores de serviços essenciais ao
              funcionamento do site, como Google (Analytics, Ads e Tag Manager) e Meta (Facebook/Instagram), sempre respeitando as políticas
              de privacidade dessas plataformas, e com autoridades públicas quando exigido por lei.
            </p>

            <h2 className="text-2xl font-bold">4. Cookies</h2>
            <p>
              Utilizamos cookies próprios e de terceiros para análise de tráfego, métricas de desempenho e veiculação de anúncios.
              Você pode desativá-los a qualquer momento nas configurações do seu navegador. A desativação pode afetar funcionalidades do site.
            </p>

            <h2 className="text-2xl font-bold">5. Seus direitos</h2>
            <p>Conforme a LGPD, você tem o direito de:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Confirmar a existência de tratamento dos seus dados;</li>
              <li>Acessar, corrigir, atualizar ou solicitar a exclusão dos seus dados;</li>
              <li>Revogar o consentimento dado anteriormente;</li>
              <li>Solicitar a portabilidade dos dados.</li>
            </ul>

            <h2 className="text-2xl font-bold">6. Segurança</h2>
            <p>
              Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, perda, alteração ou destruição.
            </p>

            <h2 className="text-2xl font-bold">7. Alterações nesta política</h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você consulte esta página regularmente para se manter informado.
            </p>

            <h2 className="text-2xl font-bold">8. Contato</h2>
            <p>
              Para dúvidas ou solicitações relacionadas aos seus dados pessoais, entre em contato:<br />
              <strong>Forrocol</strong><br />
              R. Cel. Procópio, 316 - Inconfidentes, Contagem/MG, 32260-040<br />
              Telefone: (31) 3368-5600 | WhatsApp: (31) 9 9580-5600
            </p>

            <div className="pt-6">
              <Link to="/" className="text-sm font-semibold text-ink underline underline-offset-4 hover:text-gold">
                ← Voltar para a página inicial
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FloatingWA />
    </div>
  );
}
