"use client";

import { useEffect, useRef, useState, FormEvent } from "react";

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

const contactInfo = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
    ),
    title: "Telefono",
    value: "(55) 5243-7395",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    ),
    title: "WhatsApp",
    value: "Envie un mensaje directo",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><polyline points="2,3 12,13 22,3"/></svg>
    ),
    title: "Correo Electronico",
    value: "info@insuser.mx",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    title: "Oficinas",
    value: "Calle Moras No. 533-4, Col. Del Valle, Del. Benito Juarez, C.P. 03100, CDMX",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    title: "Horario",
    value: "Lunes a Viernes: 9:00 - 18:00",
  },
];

export function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = data.get("nombre") as string;
    const empresa = data.get("empresa") as string;
    const telefono = data.get("telefono") as string;
    const email = data.get("email") as string;
    const servicio = data.get("servicio") as string;
    const mensaje = data.get("mensaje") as string;

    let text = `*Nuevo Contacto desde Web INSUSER*\n\n`;
    text += `*Nombre:* ${nombre}\n`;
    if (empresa) text += `*Empresa:* ${empresa}\n`;
    text += `*Telefono:* ${telefono}\n`;
    if (email) text += `*Email:* ${email}\n`;
    if (servicio) text += `*Servicio:* ${servicio}\n`;
    text += `\n*Mensaje:*\n${mensaje}`;

    window.open(`https://wa.me/525620334659?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 lg:py-32" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info Card */}
          <RevealDiv className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-8" style={{ color: "#0a1628" }}>Informacion de Contacto</h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-1">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-sm" style={{ color: "#0a1628" }}>{item.title}</h4>
                    <p className="text-sm" style={{ color: "#555" }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/525620334659?text=Hola%2C%20me%20gustaria%20agendar%20una%20cita"
              target="_blank"
              rel="noopener"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "#25d366" }}
            >
              Escribir por WhatsApp
            </a>
          </RevealDiv>

          {/* Form */}
          <RevealDiv>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-8" style={{ color: "#0a1628" }}>Envienos un Mensaje</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium mb-1" style={{ color: "#333" }}>Nombre Completo *</label>
                  <input type="text" id="nombre" name="nombre" required placeholder="Su nombre" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium mb-1" style={{ color: "#333" }}>Empresa</label>
                  <input type="text" id="empresa" name="empresa" placeholder="Nombre de su empresa" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium mb-1" style={{ color: "#333" }}>Telefono *</label>
                  <input type="tel" id="telefono" name="telefono" required placeholder="(55) 0000-0000" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: "#333" }}>Correo Electronico</label>
                  <input type="email" id="email" name="email" placeholder="correo@ejemplo.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="servicio" className="block text-sm font-medium mb-1" style={{ color: "#333" }}>Servicio de Interes</label>
                <select id="servicio" name="servicio" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500 bg-white">
                  <option value="">Seleccione un servicio</option>
                  <option value="Impuestos">Impuestos</option>
                  <option value="Auditoria">Auditoria</option>
                  <option value="Estimulos Fiscales">Estimulos Fiscales</option>
                  <option value="Estrategias de Finanzas">Estrategias de Finanzas</option>
                  <option value="Contabilidad">Contabilidad</option>
                  <option value="Proyectos Especiales">Proyectos Especiales</option>
                  <option value="Precios de Transferencia">Precios de Transferencia</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-sm font-medium mb-1" style={{ color: "#333" }}>Mensaje *</label>
                <textarea id="mensaje" name="mensaje" required placeholder="Describa brevemente su necesidad..." rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500 resize-none" />
              </div>

              <button type="submit" className="w-full py-3 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: "#c8a84e" }}>
                Enviar por WhatsApp
              </button>
            </form>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}
