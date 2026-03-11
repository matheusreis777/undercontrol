"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { 
  ShieldCheck, 
  Settings, 
  Layers, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  ChevronRight,
  Cpu,
  Globe,
  Zap,
  LayoutDashboard,
  Moon,
  Sun,
  MessageCircle,
  BarChart3,
  Lock,
  DollarSign,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Theme Toggle Component ---
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all border border-border"
      aria-label="Alternar tema"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

// --- WhatsApp Button Component ---
const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=5567991431860"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center"
    >
      <MessageCircle size={32} fill="currentColor" />
    </motion.a>
  );
};

// --- Navbar Component ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Produtos", href: "#produtos" },
    { name: "Soluções", href: "#solucoes" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 border-none shadow-none",
        scrolled ? "bg-background/80 backdrop-blur-md py-2" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-12 w-48">
            <Image 
              src="/assets/under_control_logo_dark.png" 
              alt="Under Control"
              fill
              className="object-contain object-left dark:hidden"
              priority
            />
            <Image 
              src="/assets/under_control_logo_light.png" 
              alt="Under Control"
              fill
              className="object-contain object-left hidden dark:block"
              priority
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a 
              href="https://api.whatsapp.com/send?phone=5567991431860"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/10 hover:shadow-primary/20"
            >
              Fale Conosco
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button 
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background absolute top-full left-0 right-0 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://api.whatsapp.com/send?phone=5567991431860"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-5 py-3 rounded-xl text-center font-semibold mt-2"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-xs font-bold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            CONCENTRANDO INTELIGÊNCIA EMPRESARIAL
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold font-outfit leading-[1.1] mb-8"
          >
            Sua empresa, sob <span className="text-gradient">total controle.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            Uma vitrine de soluções digitais de alta performance projetadas para otimizar processos e maximizar resultados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Botão removido conforme solicitação */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- About Section ---
const About = () => {
  return (
    <section id="sobre" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border group">
              <Image 
                src="/assets/about-generic.png" 
                alt="Sistema Under Control"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <div>
            <span className="text-primary font-bold text-sm tracking-wider uppercase mb-4 block">FUTURO DA GESTÃO</span>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">Hub de Produtos Under Control</h2>
            <p className="text-lg text-muted-foreground mb-8">
              A ideia do projeto é funcionar como um hub de produtos, onde cada sistema resolve um problema específico de negócio, mas todos compartilham a mesma base tecnológica, arquitetura e identidade.
            </p>
            <div className="space-y-4">
              {[
                "Base tecnológica reutilizável e escalável",
                "Identidade visual e UX padronizados",
                "Integração total entre aplicativos mobile e web",
                "Focado na redução de custos operacionais"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Products Section ---
const Products = () => {
  return (
    <section id="produtos" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">Nossas Soluções</h2>
          <p className="text-lg text-muted-foreground">
            Sistemas desenvolvidos sob medida para necessidades críticas do mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-background border border-border p-8 md:p-12 rounded-[32px] overflow-hidden hover:border-primary/50 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <Cpu size={200} />
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <Cpu size={30} />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold font-outfit mb-4">Gestão de Ar-Condicionado</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Case de sucesso: Toda gestão do negocio de manutenção de ar-condicionado em um só lugar.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-muted p-4 rounded-xl">
                    <span className="block font-bold text-primary">Controle Total</span>
                    <span className="text-sm">Negócio de Manutenção</span>
                  </div>
                  <div className="bg-muted p-4 rounded-xl">
                    <span className="block font-bold text-primary">Acesso Amplo</span>
                    <span className="text-sm">Mobile e Web</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-primary font-bold group/btn">
                  Explorar Produto <ChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative rounded-[24px] overflow-hidden aspect-video shadow-xl border border-border group/img">
                <Image 
                  src="/assets/hvac-generic.png" 
                  alt="Gestão HVAC Under Control"
                  fill
                  className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Solutions Section ---
const Solutions = () => {
  const features = [
    { icon: Globe, title: "Web Platform", desc: "Painéis administrativos robustos feitos com Next.js." },
    { icon: Smartphone, title: "Mobile Experience", desc: "Para administrador, gestor, profissionais e clientes." },
    { icon: Zap, title: "Performance", desc: "Arquitetura otimizada para máxima velocidade de resposta." },
    { icon: Layers, title: "Escalabilidade", desc: "Pronto para crescer conforme sua demanda aumenta." }
  ];

  return (
    <section id="solucoes" className="py-24 bg-neutral-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-8">Tecnologia de ponta a ponta</h2>
            <p className="text-lg text-gray-400 mb-12">
              Desenvolvemos aplicações utilizando o que há de mais moderno na indústria de software para garantir segurança e estabilidade.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i}>
                  <f.icon className="text-primary mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="h-48 bg-white/5 rounded-[32px] backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <BarChart3 size={48} className="text-primary/40" />
                </div>
                <div className="h-64 bg-primary/20 rounded-[32px] backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                  <Lock size={64} className="text-primary" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-64 bg-white/5 rounded-[32px] backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <DollarSign size={64} className="text-primary/40" />
                </div>
                <div className="h-48 bg-white/5 rounded-[32px] backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <Activity size={48} className="text-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="relative h-10 w-48">
            <Image 
              src="/assets/under_control_logo_dark.png" 
              alt="Under Control"
              fill
              className="object-contain object-left dark:hidden"
            />
            <Image 
              src="/assets/under_control_logo_light.png" 
              alt="Under Control"
              fill
              className="object-contain object-left hidden dark:block"
            />
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Termos</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Under Control. Por Matheus Reis Mendonça.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
             Desenvolvido com <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" /> Next.js & React Native
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Solutions />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
