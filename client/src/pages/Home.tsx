import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Target, Dumbbell, Star } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Treino Poderoso - Landing Page
 * Design: Fitness Empowerment Moderno
 * Colors: Black (#1a1a1a) + Dark Gray (#2d2d2d) + White (#ffffff) + Yellow (#ffd700)
 * Typography: Poppins (headlines) + Inter (body)
 * Marca: Elizabete Barros
 */

const CHECKOUT_URL = "https://pay.kiwify.com.br/rFbNfI3";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header/Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-accent-foreground" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xs font-semibold text-accent">Por</div>
              <span className="text-lg font-bold text-foreground">Elizabete Barros</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="text-sm hover:text-accent transition-colors">
              Benefícios
            </a>
            <a href="#programa" className="text-sm hover:text-accent transition-colors">
              Programa
            </a>
            <a href="#exercicios" className="text-sm hover:text-accent transition-colors">
              Exercícios
            </a>
          </div>

          {/* CTA Button */}
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-yellow-500 text-accent-foreground font-semibold gap-2">
              Adquira Agora <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-40 md:pt-48 pb-20 md:pb-32 relative overflow-hidden">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-6 md:space-y-8 z-10 animate-slide-in-left">
            <div className="space-y-4">
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Em casa, sem desculpas
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Treino <span className="text-accent">Poderoso</span>
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-md leading-relaxed">
                4 semanas de transformação real. Exercícios guiados, progressão clara, resultados possíveis. Criado por Elizabete Barros.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Treino completo em casa</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Progressão semanal estruturada</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Fotos e instruções detalhadas</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-accent hover:bg-yellow-500 text-accent-foreground font-semibold text-base py-6 gap-2 w-full sm:w-auto">
                  Adquira Agora <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Button variant="outline" className="border-border text-foreground hover:bg-card font-semibold text-base py-6">
                Saber Mais
              </Button>
            </div>
          </div>

          {/* Hero Image - Elizabete */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <img
              src="/hero.jpg"
              alt="Elizabete Barros - Criadora do Treino Poderoso"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 md:py-40">
        <div className="container">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Por que Treino Poderoso?</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Um programa desenhado para quem quer resultados reais, sem complicações.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-accent transition-all duration-300 group card-hover animate-fade-in-up" style={{animationDelay: '0s'}}>
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Prático</h3>
              <p className="text-muted leading-relaxed">
                Treino em casa com equipamento mínimo. Sem academia cara, sem desculpas. Você controla o tempo e o lugar.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-accent transition-all duration-300 group card-hover animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Zap className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Progressivo</h3>
              <p className="text-muted leading-relaxed">
                Cada semana você fica mais forte. A progressão é clara: aumento de repetições e carga. Sem plateaus.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-accent transition-all duration-300 group card-hover animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <CheckCircle2 className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Guiado</h3>
              <p className="text-muted leading-relaxed">
                Fotos e instruções detalhadas para cada exercício. Você sabe exatamente o que fazer e como fazer certo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Program Section */}
      <section id="programa" className="py-24 md:py-40">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden order-2 md:order-1">
            <img
              src="/programa.jpg"
              alt="Treino em casa"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl" />
          </div>

          {/* Text */}
          <div className="space-y-6 md:space-y-8 order-1 md:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">O Programa</h2>
              <p className="text-lg text-muted">
                4 semanas de treino estruturado, dividido em membros inferiores e superiores. Cada semana traz progressão.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-bold text-accent mb-2">Semana 1 & 2</h3>
                <p className="text-sm text-muted">
                  Adaptação e força base. 4 séries de 10-15 repetições. Aprenda a técnica correta.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-bold text-accent mb-2">Semana 3 & 4</h3>
                <p className="text-sm text-muted">
                  Intensidade aumentada. Aumento de carga e volume. Seu corpo está pronto para evoluir.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-bold text-accent mb-2">Exercícios</h3>
                <p className="text-sm text-muted">
                  10+ exercícios funcionais. Agachamentos, flexões, remadas, desenvolvimentos e muito mais.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted mb-4">
                <span className="font-semibold text-foreground">Importante:</span> Comece com o peso do seu próprio corpo. Aumente a intensidade a cada semana. Progressão é tudo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Exercises Preview */}
      <section id="exercicios" className="py-24 md:py-40">
        <div className="container">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Exercícios Inclusos</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Treino completo de corpo inteiro. Membros inferiores, superiores e core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Exercise Cards */}
            {[
              { name: "Agachamento", target: "Pernas" },
              { name: "Flexão de Braço", target: "Peito e Tríceps" },
              { name: "Remada", target: "Costas" },
              { name: "Desenvolvimento", target: "Ombros" },
              { name: "Elevação Pélvica", target: "Glúteos" },
              { name: "Abdominal", target: "Core" },
            ].map((exercise, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{exercise.name}</h3>
                    <p className="text-sm text-accent font-semibold">{exercise.target}</p>
                  </div>
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Dumbbell className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <p className="text-sm text-muted">
                  Instruções detalhadas com fotos. Progressão semanal clara.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Social Proof - Transformation */}
      <section className="py-24 md:py-40">
        <div className="container">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Resultados Reais</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Veja a transformação de quem seguiu o Treino Poderoso.
            </p>
          </div>

          {/* Main Transformation */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-card rounded-2xl p-8 border border-border overflow-hidden">
              <div className="flex items-center justify-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              
              <img
                src="/transformacao.jpg"
                alt="Transformação Pós-Parto - Antes e Depois"
                className="w-full rounded-lg mb-6"
              />
              
              <div className="text-center space-y-4">
                <div>
                  <p className="text-sm font-semibold text-accent mb-1">TRANSFORMAÇÃO PÓS-PARTO</p>
                  <p className="text-2xl font-bold">Voltei aos Treinos 1 Ano Depois</p>
                </div>
                <p className="text-muted leading-relaxed max-w-xl mx-auto">
                  "Voltei aos treinos 1 ano depois do nascimento do meu filho. Sem desculpas, sem complicações. Cada semana eu sentia a diferença. Resultados que valem a pena!"
                </p>
                <p className="font-bold text-accent text-lg">Elizabete Barros</p>
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">Clientes Satisfeitos</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-card rounded-2xl p-6 border border-border overflow-hidden hover:border-accent transition-all duration-300">
                <div className="flex items-center justify-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <img
                  src="/cliente1.jpg"
                  alt="Cliente - Resultado 1"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-sm text-muted text-center">
                  "Resultados incríveis em poucas semanas! Recomendo muito!"
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-card rounded-2xl p-6 border border-border overflow-hidden hover:border-accent transition-all duration-300">
                <div className="flex items-center justify-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <img
                  src="/cliente2.jpg"
                  alt="Cliente - Resultado 2"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-sm text-muted text-center">
                  "Transformação completa! Corpo mais definido e forte!"
                </p>
              </div>

              {/* Testimonial 3 - Pós-Parto */}
              <div className="bg-card rounded-2xl p-6 border border-accent overflow-hidden hover:border-accent transition-all duration-300 ring-2 ring-accent/20">
                <div className="flex items-center justify-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <img
                  src="/cliente3.jpg"
                  alt="5 Meses de Treino - Antes e Depois"
                  className="w-full rounded-lg mb-4"
                />
                <div className="text-center">
                  <p className="text-xs font-semibold text-accent mb-2">⭐ DESTAQUE</p>
                  <p className="text-sm text-muted">
                    "5 meses de treino com resultados incríveis! Transformação completa!"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="mt-16 max-w-2xl mx-auto bg-card rounded-2xl p-8 border border-border">
            <img
              src="/depoimento.jpg"
              alt="Depoimento de cliente"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* CTA Final Section */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

        <div className="container relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Começar?</h2>
          <p className="text-lg text-muted mb-8">
            Não é sobre ser perfeito. É sobre ser melhor que ontem. Comece hoje, sem desculpas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent hover:bg-yellow-500 text-accent-foreground font-semibold text-base py-6 px-8 gap-2 w-full sm:w-auto">
                Adquira Agora <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <Button variant="outline" className="border-border text-foreground hover:bg-card font-semibold text-base py-6 px-8">
              Saber Mais
            </Button>
          </div>

          <p className="text-sm text-muted mt-8">
            PDF com 12 páginas. Acesso imediato. Sem assinatura. Seu treino, seu ritmo.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-accent">Por</div>
                  <span className="font-bold">Elizabete Barros</span>
                </div>
              </div>
              <p className="text-sm text-muted">
                Treino em casa que funciona. Sem desculpas, sem complicações.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a href="#beneficios" className="hover:text-accent transition-colors">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#programa" className="hover:text-accent transition-colors">
                    Programa
                  </a>
                </li>
                <li>
                  <a href="#exercicios" className="hover:text-accent transition-colors">
                    Exercícios
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a href="mailto:contato@treinopoderoso.com" className="hover:text-accent transition-colors">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Termos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-12 text-center text-sm text-muted">
            <p>© 2026 Treino Poderoso. Criado por Elizabete Barros. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
