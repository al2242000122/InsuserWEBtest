"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Grupo Roche Syntex", img: "https://insuser.mx/images/clientes/cliente-01.jpg" },
  { name: "Volkswagen de México", img: "https://insuser.mx/images/clientes/cliente-02.jpg" },
  { name: "Grupo Tornel", img: "https://insuser.mx/images/clientes/cliente-03.jpg" },
  { name: "Grupo Santos CMI", img: "https://insuser.mx/images/clientes/cliente-04.jpg" },
  { name: "Grupo Lakeside", img: "https://insuser.mx/images/clientes/cliente-05.jpg" },
  { name: "Mack Trucks", img: "https://insuser.mx/images/clientes/cliente-06.jpg" },
  { name: "Grupo Scorpión", img: "https://insuser.mx/images/clientes/cliente-07.jpg" },
  { name: "Grupo Havells", img: "https://insuser.mx/images/clientes/cliente-08.jpg" },
  { name: "Grupo SDI", img: "https://insuser.mx/images/clientes/cliente-09.jpg" },
  { name: "Grupo Doctor Readdy", img: "https://insuser.mx/images/clientes/cliente-10.jpg" },
  { name: "Grupo Papel", img: "https://insuser.mx/images/clientes/cliente-11.jpg" },
  { name: "Grupo Multisistemas", img: "https://insuser.mx/images/clientes/cliente-12.jpg" },
  { name: "Grupo Radio Mil", img: "https://insuser.mx/images/clientes/cliente-13.jpg" },
  { name: "Grupo Grisi", img: "https://insuser.mx/images/clientes/cliente-14.jpg" },
  { name: "Grupo Signa", img: "https://insuser.mx/images/clientes/cliente-15.jpg" },
  { name: "Grupo Finafilms", img: "https://insuser.mx/images/clientes/cliente-16.jpg" },
];

const textOnlyClients = ["Grupo Quan", "Grupo SANDI", "Grupo Automotriz San Ángel", "Grupo Progreso"];

export function Clients() {
  const duplicated = [...clients, ...clients];

  return (
    <section id="clientes" className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span style={{ color: "var(--accent)" }} className="text-sm font-semibold tracking-widest uppercase">
            Cartera de Clientes
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Principales Clientes
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--text-muted)" }}>
            Algunas de las empresas de renombre a las que proveemos servicio
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to right, var(--bg-secondary), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to left, var(--bg-secondary), transparent)" }} />

        <div className="flex animate-marquee">
          {duplicated.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-4 w-40 h-24 rounded-xl border flex items-center justify-center p-4 transition-colors"
              style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-card)" }}
            >
              <img
                src={client.img}
                alt={client.name}
                className="max-h-16 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                style={{ filter: "var(--client-filter)" }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "var(--client-filter-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.filter = "var(--client-filter)")}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-wrap justify-center gap-4">
          {textOnlyClients.map((name) => (
            <span
              key={name}
              className="px-5 py-2.5 rounded-full border text-sm font-medium"
              style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-card)", color: "var(--text-muted)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
