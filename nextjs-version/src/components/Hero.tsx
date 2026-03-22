"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MoveRight, PhoneCall } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const seekingRef = useRef(false);
  const pendingTimeRef = useRef<number | null>(null);

  const doSeek = useCallback((t: number) => {
    const video = videoRef.current;
    if (!video || !videoReady || !isFinite(t)) return;
    if (seekingRef.current) {
      pendingTimeRef.current = t;
      return;
    }
    seekingRef.current = true;
    try {
      video.currentTime = t;
    } catch {
      seekingRef.current = false;
    }
  }, [videoReady]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onSeeked = () => {
      seekingRef.current = false;
      if (pendingTimeRef.current !== null) {
        const t = pendingTimeRef.current;
        pendingTimeRef.current = null;
        doSeek(t);
      }
    };

    video.addEventListener("seeked", onSeeked);
    return () => video.removeEventListener("seeked", onSeeked);
  }, [doSeek]);

  // Load video via blob for better seeking
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    fetch("/assets/hero.mp4")
      .then((r) => r.blob())
      .then((blob) => {
        video.src = URL.createObjectURL(blob);
        video.load();
      })
      .catch(() => {
        video.src = "/assets/hero.mp4";
        video.load();
      });
  }, []);

  // Video metadata ready
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => {
      setVideoReady(true);
      video.currentTime = 0;
    };

    video.addEventListener("loadedmetadata", onLoaded);
    return () => video.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  // Scroll-driven video scrub
  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    if (!hero || !video) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          if (!videoReady || !video.duration) return;
          const rect = hero.getBoundingClientRect();
          const scrollable = hero.offsetHeight - window.innerHeight;
          if (scrollable <= 0) return;
          const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
          const targetTime = progress * video.duration;
          if (Math.abs(video.currentTime - targetTime) > 0.03) {
            doSeek(targetTime);
          }
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [videoReady, doSeek]);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative"
      style={{ height: "300vh", backgroundColor: "#0a1628" }}
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
      >
        {/* Video */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-600"
          style={{ opacity: videoReady ? 1 : 0, zIndex: 1 }}
        />

        {/* Fallback Image */}
        {!videoReady && (
          <img
            src="/assets/final.png"
            alt="INSUSER Soluciones Financieras"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
        )}

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(10,22,40,0.6) 0%, rgba(10,22,40,0.3) 40%, rgba(10,22,40,0.7) 100%)",
            zIndex: 2,
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center max-w-[800px] px-8">
          <span
            className="inline-block text-sm font-medium uppercase tracking-widest mb-6"
            style={{ color: "#c8a84e" }}
          >
            International Support Services, S.C.
          </span>

          <h1
            className="text-white font-bold mb-6 leading-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
          >
            Soluciones{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #c8a84e, #f5c842)" }}
            >
              Financieras
            </span>{" "}
            para su Empresa
          </h1>

          <p className="text-lg max-w-[600px] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
            Optimizacion Financiera, Seguridad Fiscal y Eficiencia Operacional. Mas de 40 anos de experiencia profesional a su servicio.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/525620334659"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all shadow-lg"
              style={{ background: "linear-gradient(135deg, #c8a84e, #f5c842)", color: "#0a1628" }}
            >
              <PhoneCall className="w-5 h-5" />
              Contactar Ahora
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 transition-all"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}
            >
              Nuestros Servicios
              <MoveRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ zIndex: 3, color: "rgba(255,255,255,0.5)" }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div
            className="w-5 h-5 animate-bounce"
            style={{
              borderRight: "2px solid rgba(255,255,255,0.5)",
              borderBottom: "2px solid rgba(255,255,255,0.5)",
              transform: "rotate(45deg)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
