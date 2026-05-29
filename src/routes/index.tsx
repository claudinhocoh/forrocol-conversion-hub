import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import FloatingWA from "@/components/site/FloatingWA";
import {
  Phone, MessageCircle, Instagram, MapPin, Star, ArrowRight,
  Zap, Package, Wrench, Award, Building2, Home as HomeIcon, Briefcase,
  HardHat, Store, Factory, CheckCircle2, Clock, ShieldCheck,
  Sparkles, Handshake, Truck, Users,
  WA_LINK, waLink,
} from "@/components/site/icons";

import hero from "@/assets/hero-interior.jpg";
import pForros from "@/assets/prod-forros.jpg";
import pPisos from "@/assets/prod-pisos.jpg";
import pDivisorias from "@/assets/prod-divisorias.jpg";
import pRipados from "@/assets/prod-ripados.jpg";
import pLuminarias from "@/assets/prod-luminarias.jpg";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";
import gal4 from "@/assets/gal-4.jpg";
import logo from "@/assets/forrocol-logo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forrocol | Forros, Pisos, Divisórias e Ripados em Contagem e BH" },
      { name: "description", content: "Soluções em forros, pisos, divisórias, ripados, luminárias e acessórios para obras residenciais e comerciais. Atendimento em Contagem, Belo Horizonte e região. Solicite seu orçamento." },
      { property: "og:title", content: "Forrocol | Forros, Pisos, Divisórias e Ripados" },
      { property: "og:description", content: "Há mais de 50 anos oferecendo acabamento de qualidade para obras residenciais e comerciais em Contagem e BH." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const PRODUCTS = [
  { img: pForros, title: "Forros", desc: "Forros em PVC, mineral, acústicos e outras soluções para acabamento de teto com qualidade e praticidade.", cta: "Orçar forros no WhatsApp", msg: "Olá, vim pelo site da Forrocol e gostaria de orçar forros." },
  { img: pPisos, title: "Pisos", desc: "Pisos vinílicos, laminados, SPC, rodapés e soluções modernas para ambientes residenciais e comerciais.", cta: "Orçar pisos no WhatsApp", msg: "Olá, vim pelo site da Forrocol e gostaria de orçar pisos." },
  { img: pDivisorias, title: "Divisórias", desc: "Divisórias para escritórios, empresas e ambientes corporativos, unindo funcionalidade, organização e acabamento profissional.", cta: "Orçar divisórias no WhatsApp", msg: "Olá, vim pelo site da Forrocol e gostaria de orçar divisórias." },
  { img: pRipados, title: "Ripados", desc: "Painéis ripados para paredes, tetos e projetos decorativos, trazendo sofisticação e personalidade ao ambiente.", cta: "Orçar ripados no WhatsApp", msg: "Olá, vim pelo site da Forrocol e gostaria de orçar ripados." },
  { img: pLuminarias, title: "Luminárias e acessórios", desc: "Luminárias, perfis, cantoneiras e acessórios para instalação, acabamento e composição dos ambientes.", cta: "Falar com especialista", msg: "Olá, vim pelo site da Forrocol e quero falar com um especialista em luminárias e acessórios." },
];

const REVIEWS = [
  { text: "Lugar onde tem tudo, qualquer tipo de material para instaladores, fácil acesso e profissionais competentes.", name: "Cliente Google" },
  { text: "Ótimo atendimento, produtos de qualidade e entrega rápida. Recomendo!", name: "Cliente Google" },
  { text: "Atendimento excelente e equipe muito profissional. Ajudaram na escolha dos materiais para a obra.", name: "Cliente Google" },
  { text: "Empresa tradicional, com variedade de produtos e boas soluções para acabamento.", name: "Cliente Google" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Ambiente moderno com ripado, forro e iluminação embutida" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        </div>
        <div className="relative container-x py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <span className="eyebrow !bg-gold/20 !text-gold !border-gold/40">
              <Sparkles className="h-3.5 w-3.5" /> 53 anos de tradição em Contagem/MG
            </span>
            <h1 className="mt-6 text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Forros, Pisos, Divisórias e Ripados para Obras{" "}
              <span className="text-gold">Residenciais e Comerciais</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/85 max-w-xl leading-relaxed">
              Soluções completas em acabamento, com produtos de qualidade, atendimento especializado e instalação profissional em Contagem, Belo Horizonte e região.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold">
                <MessageCircle className="h-5 w-5" /> Solicitar orçamento pelo WhatsApp
              </a>
              <a href="#produtos" className="btn-outline-gold !text-white inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold backdrop-blur-sm bg-white/5">
                Ver produtos e soluções <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
              {[
                { icon: Zap, label: "Atendimento rápido" },
                { icon: Package, label: "Atacado e varejo" },
                { icon: Wrench, label: "Instalação especializada" },
                { icon: Award, label: "+50 anos de mercado" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-white/90 text-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold/15 border border-gold/30">
                    <Icon className="h-4 w-4 text-gold" />
                  </span>
                  <span className="font-medium leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* AUTHORITY */}
      <section id="empresa" className="py-20 md:py-28">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">A Forrocol</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Tradição, qualidade e acabamento para a sua obra</h2>
            <p className="mt-4 text-muted-foreground">
              Desde a fundação, em Contagem/MG, construímos uma trajetória sólida atendendo obras residenciais, comerciais e industriais com produtos selecionados e equipe especializada.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, title: "+50 anos", desc: "de mercado e experiência acumulada" },
              { icon: Package, title: "Atacado e varejo", desc: "para instaladores, obras e consumidor final" },
              { icon: Users, title: "Equipe especializada", desc: "orientação técnica para cada projeto" },
              { icon: MapPin, title: "Região metropolitana", desc: "Contagem, BH e cidades vizinhas" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-soft p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 border border-gold/30">
                  <Icon className="h-5 w-5 text-ink" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="py-20 md:py-28 bg-muted/40">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl">
            <div>
              <span className="eyebrow">Produtos</span>
              <h2 className="mt-4 text-3xl md:text-5xl">Soluções completas para acabamento da sua obra</h2>
            </div>
            <p className="text-muted-foreground md:max-w-md">
              Escolha a categoria ideal e fale com nossa equipe para receber orientação e orçamento.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <article key={p.title} className="card-soft overflow-hidden flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
                  <a
                    href={waLink(p.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold"
                  >
                    <MessageCircle className="h-4 w-4" /> {p.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUEM ATENDEMOS */}
      <section id="servicos" className="py-20 md:py-28">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">Para quem atendemos</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Atendimento para diferentes tipos de projeto</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: HomeIcon, label: "Residências" },
              { icon: Briefcase, label: "Empresas e escritórios" },
              { icon: Building2, label: "Construtoras" },
              { icon: HardHat, label: "Instaladores" },
              { icon: Store, label: "Lojas e decoração" },
              { icon: Factory, label: "Indústrias" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="card-soft p-5 text-center">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold text-gold" />
              ))}
            </div>
            <span className="eyebrow mt-4">Avaliações reais de clientes no Google</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Quem conhece a Forrocol recomenda</h2>
            <p className="mt-3 text-muted-foreground">Mais de 50 anos construindo confiança e qualidade.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {REVIEWS.map((r, i) => (
              <figure key={i} className="card-soft p-7">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <blockquote className="mt-4 text-foreground/90 leading-relaxed">"{r.text}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">— {r.name}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold">
              <MessageCircle className="h-5 w-5" /> Quero falar com a Forrocol
            </a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">Diferenciais</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Por que escolher a Forrocol?</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Award, t: "Empresa tradicional em Contagem" },
              { icon: ShieldCheck, t: "Produtos de qualidade" },
              { icon: Users, t: "Atendimento especializado" },
              { icon: Wrench, t: "Instalação profissional" },
              { icon: Package, t: "Atacado e varejo" },
              { icon: Clock, t: "Compromisso com prazos" },
              { icon: Handshake, t: "Fornecedores reconhecidos" },
              { icon: Sparkles, t: "Suporte na escolha dos materiais" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="flex items-start gap-3 p-5 rounded-2xl bg-muted/50 border border-border">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-ink">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-sm pt-2">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">Galeria</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Veja como o acabamento transforma o ambiente</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[gal1, gal2, gal3, gal4, pRipados, pDivisorias, pPisos, pForros].map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ${i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <img src={src} loading="lazy" alt={`Projeto Forrocol ${i + 1}`} className="w-full h-full object-cover aspect-square transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline-gold inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold">
              Ver mais projetos <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ORIENTAÇÃO */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">Orientação</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Não sabe qual produto escolher? A Forrocol te ajuda</h2>
            <p className="mt-4 text-muted-foreground">
              Cada obra tem uma necessidade diferente. Nossa equipe pode orientar você sobre o melhor tipo de forro, piso, divisória ou acabamento de acordo com o ambiente, orçamento e objetivo do projeto.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { icon: HomeIcon, title: "Para ambientes residenciais", desc: "Soluções que unem beleza, conforto e praticidade." },
              { icon: Briefcase, title: "Para empresas", desc: "Acabamentos modernos que valorizam o ambiente profissional." },
              { icon: Building2, title: "Para obras maiores", desc: "Atendimento especializado e suporte em todas as etapas da obra." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-soft p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-gold-deep text-ink">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold">
              <MessageCircle className="h-5 w-5" /> Receber orientação pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-gold-deep/15 blur-3xl" />
        <div className="relative container-x py-20 md:py-28 text-center max-w-3xl mx-auto">
          <span className="eyebrow !bg-gold/20 !text-gold !border-gold/40">Solicite seu orçamento</span>
          <h2 className="mt-5 text-3xl md:text-5xl text-white">
            Está construindo ou reformando? Fale com a <span className="text-gold">Forrocol</span>.
          </h2>
          <p className="mt-5 text-white/80">
            Solicite seu orçamento e conte com uma equipe especializada para ajudar na escolha dos melhores materiais para sua obra.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base">
            <MessageCircle className="h-5 w-5" /> Solicitar orçamento agora
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-white/80">
            {["Resposta rápida", "Orçamento sem compromisso", "Atendimento especializado"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-ink text-white/85">
        <div className="container-x py-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <img src={logo} alt="Forrocol" className="h-16 w-auto bg-white rounded-xl p-2" />
            <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-md">
              Há mais de 50 anos oferecendo soluções completas em forros, pisos, divisórias, ripados e acessórios para obras residenciais e comerciais com qualidade, tradição e atendimento especializado.
            </p>
            <a href="https://instagram.com/forrocol" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm hover:text-gold transition-colors">
              <Instagram className="h-4 w-4" /> @forrocol
            </a>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-gold text-sm font-bold uppercase tracking-wider">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="tel:+553133685600" className="inline-flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4" /> (31) 3368-5600</a></li>
              <li><a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><MessageCircle className="h-4 w-4" /> (31) 9 9580-5600</a></li>
              <li className="flex items-start gap-2 text-white/75">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>R. Cel. Procópio, 316<br />Inconfidentes, Contagem - MG<br />32260-040</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-gold text-sm font-bold uppercase tracking-wider">Localização</h4>
            <div className="mt-4 rounded-2xl overflow-hidden border border-white/10">
              <iframe
                title="Mapa Forrocol"
                src="https://www.google.com/maps?q=R.+Cel.+Proc%C3%B3pio,+316+-+Inconfidentes,+Contagem+-+MG,+32260-040&output=embed"
                width="100%"
                height="200"
                loading="lazy"
                className="block"
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=R.+Cel.+Proc%C3%B3pio,+316+-+Inconfidentes,+Contagem+-+MG,+32260-040"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold !text-white mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              <MapPin className="h-4 w-4" /> Como chegar
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/55">
            <p>© {new Date().getFullYear()} Forrocol. Todos os direitos reservados.</p>
            <p>Forros • Divisórias • Pisos • Ripados • Luminárias</p>
          </div>
        </div>
      </footer>

      <FloatingWA />
    </div>
  );
}
