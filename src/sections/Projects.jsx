import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Aplicación de Casa Inteligente",
    description:
      "Aplicación móvil para controlar dispositivos inteligentes del hogar, incluyendo termostatos y electrodomésticos con monitoreo en tiempo real.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop",
    tags: ["Flutter", "MongoDB", "Firebase", "UI/UX"],
    link: "#",
    github: "https://github.com/YaretziOrtiz",
  },

  {
    title: "Tienda de Electrodomésticos",
    description:
      "Plataforma web para administrar inventario de electrodomésticos, control de stock y gestión de productos usando MongoDB.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "MongoDB", "Node.js", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/YaretziOrtiz",
  },

  {
    title: "Sistema de Gestión Escolar",
    description:
      "Sistema desarrollado con Flask y PostgreSQL para administrar estudiantes, usuarios, ventas y productos de manera eficiente.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "Flask", "PostgreSQL", "Bootstrap"],
    link: "#",
    github: "https://github.com/",
  },

  {
    title: "Portafolio Personal",
    description:
      "Sitio web moderno y aesthetic con animaciones suaves, diseño responsive y una experiencia visual elegante.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    link: "#",
    github: "https://github.com/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Encabezado */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Mis proyectos
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Proyectos que
            <span className="font-serif italic font-normal text-white">
              {" "}
              reflejan mi creatividad.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Algunos de los proyectos en los que he trabajado, combinando diseño
            moderno, funcionalidad y experiencias enfocadas en el usuario.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Imagen */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                />

                {/* Botones */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground 
                    group-hover:text-primary 
                    group-hover:translate-x-1 
                    group-hover:-translate-y-1 transition-all"
                  />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            Ver más proyectos
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};