"use client";

import { motion } from "framer-motion";
import { FinancialScoreCards } from "@/components/ui/financial-score-cards";

export function FinancialScores() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span style={{ color: "var(--accent)" }} className="text-sm font-semibold tracking-widest uppercase">
            Diagnóstico Fiscal
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Evalúa tu Situación Fiscal
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Conoce el estado de cumplimiento, optimización y salud financiera de tu empresa con nuestras herramientas de diagnóstico
          </p>
        </motion.div>

        <FinancialScoreCards />
      </div>
    </section>
  );
}
