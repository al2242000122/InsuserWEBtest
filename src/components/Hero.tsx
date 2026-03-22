"use client";

import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Shield, TrendingUp, Globe } from "lucide-react";
import { AnimatedHero } from "@/components/ui/animated-hero";

export function Hero() {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--bg-primary), var(--bg-secondary), var(--bg-primary))" }} />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: "rgba(245, 158, 11, 0.05)" }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex flex-col items-center text-center gap-8 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
            style={{ backgroundColor: "rgba(245, 158, 11, 0.1)", borderColor: "rgba(245, 158, 11, 0.2)", color: "var(--accent)" }}
          >
            <Shield className="w-4 h-4" />
            Desde 2008 · Experiencia Internacional
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <AnimatedHero
              staticText="Asesoría Fiscal y Contable"
              titles={["de Seguridad", "de Eficiencia", "de Estrategia", "de Confianza", "de Excelencia"]}
              interval={2500}
            />

            <p className="text-lg md:text-xl leading-relaxed tracking-tight max-w-2xl text-center mx-auto" style={{ color: "var(--text-muted)" }}>
              Contabilidad estratégica con más de 30 años de experiencia internacional.
              Seguridad, eficiencia y valor agregado en tus decisiones financieras.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+525552437395"
              className="flex items-center justify-center gap-3 bg-transparent border-2 px-8 py-4 rounded-xl text-base font-semibold transition-all"
              style={{ borderColor: "rgba(245, 158, 11, 0.3)", color: "var(--accent)" }}
            >
              <PhoneCall className="w-5 h-5" />
              Agenda una llamada
            </a>
            <a
              href="#contacto"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg"
              style={{ background: `linear-gradient(to right, var(--accent-gradient-from), var(--accent-gradient-to))`, color: "var(--bg-primary)" }}
            >
              Consultoría gratuita
              <MoveRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-12 pt-12 max-w-2xl w-full"
            style={{ borderTop: "1px solid var(--border-color)" }}
          >
            {[
              { icon: Shield, label: "Seguridad Fiscal", value: "100%" },
              { icon: TrendingUp, label: "Optimización", value: "30+ años" },
              { icon: Globe, label: "Alcance Internacional", value: "Global" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <stat.icon className="w-5 h-5" style={{ color: "var(--accent)", opacity: 0.7 }} />
                <span className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{stat.value}</span>
                <span className="text-xs text-center" style={{ color: "var(--text-dimmed)" }}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
