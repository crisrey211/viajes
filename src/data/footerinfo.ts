import { Briefcase } from "lucide-react";

interface Link {
  text: string;
  href: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>; // Icono opcional (componente SVG)
}

interface FooterLinkProps {
  title: string;
  links: Link[];
}

export const footerLinks: FooterLinkProps[] = [
  {
    title: "Atención al cliente",
    links: [
      { text: "Contáctanos", href: "/contacto" },
      { text: "Aviso de privacidad", href: "/privacidad" },
      { text: "Términos y condiciones", href: "/terminos" },
      { text: "Política de cookies", href: "/cookies" },
    ],
  },
  {
    title: "Sobre nosotros",
    links: [
      { text: "Quiénes somos", href: "/quienes-somos" },
      { text: "Programa de afiliados", href: "/afiliados" },
    ],
  },
  {
    title: "Síguenos",
    links: [
      { text: "Facebook", href: "https://facebook.com", icon: Briefcase },
      { text: "Whatsapp", href: "https://whatsapp.com", icon: Briefcase },
      { text: "Telegram", href: "https://telegram.org", icon: Briefcase },
    ],
  },
];
