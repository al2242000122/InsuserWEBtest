"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "30+", label: "Años de experiencia total" },
  { value: "40+", label: "Años de trayectoria del fundador" },
  { value: "20+", label: "Empresas grandes e internacionales" },
  { value: "2008", label: "Año de fundación de la firma" },
];

export function Stats() {
  return (
    <section className="relative py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span style={{ color: "var(--accent)" }} className="text-sm font-semibold tracking-widest uppercase">
            Números Que Hablan
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            Resultados que demuestran nuestro valor
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center p-8 rounded-2xl border backdrop-blur-sm"
              style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-card)", boxShadow: "var(--card-shadow)" }}
            >
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(to bottom, var(--accent-light), var(--accent-gradient-to))" }}>
                {stat.value}
              </div>
              <p className="mt-3 text-sm leading-tight" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
