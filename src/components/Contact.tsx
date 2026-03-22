"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle, MoveRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="relative py-24 lg:py-32" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span style={{ color: "var(--accent)" }} className="text-sm font-semibold tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
            ¿Listo para optimizar tu empresa?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Consultoría financiera sin compromiso. Más de 30 años aportando seguridad, eficiencia y valor a las decisiones financieras de las empresas más importantes de México.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              "Asesoría integral",
              "Experiencia comprobada",
              "Soluciones a la medida",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <CheckCircle className="w-4 h-4" style={{ color: "var(--accent)" }} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <a
              href="tel:+525552437395"
              className="flex items-center gap-5 p-6 rounded-2xl border transition-colors group"
              style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-card)", boxShadow: "var(--card-shadow)" }}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(245, 158, 11, 0.1)" }}>
                <Phone className="w-6 h-6" style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: "var(--text-dimmed)" }}>Teléfono</p>
                <p className="font-semibold text-lg group-hover:text-amber-500 transition-colors" style={{ color: "var(--text-primary)" }}>
                  (55) 5243-7395
                </p>
              </div>
            </a>

            <a
              href="mailto:info@insuser.mx"
              className="flex items-center gap-5 p-6 rounded-2xl border transition-colors group"
              style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-card)", boxShadow: "var(--card-shadow)" }}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(245, 158, 11, 0.1)" }}>
                <Mail className="w-6 h-6" style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: "var(--text-dimmed)" }}>Email</p>
                <p className="font-semibold text-lg group-hover:text-amber-500 transition-colors" style={{ color: "var(--text-primary)" }}>
                  info@insuser.mx
                </p>
              </div>
            </a>

            <div
              className="flex items-center gap-5 p-6 rounded-2xl border"
              style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-card)", boxShadow: "var(--card-shadow)" }}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(245, 158, 11, 0.1)" }}>
                <MapPin className="w-6 h-6" style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: "var(--text-dimmed)" }}>Dirección</p>
                <p className="font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
                  Calle Moras No. 533-4, CDMX
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border p-8"
            style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-card)", boxShadow: "var(--card-shadow)" }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              Envíanos un mensaje
            </h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm mb-2" style={{ color: "var(--text-muted)" }}>Nombre</label>
                <input
                  type="text"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none transition-colors"
                  style={{ backgroundColor: "var(--bg-input)", borderColor: "var(--border-color)", color: "var(--text-primary)" }}
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: "var(--text-muted)" }}>Email</label>
                <input
                  type="email"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none transition-colors"
                  style={{ backgroundColor: "var(--bg-input)", borderColor: "var(--border-color)", color: "var(--text-primary)" }}
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: "var(--text-muted)" }}>Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none transition-colors resize-none"
                  style={{ backgroundColor: "var(--bg-input)", borderColor: "var(--border-color)", color: "var(--text-primary)" }}
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-bold transition-all"
                style={{ background: `linear-gradient(to right, var(--accent-gradient-from), var(--accent-gradient-to))`, color: "var(--bg-primary)" }}
              >
                Enviar mensaje
                <MoveRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
