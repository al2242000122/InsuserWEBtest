"use client";

import { useEffect, useRef, useState } from "react";

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
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

const whyUs = [
  { icon: "\u{1F512}", title: "Confianza", desc: "Avalados por nuestra experiencia, velamos por la seguridad e integridad de sus recursos." },
  { icon: "\u26A1", title: "Eficiencia", desc: "Desarrollamos e implementamos herramientas para optimizar los resultados de su negocio." },
  { icon: "\u{1F6E0}", title: "Personalizacion", desc: "Flexibilidad dirigida a atender sus necesidades acorde a su operacion." },
  { icon: "\u{1F30E}", title: "Alcance Global", desc: "Preparados a nivel nacional e internacional con cumplimiento en tratados internacionales." },
];

const values = [
  { icon: "\u{1F6E1}", title: "Seguridad" },
  { icon: "\u2696", title: "Integridad" },
  { icon: "\u{1F91D}", title: "Honestidad" },
  { icon: "\u{1F64C}", title: "Respeto" },
  { icon: "\u2764", title: "Empatia" },
  { icon: "\u{1F4C8}", title: "Productividad" },
  { icon: "\u{1F48E}", title: "Creacion de Valor" },
  { icon: "\u26A1", title: "Eficiencia" },
  { icon: "\u{1F4A1}", title: "Creatividad" },
  { icon: "\u{1F30E}", title: "Vision de Negocio" },
];

const timeline = [
  { num: "01", title: "Servicio Personalizado", desc: "De acuerdo a las necesidades de la empresa y de los ejecutivos a cargo." },
  { num: "02", title: "Vision Integral", desc: "Una vision amplia e integral de negocios en la ejecucion de los servicios." },
  { num: "03", title: "Red de Especialistas", desc: "Trato cercano con especialistas afines o complementarios a los servicios que ofrecemos." },
  { num: "04", title: "Conocimiento Global", desc: "Entendimiento del ambito fiscal, contable y financiero nacional e internacional." },
];

export function About() {
  return (
    <>
      {/* Historia */}
      <section id="nosotros" className="py-24 lg:py-32" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <RevealDiv>
                <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#c8a84e" }}>
                  Nuestra Historia
                </span>
              </RevealDiv>
              <RevealDiv>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6" style={{ color: "#0a1628", fontFamily: "'Playfair Display', serif" }}>
                  International Support Services, S.C.
                </h2>
              </RevealDiv>
              <RevealDiv>
                <p className="mb-4 leading-relaxed" style={{ color: "#555" }}>
                  Con la experiencia de 30 anos de servicio exitoso en importantes empresas internacionales, el fundador con un grupo de profesionales afines, decide ofrecer servicios profesionales de manera independiente desde febrero del 2008, creando International Support Services S.C. como un despacho de soporte y asesoria en: Impuestos Nacionales e Internacionales, Auditoria, Estimulos Fiscales, Estrategias de Optimizacion en Finanzas de Gestion Operativa y Contabilidad.
                </p>
              </RevealDiv>
              <RevealDiv>
                <p className="mb-4 leading-relaxed" style={{ color: "#555" }}>
                  El haber colaborado exitosamente en empresas internacionales lideres en desempeno a nivel mundial, forjo en el fundador una actitud proactiva a la mejora continua, la cual ha transmitido a los profesionales que integran los grupos de trabajo del despacho.
                </p>
              </RevealDiv>
              <RevealDiv>
                <p className="leading-relaxed" style={{ color: "#555" }}>
                  Con el paso de los anos, esa actitud proactiva se ha convertido en una habilidad natural que ayuda a definir de manera clara y practica, la forma ideal en la que las empresas deben operar su administracion Financiera, Fiscal y Contable.
                </p>
              </RevealDiv>
            </div>
            <RevealDiv className="relative">
              <img src="/assets/final.png" alt="INSUSER Oficinas" className="rounded-2xl w-full shadow-lg" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-4xl font-black" style={{ color: "#c8a84e" }}>40+</div>
                <div className="text-sm font-medium" style={{ color: "#555" }}>Anos de experiencia</div>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* Vision y Mision */}
      <section className="py-24" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RevealDiv className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="text-3xl block mb-4">{"\u{1F441}"}</span>
              <h4 className="text-xl font-bold mb-3" style={{ color: "#0a1628" }}>Vision</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                Ser reconocidos como la mejor opcion de despacho de asesoria Financiera, Fiscal, Contable, por la seguridad de nuestras colaboraciones, el compromiso en la solucion de problemas, el excelente balance entre el costo de nuestros servicios y el valor agregado recibido, con base al estricto respeto de las Leyes, Reglamentos y las Normas de Informacion Financiera vigentes.
              </p>
            </RevealDiv>
            <RevealDiv delay={150} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="text-3xl block mb-4">{"\u{1F3AF}"}</span>
              <h4 className="text-xl font-bold mb-3" style={{ color: "#0a1628" }}>Mision</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                Colaborar en el propio exito de nuestros clientes, con conocimientos y habilidades tecnicas, encaminados a mejorar su seguridad: Financiera, Fiscal y Contable; su participacion de mercado; sus flujos de efectivo y como en consecuencia, en el fomento de buenos resultados, con base a una asociacion profesional productiva.
              </p>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* Por que elegirnos */}
      <section className="py-24" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealDiv className="text-center mb-2">
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#c8a84e" }}>
              Por que elegirnos
            </span>
          </RevealDiv>
          <RevealDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0a1628", fontFamily: "'Playfair Display', serif" }}>
              Experiencia que genera resultados
            </h2>
          </RevealDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <RevealDiv key={item.title} delay={i * 150} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h4 className="text-lg font-bold mb-2" style={{ color: "#0a1628" }}>{item.title}</h4>
                <p className="text-sm" style={{ color: "#555" }}>{item.desc}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealDiv className="text-center mb-2">
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#c8a84e" }}>
              Filosofia
            </span>
          </RevealDiv>
          <RevealDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0a1628", fontFamily: "'Playfair Display', serif" }}>
              Nuestros Valores
            </h2>
          </RevealDiv>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map((v, i) => (
              <RevealDiv key={v.title} delay={(i % 5) * 100} className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow">
                <span className="text-2xl block mb-3">{v.icon}</span>
                <h4 className="text-sm font-bold" style={{ color: "#0a1628" }}>{v.title}</h4>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Como lo hacemos */}
      <section className="py-24" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealDiv className="text-center mb-2">
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#c8a84e" }}>
              Nuestro Enfoque
            </span>
          </RevealDiv>
          <RevealDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0a1628", fontFamily: "'Playfair Display', serif" }}>
              Como lo hacemos
            </h2>
          </RevealDiv>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <RevealDiv key={t.num} delay={i * 100} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10" style={{ backgroundColor: "#c8a84e" }}>
                    {t.num}
                  </div>
                  <div className="pt-3">
                    <h4 className="text-lg font-bold mb-1" style={{ color: "#0a1628" }}>{t.title}</h4>
                    <p className="text-sm" style={{ color: "#555" }}>{t.desc}</p>
                  </div>
                </RevealDiv>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
