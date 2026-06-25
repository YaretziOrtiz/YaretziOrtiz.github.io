import { Github, Instagram, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/YaretziOrtiz",
    label: "GitHub",
  },

  {
    icon: Instagram,
    href: "https://www.instagram.com/o_yaretzi/",
    label: "Instagram",
  },

  {
    icon: Mail,
    href: "mailto:ortizyarezti@gmail.com",
    label: "Correo",
  },
];

const footerLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              YO<span className="text-primary">.</span>
            </a>

            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Yaretzi Ortiz. Todos los derechos reservados.
            </p>
          </div>

          {/* Navegación */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Redes */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Extra */}
        <div className="mt-8 text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
          Hecho con <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />{" "}
          por Yaretzi Ortiz
        </div>
      </div>
    </footer>
  );
};