"use client";

export function Footer() {
  return (
    <footer className="py-12 border-t" style={{ backgroundColor: "var(--footer-bg)", borderColor: "var(--border-color)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://insuser.mx/images/xlogo-insuser.jpg.pagespeed.ic.NOD3AKGdyr.webp"
              alt="International Support Services"
              className="h-10 w-auto rounded"
            />
            <div>
              <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>International Support Services, S.C.</p>
              <p className="text-xs" style={{ color: "var(--text-dimmed)" }}>Asesoría Fiscal y Contable de Élite</p>
            </div>
          </div>

          <div className="flex gap-8">
            {["Inicio", "Nosotros", "Servicios", "Clientes", "Contacto"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm transition-colors hover:text-amber-500"
                style={{ color: "var(--text-dimmed)" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 text-center" style={{ borderTop: "1px solid var(--border-color)" }}>
          <p className="text-sm" style={{ color: "var(--text-dimmed)" }}>
            &copy; {new Date().getFullYear()} International Support Services, S.C. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
