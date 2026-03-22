"use client";

import { useEffect, useRef, useState } from "react";

function RevealDiv({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
    }}>
      {children}
    </div>
  );
}

export function CTA() {
  return (
    <section className="py-24" style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a2a44 100%)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealDiv>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Impulsemos juntos el exito de su empresa
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Promovemos la seguridad fiscal legal y eficiencia operacional de tal forma que permita optimizar los resultados de su negocio.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/525620334659"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold transition-all hover:brightness-110"
              style={{ backgroundColor: "#25d366" }}
            >
              WhatsApp
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 text-white transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              Contacto
            </a>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
