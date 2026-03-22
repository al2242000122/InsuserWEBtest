"use client";

import { Home, Users, Briefcase, MessageSquare, Phone } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";

const navItems = [
  {
    name: "Inicio",
    url: "#inicio",
    icon: Home,
  },
  {
    name: "Nosotros",
    url: "#nosotros",
    icon: Users,
  },
  {
    name: "Servicios",
    url: "#servicios",
    icon: Briefcase,
  },
  {
    name: "Clientes",
    url: "#clientes",
    icon: MessageSquare,
  },
  {
    name: "Contacto",
    url: "#contacto",
    icon: Phone,
  },
];

export function BottomNav() {
  return <AnimeNavBar items={navItems} defaultActive="Inicio" />;
}
