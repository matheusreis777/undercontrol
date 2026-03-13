"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { 
  ArrowLeft,
  Wrench,
  PackageSearch,
  CalendarDays,
  Users,
  BarChart4,
  CircleDollarSign,
  CheckCircle2,
  Moon,
  Sun,
  MessageCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: PackageSearch,
    title: "Estoque de Peças",
    description: "Controle rigoroso de entradas e saídas de peças, evitando falta de material para os serviços."
  },
  {
    icon: CalendarDays,
    title: "Serviços por Período",
    description: "Visualize a quantidade de manutenções e instalações agendadas de forma clara e organizada."
  },
  {
    icon: Users,
    title: "Gestão de Colaboradores",
    description: "Acompanhe de perto os serviços realizados por cada técnico e avalie a produtividade da equipe."
  },
  {
    icon: BarChart4,
    title: "Dashboards Intuitivos",
    description: "Gráficos de fácil leitura que resumem o desempenho do negócio em tempo real."
  },
  {
    icon: CircleDollarSign,
    title: "Controle Financeiro",
    description: "Tenha fluxo de caixa, controle de recebimentos, pagamentos e margem de lucro na palma da mão."
  },
  {
    icon: Wrench,
    title: "Ordens de Serviço",
    description: "Registre todos os detalhes das manutenções em ar condicionados e geladeiras, gerando histórico."
  }
];

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

// --- Logo Component ---
const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-10 w-32" />;
  }

  const isDark = resolvedTheme === "dark";
  const logoSrc = isDark 
    ? "/assets/under_control_logo_dark.png" 
    : "/assets/under_control_logo_light.png";

  return (
    <div className="flex items-center">
      <Image
        src={logoSrc}
        alt="Under Control Logo"
        width={300}
        height={60}
        className={cn(
          "h-10 w-auto md:h-12 object-contain transition-all duration-500",
          isDark ? "mix-blend-screen brightness-[1.2]" : ""
        )}
        priority
      />
    </div>
  );
};


export default function ArCondicionadoPage() {
  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Header Simples com Logo e Login */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md px-4 md:px-6 py-3 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <Link href="/" className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium border-r border-border pr-6 py-1">
              <ArrowLeft size={18} />
              <span className="text-sm">Voltar</span>
            </Link>
            <Link href="/" className="md:hidden flex items-center justify-center p-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <Logo />
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <a 
              href="https://ar.undercontrol.online"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all shadow-md shadow-primary/20 whitespace-nowrap"
            >
              Já faço parte do sistema - Login
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Orbs otimizados de background */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-primary/5 to-transparent rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-xs font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                SISTEMA ESPECIALIZADO
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold font-outfit leading-tight mb-6">
                Controle Total para <span className="text-primary">Refrigeração e Climatização</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Desenvolvido para empresas de todos os tamanhos, do Microempreendedor Individual (MEI) às grandes prestadoras de serviço. Tenha a gestão completa dos seus atendimentos em aparelhos de ar-condicionado na palma da mão.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://api.whatsapp.com/send?phone=5567991431860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 flex items-center justify-center text-center"
                >
                  Solicitar Demonstração
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square md:aspect-auto md:h-[500px] w-full rounded-[32px] border border-border bg-secondary/30 overflow-hidden shadow-2xl flex items-center justify-center p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-xl">
                 {/* Substitua a src da Image abaixo por uma print real do seu sistema quando tiver */}
                <Image 
                  src="/assets/hvac-generic.png" 
                  alt="Dashboard Sistema Ar Condicionado"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-background/90 backdrop-blur-sm p-4 rounded-xl border border-border flex items-center gap-4">
                    <div className="h-10 w-10 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                      <Wrench size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">OS Em Andamento</p>
                      <p className="text-xs text-muted-foreground">+12 hoje</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-outfit mb-4">Para quem é este sistema?</h2>
            <p className="text-lg text-muted-foreground">Adaptamos a tecnologia para a sua realidade</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Empresas", "Microempreendedor", "MEI", "Pessoa Física (Autônomo)"].map((audience, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-6 rounded-2xl border border-border flex flex-col items-center text-center shadow-sm"
              >
                <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-bold">{audience}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">Funcionalidades Principais</h2>
            <p className="text-lg text-muted-foreground">
              Tudo o que você precisa para gerenciar seus serviços de refrigeração em uma única plataforma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background border border-border p-8 rounded-3xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all group"
              >
                <div className="h-14 w-14 bg-secondary group-hover:bg-primary/10 rounded-2xl flex items-center justify-center text-foreground group-hover:text-primary transition-colors mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Modernizado */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="bg-card border border-border shadow-2xl rounded-[32px] md:rounded-[48px] p-8 md:p-20 text-center relative overflow-hidden group">
            
            {/* Efeitos de luz de fundo otimizados */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-8 relative"
              >
                <div className="absolute inset-0 bg-primary/20 blur-3xl scale-150 rounded-full" />
                <div className="relative z-10 flex items-center justify-center scale-150">
                  <Logo />
                </div>
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold font-outfit mb-6 tracking-tight">
                Eleve o nível da sua <br className="md:hidden" /><span className="text-primary italic">gestão técnica</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Abandone os papéis esquecidos na prancheta. Centralize orçamentos, estoque e contas a receber na plataforma projetada especificamente para o setor de prestação de serviços.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a 
                  href="https://api.whatsapp.com/send?phone=5567991431860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(56,174,91,0.2)] hover:shadow-[0_0_40px_rgba(56,174,91,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <MessageCircle size={24} /> 
                  Quero Conhecer o Sistema
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </main>
  );
}
