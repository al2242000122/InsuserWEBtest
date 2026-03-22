"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "40+", label: "Anos de Experiencia" },
  { value: "7", label: "Areas de Servicio" },
  { value: "2008", label: "Fundada" },
  { value: "100%", label: "Compromiso" },
];

function useReveal() {
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
  return { ref, visible };
}

export function Stats() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: "#0a1628" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div
                className="text-4xl md:text-5xl font-black mb-2"
                style={{ color: "#c8a84e" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
