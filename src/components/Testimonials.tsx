"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TestimonialCarousel, type Testimonial } from "@/components/ui/testimonial";

const testimonialCards: Testimonial[] = [
  {
    id: 1,
    name: "Gerente Financiero — Empresa Multinacional",
    avatar: "G",
    description:
      "International Support Services nos ayudó a optimizar significativamente nuestra estructura fiscal. Su conocimiento integral de impuestos nacionales e internacionales fue clave en nuestro crecimiento estratégico.",
  },
  {
    id: 2,
    name: "Director de Operaciones — Grupo Industrial",
    avatar: "D",
    description:
      "Profesionalismo de clase mundial. Manejaron nuestra auditoría con un nivel de detalle y precisión excepcional.",
  },
  {
    id: 3,
    name: "CEO — Empresa Establecida",
    avatar: "C",
    description:
      "Más de 15 años trabajando juntos. Confiamos en su capacidad de resolver los problemas contables más complejos.",
  },
  {
    id: 4,
    name: "Director Administrativo — PyME en Crecimiento",
    avatar: "D",
    description:
      "Su asesoría en estímulos fiscales nos permitió acceder a beneficios que no sabíamos que existían para nuestra empresa.",
  },
];

const testimonialQuotes = [
  {
    quote:
      "International Support Services nos ayudó a optimizar significativamente nuestra estructura fiscal. Su conocimiento integral de impuestos nacionales e internacionales fue clave en nuestro crecimiento estratégico.",
    author: "Gerente Financiero",
    company: "Empresa Multinacional de México",
  },
  {
    quote:
      "Profesionalismo de clase mundial. Manejaron nuestra auditoría con un nivel de detalle y precisión excepcional.",
    author: "Director de Operaciones",
    company: "Grupo Industrial",
  },
  {
    quote:
      "Más de 15 años trabajando juntos. Confiamos en su capacidad de resolver los problemas contables más complejos.",
    author: "CEO",
    company: "Empresa Establecida",
  },
  {
    quote:
      "Su asesoría en estímulos fiscales nos permitió acceder a beneficios que no sabíamos que existían para nuestra empresa.",
    author: "Director Administrativo",
    company: "PyME en Crecimiento",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span style={{ color: "var(--accent)" }} className="text-sm font-semibold tracking-widest uppercase">
            Testimonios
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Qué Dicen Nuestros Clientes
          </h2>
        </motion.div>

        <div className="block lg:hidden pb-8">
          <TestimonialCarousel
            testimonials={testimonialCards}
            showArrows={true}
            showDots={true}
            className="max-w-md mx-auto"
          />
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-6 lg:gap-8">
          {testimonialQuotes.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border p-8 hover:scale-[1.01] transition-transform"
              style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-card)", boxShadow: "var(--card-shadow)" }}
            >
              <Quote className="w-8 h-8 mb-4" style={{ color: "rgba(245, 158, 11, 0.2)" }} />
              <p className="leading-relaxed mb-6 italic" style={{ color: "var(--text-muted)" }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: "linear-gradient(135deg, var(--accent-light), var(--accent-gradient-to))", color: "var(--bg-primary)" }}>
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                    {testimonial.author}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-dimmed)" }}>{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
