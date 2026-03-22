"use client";

import { useState } from "react";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--border-color)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="https://insuser.mx/images/xlogo-insuser.jpg.pagespeed.ic.NOD3AKGdyr.webp"
              alt="International Support Services"
              className="h-12 w-auto rounded"
            />
            <div className="hidden sm:block">
              <p className="font-semibold text-sm leading-tight" style={{ color: "var(--text-primary)" }}>International Support</p>
              <p style={{ color: "var(--accent)" }} className="text-xs tracking-wider">SERVICES, S.C.</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-500 transition-colors text-sm font-medium tracking-wide"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors border"
              style={{ borderColor: "var(--border-color)", color: "var(--text-muted)" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="tel:+525552437395"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              style={{ backgroundColor: "var(--accent)", color: "var(--bg-primary)" }}
            >
              <Phone className="w-4 h-4" />
              (55) 5243-7395
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors border"
              style={{ borderColor: "var(--border-color)", color: "var(--text-muted)" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: "var(--text-muted)" }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block hover:text-amber-500 transition-colors text-sm font-medium py-2"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+525552437395"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold w-fit"
              style={{ backgroundColor: "var(--accent)", color: "var(--bg-primary)" }}
            >
              <Phone className="w-4 h-4" />
              (55) 5243-7395
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
