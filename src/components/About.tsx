"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Target } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Confianza",
    description:
      "Avalados por nuestra experiencia internacional, velamos por la seguridad e integridad de sus recursos y decisiones financieras.",
    accent: "#3b82f6",
  },
  {
    icon: Zap,
    title: "Eficiencia",
    description:
      "Desarrollamos e implementamos herramientas para optimizar los resultados de su negocio con máxima precisión.",
    accent: "#f59e0b",
  },
  {
    icon: Target,
    title: "Personalización",
    description:
      "Flexibilidad dirigida a atender sus necesidades acorde a la operación y características únicas de su empresa.",
    accent: "#10b981",
  },
];

export function About() {
  return (
    <section id="nosotros" className="relative py-24 lg:py-32" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span style={{ color: "var(--accent)" }} className="text-sm font-semibold tracking-widest uppercase">
            Nuestra Filosofía
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Quiénes Somos
          </h2>
          <div className="mt-6 max-w-3xl mx-auto space-y-4">
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <strong style={{ color: "var(--text-secondary)" }}>Visión:</strong> Colaboramos con despachos, personas morales y personas físicas.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <strong style={{ color: "var(--text-secondary)" }}>Misión:</strong> Ofrecemos calidad, seguridad y trato serio en sus problemas contables y fiscales. Promovemos la seguridad fiscal legal y la eficiencia operacional de tal forma que permita optimizar los resultados de su negocio con herramientas contables y financieras de vanguardia internacional.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group rounded-2xl border p-8 backdrop-blur-sm hover:scale-[1.02] transition-transform"
              style={{ borderColor: `${pillar.accent}33`, backgroundColor: `${pillar.accent}0a`, boxShadow: "var(--card-shadow)" }}
            >
              <div className="inline-flex p-3 rounded-xl mb-6" style={{ background: `linear-gradient(135deg, ${pillar.accent}, ${pillar.accent}cc)` }}>
                <pillar.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>{pillar.title}</h3>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
