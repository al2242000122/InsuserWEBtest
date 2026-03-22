"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "\u{1F4C8}",
    title: "Impuestos",
    description: "Asesoria en cumplimiento de legislacion fiscal nacional e internacional. Gestion y diagnostico de obligaciones fiscales. Atencion a fusiones, escisiones y reestructuraciones corporativas. Atencion de auditorias fiscales y revisiones de autoridades. Tramites de devolucion de impuestos. Litigio en materia fiscal.",
    wa: "Hola%2C%20me%20interesa%20el%20servicio%20de%20Impuestos",
  },
  {
    icon: "\u{1F50D}",
    title: "Auditoria",
    description: "De estados financieros para efectos fiscales y financieros. Operacionales y administrativas. Informes para Bolsas de Valores. Asesoria en NIFs nacionales e internacionales. Gestion de norma de calidad. Evaluacion de control interno. Forense y deteccion de fraudes.",
    wa: "Hola%2C%20me%20interesa%20el%20servicio%20de%20Auditoria",
  },
  {
    icon: "\u{1F31F}",
    title: "Estimulos Fiscales",
    description: "Deteccion de oportunidades para recibir estimulos fiscales. Diagnostico de factibilidad. Definicion de proyectos con mayor probabilidad de obtencion. Integracion y presentacion de solicitudes. Seguimiento de cumplimiento posterior a la obtencion del beneficio.",
    wa: "Hola%2C%20me%20interesa%20el%20servicio%20de%20Estimulos%20Fiscales",
  },
  {
    icon: "\u{1F4B0}",
    title: "Estrategias de Finanzas en Gestion Operativa",
    description: "Evaluacion de situacion financiera provocada por la gestion operativa. Deteccion de areas de oportunidad. Diseno de estrategia de optimizacion. Desarrollo e implementacion de optimizacion de procesos. Monitoreo mensual o trimestral. Evaluacion y optimizacion financiera de proyectos.",
    wa: "Hola%2C%20me%20interesa%20el%20servicio%20de%20Estrategias%20de%20Finanzas",
  },
  {
    icon: "\u{1F4DD}",
    title: "Contabilidad",
    description: "Gestion contable interna o externa. Asesoria en NIFs nacionales e internacionales. Estados financieros multimoneda y multiidioma. Reportes para Bolsa de Valores. Contabilidad inflacionaria, impuestos diferidos, beneficios a empleados. Peritajes y depuraciones contables.",
    wa: "Hola%2C%20me%20interesa%20el%20servicio%20de%20Contabilidad",
  },
  {
    icon: "\u{1F680}",
    title: "Proyectos Especiales",
    description: "Valuacion de empresas. Analisis, evaluacion y diagnostico del soporte documental legal de operaciones. Servicio personalizado con vision empresarial amplia, red de especialistas complementarios y conocimiento del ambito nacional e internacional.",
    wa: "Hola%2C%20me%20interesa%20el%20servicio%20de%20Proyectos%20Especiales",
  },
  {
    icon: "\u{1F310}",
    title: "Precios de Transferencia",
    description: "Documentacion de precios de transferencia. Optimizacion de estructura de funciones y riesgos. Modelos economicos y estudios de reestructuracion. Acuerdos anticipados de precios. Analisis economicos de transacciones locales. Valuacion de acciones e intangibles. Esquemas de maquila.",
    wa: "Hola%2C%20me%20interesa%20el%20servicio%20de%20Precios%20de%20Transferencia",
  },
];

const process = [
  { title: "Diagnostico", desc: "Evaluamos su situacion actual fiscal, contable y financiera para identificar areas de mejora." },
  { title: "Estrategia", desc: "Disenamos un plan personalizado acorde a sus necesidades y objetivos empresariales." },
  { title: "Implementacion", desc: "Ejecutamos las soluciones con nuestro equipo especializado y tecnologia de punta." },
  { title: "Seguimiento", desc: "Monitoreo continuo para asegurar resultados optimos y ajustes oportunos." },
];

function RevealDiv({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function Services() {
  return (
    <>
      {/* Services Grid */}
      <section id="servicios" className="py-24 lg:py-32" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealDiv className="text-center mb-4">
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#c8a84e" }}>
              Nuestros Servicios
            </span>
          </RevealDiv>
          <RevealDiv className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0a1628", fontFamily: "'Playfair Display', serif" }}>
              Soluciones integrales para su negocio
            </h2>
          </RevealDiv>
          <RevealDiv className="text-center mb-12">
            <p className="text-lg max-w-[800px] mx-auto" style={{ color: "#555" }}>
              Estamos preparados a nivel nacional e internacional para brindar servicios de alta calidad, con actitud proactiva y la capacidad de dar solucion a problemas de manera inmediata.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <RevealDiv key={s.title} delay={i % 3 * 150} className="rounded-2xl border border-gray-200 p-8 bg-white hover:shadow-xl transition-shadow">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#0a1628" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#555" }}>{s.description}</p>
                <a
                  href={`https://wa.me/525620334659?text=${s.wa}`}
                  target="_blank"
                  rel="noopener"
                  className="text-sm font-semibold inline-flex items-center gap-1 transition-colors hover:brightness-110"
                  style={{ color: "#c8a84e" }}
                >
                  Cotizar &rarr;
                </a>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealDiv className="text-center mb-2">
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#c8a84e" }}>
              Nuestro Proceso
            </span>
          </RevealDiv>
          <RevealDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0a1628", fontFamily: "'Playfair Display', serif" }}>
              Como trabajamos
            </h2>
          </RevealDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <RevealDiv key={p.title} delay={i * 150} className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold" style={{ backgroundColor: "#c8a84e" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: "#0a1628" }}>{p.title}</h4>
                <p className="text-sm" style={{ color: "#555" }}>{p.desc}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
