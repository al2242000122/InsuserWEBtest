"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  FileSearch,
  Gift,
  BookOpen,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Calculator className="h-5 w-5" style={{ color: "var(--accent)" }} />,
    title: "Impuestos",
    description:
      "Asesoría en cumplimiento de legislación fiscal nacional e internacional. Gestión de obligaciones fiscales, diagnóstico y análisis de incumplimientos.",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    icon: <FileSearch className="h-5 w-5" style={{ color: "var(--accent)" }} />,
    title: "Auditoría",
    description:
      "Revisión de estados financieros para efectos fiscales y financieros. Auditorías operacionales, administrativas y detección de fraudes.",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    icon: <Gift className="h-5 w-5" style={{ color: "var(--accent)" }} />,
    title: "Estímulos Fiscales",
    description:
      "Detección de oportunidades y diagnóstico de factibilidad. Definición de proyectos y seguimiento posterior a la obtención de beneficios.",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  },
  {
    icon: <BookOpen className="h-5 w-5" style={{ color: "var(--accent)" }} />,
    title: "Contabilidad",
    description:
      "Gestión contable integral interna o externa. Preparación de estados financieros en cualquier moneda e idioma con formatos internacionales.",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  },
  {
    icon: <TrendingUp className="h-5 w-5" style={{ color: "var(--accent)" }} />,
    title: "Estrategias de Finanzas",
    description:
      "Evaluación de situación financiera y detección de áreas de oportunidad. Diseño e implementación de optimización financiera de proyectos.",
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/11]",
  },
  {
    icon: <Briefcase className="h-5 w-5" style={{ color: "var(--accent)" }} />,
    title: "Proyectos Especiales",
    description:
      "Valuación de empresas, análisis y diagnóstico documental. Análisis económicos y estudios especializados según necesidades específicas.",
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/11/3/13]",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 lg:py-32" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span style={{ color: "var(--accent)" }} className="text-sm font-semibold tracking-widest uppercase">
            Lo Que Hacemos
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Servicios Especializados
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--text-muted)" }}>
            06 soluciones integrales para fortalecer tus finanzas
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-5 xl:max-h-[40rem] xl:grid-rows-2">
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn("min-h-[14rem] list-none", service.area)}
            >
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] p-2 md:rounded-[1.5rem] md:p-3" style={{ borderColor: "var(--border-color)" }}>
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-5 overflow-hidden rounded-xl border-[0.75px] p-6" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-card)", boxShadow: "var(--card-shadow)" }}>
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="w-fit rounded-lg border-[0.75px] p-2.5" style={{ borderColor: "var(--border-color)", backgroundColor: "rgba(255,255,255,0.05)" }}>
                      {service.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold tracking-[-0.04em] md:text-2xl md:leading-[1.875rem]" style={{ color: "var(--text-primary)" }}>
                        {service.title}
                      </h3>
                      <p className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem]" style={{ color: "var(--text-muted)" }}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
