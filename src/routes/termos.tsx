import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import FloatingWA from "@/components/site/FloatingWA";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Forrocol" },
      { name: "description", content: "Termos de Uso do site da Forrocol: condições para navegação e utilização do conteúdo." },
      { property: "og:title", content: "Termos de Uso | Forrocol" },
      { property: "og:description", content: "Conheça as condições para navegação e utilização do site da Forrocol." },
      { property: "og:url", content: "/termos" },
    ],
    links: [{ rel: "canonical", href: "/termos" }],
  }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="py-16 md:py-24">
        <div className="container-x mx-auto max-w-3xl">
          <span className="eyebrow">Forrocol</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">Termos de Uso</h1>
          <p className="mt-3 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

          <div className="prose mt-10 max-w-none space-y-6 text-base leading-relaxed text-foreground/90">
            <p>
              Bem-vindo ao site da <strong>Forrocol</strong>. Ao acessar e utilizar este site, você concorda com os Termos de Uso descritos abaixo.
              Leia atentamente antes de continuar a navegação.
            </p>

            <h2 className="text-2xl font-bold">1. Objeto</h2>
            <p>
              Este site tem como finalidade apresentar os produtos e serviços oferecidos pela Forrocol, incluindo forros, pisos, divisórias, ripados,
              luminárias, portas sanfonadas, produtos termoacústicos e acessórios para obras, bem como permitir o contato com nossa equipe comercial.
            </p>

            <h2 className="text-2xl font-bold">2. Aceitação dos termos</h2>
            <p>
              A utilização deste site implica na aceitação plena e integral destes Termos de Uso. Caso não concorde com qualquer disposição, recomendamos
              que não utilize o site.
            </p>

            <h2 className="text-2xl font-bold">3. Uso do site</h2>
            <p>O usuário se compromete a:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Utilizar o site de forma ética, respeitando a legislação vigente;</li>
              <li>Fornecer informações verdadeiras em formulários de contato e orçamento;</li>
              <li>Não realizar atividades que possam comprometer a segurança, disponibilidade ou funcionamento do site;</li>
              <li>Não utilizar o conteúdo do site para fins ilícitos ou não autorizados.</li>
            </ul>

            <h2 className="text-2xl font-bold">4. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo deste site - incluindo textos, imagens, logotipos, ícones, layouts e marcas - é de propriedade da Forrocol ou de seus
              parceiros, protegido pela legislação de direitos autorais e propriedade industrial. É proibida a reprodução total ou parcial sem autorização
              prévia e por escrito.
            </p>

            <h2 className="text-2xl font-bold">5. Limitação de responsabilidade</h2>
            <p>
              A Forrocol se empenha em manter as informações deste site sempre atualizadas e corretas, mas não garante a ausência de erros, omissões ou
              imprecisões. Preços, prazos, disponibilidade de produtos e especificações técnicas podem sofrer alterações sem aviso prévio. As condições
              comerciais são confirmadas no momento do orçamento.
            </p>

            <h2 className="text-2xl font-bold">6. Links externos</h2>
            <p>
              Este site pode conter links para sites de terceiros. A Forrocol não se responsabiliza pelo conteúdo, políticas ou práticas desses sites,
              cabendo ao usuário avaliar suas próprias decisões ao acessá-los.
            </p>

            <h2 className="text-2xl font-bold">7. Privacidade</h2>
            <p>
              O tratamento de dados pessoais coletados por meio deste site segue a nossa{" "}
              <Link to="/privacidade" className="font-semibold text-ink underline underline-offset-2 hover:text-gold">
                Política de Privacidade
              </Link>.
            </p>

            <h2 className="text-2xl font-bold">8. Alterações</h2>
            <p>
              A Forrocol reserva-se o direito de alterar estes Termos de Uso a qualquer momento. Recomendamos a consulta periódica para conhecimento das
              versões atualizadas.
            </p>

            <h2 className="text-2xl font-bold">9. Legislação aplicável e foro</h2>
            <p>
              Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da Comarca de Contagem/MG para dirimir quaisquer controvérsias decorrentes
              da utilização deste site, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>

            <h2 className="text-2xl font-bold">10. Contato</h2>
            <p>
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
