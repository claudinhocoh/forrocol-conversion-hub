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
import pPisos from "@/assets/prod-pisos.jpg";
import pRipados from "@/assets/prod-ripados.jpg";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";
import gal4 from "@/assets/gal-4.jpg";
import logo from "@/assets/forrocol-logo-transparent.png";
import logoRodape from "@/assets/logo-forrocol-rodape.png.asset.json";
import forroPVC from "@/assets/forro-pvc.png.asset.json";
import divisoriaEucatexPVC from "@/assets/divisoria-eucatex-pvc.png.asset.json";
import plafons from "@/assets/plafons.png.asset.json";
import forrosModulares from "@/assets/forros-modulares.png.asset.json";
import portaSanfonada from "@/assets/porta-sanfonada.png.asset.json";
import produtosTermoacusticos from "@/assets/produtos-termoacusticos.png.asset.json";
import acessorios from "@/assets/acessorios.png.asset.json";
import forrocolEmpresa from "@/assets/forrocol-empresa.png.asset.json";
import avatar from "@/assets/avatar.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forrocol | Forros, Divisórias, Pisos e Ripados para Obras" },
      { name: "description", content: "Soluções em forros, pisos, divisórias, ripados, luminárias, portas sanfonadas e acessórios para obras residenciais, comerciais e industriais. Solicite seu orçamento pelo WhatsApp." },
      { property: "og:title", content: "Forrocol | Forros, Divisórias, Pisos e Ripados" },
      { property: "og:description", content: "Há mais de 50 anos oferecendo acabamento de qualidade para obras residenciais, comerciais e industriais." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const PRODUCTS = [
  { img: forroPVC.url, title: "Forros", desc: "Forros em PVC, mineral, teto de luxo e outras soluções para acabamento de teto com qualidade e praticidade.", cta: "Orçar forros no WhatsApp", msg: "Olá, vim pelo site da Forrocol e gostaria de orçar forros." },
  { img: pPisos, title: "Pisos", desc: "Pisos vinílicos, laminados, rodapés e soluções modernas para ambientes residenciais e comerciais.", cta: "Orçar pisos no WhatsApp", msg: "Olá, vim pelo site da Forrocol e gostaria de orçar pisos." },
  { img: divisoriaEucatexPVC.url, title: "Divisórias em Eucatex e PVC", desc: "Divisórias para escritórios, vestiários, empresas e ambientes corporativos, unindo funcionalidade, organização e acabamento profissional. Resistente a água ou humidade.", cta: "Orçar divisórias no WhatsApp", msg: "Olá, vim pelo site da Forrocol e gostaria de orçar divisórias em eucatex e PVC." },
  { img: pRipados, title: "Ripados", desc: "Painéis ripados externo e interno para paredes, tetos e projetos decorativos. Trazendo sofisticação e personalidade ao ambiente.", cta: "Orçar ripados no WhatsApp", msg: "Olá, vim pelo site da Forrocol e gostaria de orçar painéis ripados." },
  { img: plafons.url, title: "Luminárias", desc: "Luminárias para embutir e sobrepor, ideais para valorizar ambientes residenciais, comerciais e corporativos com iluminação moderna, funcional e elegante.", cta: "Falar com especialista", msg: "Olá, vim pelo site da Forrocol e quero falar com um especialista em luminárias." },
  { img: forrosModulares.url, title: "Forros Modulares", desc: "Forros modulares em fibra mineral, isopor, PVC e lã de vidro (forrovid), ideais para ambientes comerciais, corporativos e projetos que exigem praticidade, conforto e bom acabamento.", cta: "Orçar forros modulares", msg: "Olá, vim pelo site da Forrocol e gostaria de orçar forros modulares." },
  { img: portaSanfonada.url, title: "Portas Sanfonadas", desc: "Portas em PVC branco para ambientes que precisam de melhor aproveitamento de espaço, com abertura prática e opções em diferentes medidas.", cta: "Orçar portas sanfonadas", msg: "Olá, vim pelo site da Forrocol e gostaria de orçar portas sanfonadas." },
  { img: produtosTermoacusticos.url, title: "Produtos Termoacústicos", desc: "Lã de vidro térmica e acústica e manta térmica aluminizada para melhorar o conforto dos ambientes, auxiliar no isolamento e contribuir para uma obra mais eficiente.", cta: "Orçar produtos termoacústicos", msg: "Olá, vim pelo site da Forrocol e gostaria de orçar produtos termoacústicos." },
  { img: acessorios.url, title: "Acessórios", desc: "Acessórios para instalação e acabamento, incluindo fechaduras, parafusos, metalons, arames, silicones, spots e dobradiças para diferentes tipos de obra.", cta: "Falar sobre acessórios", msg: "Olá, vim pelo site da Forrocol e gostaria de saber mais sobre acessórios para instalação e acabamento." },
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

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Ambiente moderno com ripado, forro e iluminação embutida" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        </div>
        <div className="relative container-x py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <span className="eyebrow !border-gold/40 !bg-gold/20 !text-gold">
              <Sparkles className="h-3.5 w-3.5" /> 53 anos de tradição
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Forros, Divisórias, Pisos e Ripados para Obras {" "}
              <span className="text-gold">Residenciais e Comerciais</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Soluções completas em acabamento, com produtos de qualidade, atendimento especializado e instalação profissional em Contagem, Belo Horizonte e região.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold">
                <MessageCircle className="h-5 w-5" /> Solicitar orçamento pelo WhatsApp
              </a>
              <a href="#produtos" className="btn-outline-gold inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3.5 font-semibold !text-white backdrop-blur-sm">
                Ver produtos e soluções <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { icon: Zap, label: "Atendimento rápido" },
                { icon: Package, label: "Atacado e varejo" },
                { icon: Wrench, label: "Instalação especializada" },
                { icon: Award, label: "+50 anos de mercado" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-sm text-white/90">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-gold/30 bg-gold/15">
                    <Icon className="h-4 w-4 text-gold" />
                  </span>
                  <span className="font-medium leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="empresa" className="py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">A Forrocol</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Tradição, qualidade e acabamento para a sua obra</h2>
            <p className="mt-4 text-muted-foreground">
              Desde a fundação, construímos uma história sólida atendendo obras residenciais, comerciais e industriais com produtos selecionados e equipe especializada.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, title: "+50 anos", desc: "de mercado e experiência acumulada" },
              { icon: Package, title: "Atacado e varejo", desc: "para instaladores, obras e consumidor final" },
              { icon: Users, title: "Equipe especializada", desc: "orientação técnica para cada projeto" },
              { icon: MapPin, title: "Região metropolitana", desc: "Contagem, BH e cidades vizinhas" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-soft p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/15">
                  <Icon className="h-5 w-5 text-ink" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="produtos" className="bg-muted/40 py-20 md:py-28">
        <div className="container-x">
          <div className="flex max-w-5xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Produtos</span>
              <h2 className="mt-4 text-3xl md:text-5xl">Soluções completas para acabamento da sua obra</h2>
            </div>
            <p className="text-muted-foreground md:max-w-md">
              Escolha a categoria ideal e fale com nossa equipe para receber orientação e orçamento.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article key={p.title} className="card-soft flex flex-col overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                  <a
                    href={waLink(p.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa mt-5 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold"
                  >
                    <MessageCircle className="h-4 w-4" /> {p.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Para quem atendemos</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Atendimento para diferentes tipos de projeto</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
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

      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold text-gold" />
              ))}
            </div>
            <span className="eyebrow mt-4">Avaliações reais de clientes no Google</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Quem conhece a Forrocol recomenda</h2>
            <p className="mt-3 text-muted-foreground">Mais de 50 anos construindo confiança e qualidade.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {REVIEWS.map((r, i) => (
              <figure key={i} className="card-soft p-7">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <blockquote className="mt-4 leading-relaxed text-foreground/90">&quot;{r.text}&quot;</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">— {r.name}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold">
              <MessageCircle className="h-5 w-5" /> Quero falar com a Forrocol
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Diferenciais</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Por que escolher a Forrocol?</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              <div key={t} className="flex items-start gap-3 rounded-2xl border border-border bg-muted/50 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-ink">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="pt-2 text-sm font-semibold">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Galeria</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Veja como o acabamento transforma o ambiente</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[gal1, gal2, gal3, gal4, forroPVC.url, plafons.url, forrosModulares.url, divisoriaEucatexPVC.url].map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ${i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <img src={src} loading="lazy" alt={`Projeto Forrocol ${i + 1}`} className="aspect-square h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold">
              <MessageCircle className="h-4 w-4" /> Solicitar Orçamento Agora
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Orientação</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Não sabe qual produto escolher? A Forrocol te ajuda</h2>
            <p className="mt-4 text-muted-foreground">
              Cada obra tem uma necessidade diferente. Nossa equipe pode orientar você sobre o melhor tipo de forro, piso, divisória ou acabamento de acordo com o ambiente, orçamento e objetivo do projeto.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
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
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold">
              <MessageCircle className="h-5 w-5" /> Receber orientação pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow">Quem somos</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Quem somos</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              A Forrocol é uma empresa tradicional em Contagem/MG, com mais de 50 anos de experiência em soluções para acabamento de obras residenciais, comerciais e industriais.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Atuamos com forros, pisos, divisórias, ripados, portas sanfonadas, luminárias e acessórios, oferecendo variedade, qualidade e atendimento especializado para cada projeto e suporte para clientes, instaladores, construtoras e empresas.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { title: "Missão", text: "Oferecer soluções práticas e de qualidade para transformar ambientes com bom acabamento." },
                { title: "Visão", text: "Ser referência em acabamento em Contagem, Belo Horizonte e região." },
                { title: "Valores", text: "Tradição, qualidade, confiança, agilidade e compromisso com o cliente." },
              ].map((item) => (
                <div key={item.title} className="card-soft p-6">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-muted/30 shadow-card">
            <img
              src={forrocolEmpresa.url}
              alt="Fachada da Forrocol em Contagem com veículo da empresa"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-gold-deep/15 blur-3xl" />
        <div className="relative container-x mx-auto max-w-3xl py-20 text-center md:py-28">
          <span className="eyebrow !border-gold/40 !bg-gold/20 !text-gold">Solicite seu orçamento</span>
          <h2 className="mt-5 text-3xl text-white md:text-5xl">
            Está construindo ou reformando? Fale com a <span className="text-gold">Forrocol</span>.
          </h2>
          <p className="mt-5 text-white/80">
            Solicite seu orçamento e conte com uma equipe especializada para ajudar na escolha dos melhores materiais para sua obra.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold">
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

      <footer id="contato" className="bg-ink text-white/85">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src={logoRodape.url} alt="Forrocol" className="h-20 w-auto md:h-24" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Há mais de 50 anos oferecendo soluções completas em forros, pisos, divisórias, ripados e acessórios para obras residenciais, comerciais e industriais com qualidade, tradição e atendimento especializado.
            </p>
            <a href="https://instagram.com/forrocol" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm transition-colors hover:text-gold">
              <Instagram className="h-4 w-4" /> @forrocol
            </a>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold">Atendimento</h4>
            <img src={avatar.url} alt="Atendimento Forrocol" loading="lazy" className="mt-4 h-40 w-auto md:h-48" />
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="tel:+553133685600" className="inline-flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4" /> (31) 3368-5600</a></li>
              <li><a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><MessageCircle className="h-4 w-4" /> (31) 9 9580-5600</a></li>
              <li className="flex items-start gap-2 text-white/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>R. Cel. Procópio, 316<br />Inconfidentes, Contagem - MG<br />32260-040</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold">Localização</h4>
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
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
              className="btn-outline-gold mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold !text-white"
            >
              <MapPin className="h-4 w-4" /> Como chegar
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/55 md:flex-row">
            <p>© {new Date().getFullYear()} Forrocol. Todos os direitos reservados.</p>
            <p>Forros • Divisórias • Pisos • Ripados • Luminárias</p>
          </div>
        </div>
      </footer>

      <FloatingWA />
    </div>
  );
}
