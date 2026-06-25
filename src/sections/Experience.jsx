const experiences = [
  {
    period: "2025 — Actualidad",
    role: "Desarrolladora Frontend & Mobile",
    company: "Proyectos Personales",
    description:
      "Desarrollo de aplicaciones web y móviles modernas utilizando React, Flutter y tecnologías actuales. Enfocada en diseño aesthetic, experiencia de usuario y aplicaciones funcionales.",
    technologies: ["React", "Flutter", "Tailwind CSS", "MongoDB"],
    current: true,
  },

  {
    period: "2024 — 2025",
    role: "Desarrolladora Full Stack",
    company: "Sistema de Gestión Escolar",
    description:
      "Creación de un sistema completo con Flask y PostgreSQL para administrar estudiantes, usuarios, ventas y productos, incluyendo autenticación y manejo de base de datos.",
    technologies: ["Python", "Flask", "PostgreSQL", "Bootstrap"],
    current: false,
  },

  {
    period: "2024",
    role: "Desarrolladora de Aplicaciones Flutter",
    company: "Proyecto de Electrodomésticos",
    description:
      "Desarrollo de una aplicación móvil conectada con MongoDB Atlas para administrar electrodomésticos y productos mediante una interfaz moderna y responsive.",
    technologies: ["Flutter", "MongoDB Atlas", "Firebase", "Dart"],
    current: false,
  },

  {
    period: "2023 — 2024",
    role: "Diseñadora & Desarrolladora Web",
    company: "Portafolios y Sitios Web",
    description:
      "Diseño y desarrollo de interfaces modernas con enfoque aesthetic y responsive utilizando React, Tailwind CSS y animaciones suaves.",
    technologies: ["JavaScript", "React", "Tailwind CSS", "Figma"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Encabezado */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
            font-medium tracking-wider uppercase animate-fade-in"
          >
            Mi experiencia
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold
            mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experiencia que{" "}
            <span className="font-serif italic font-normal text-white">
              refleja mi crecimiento.
            </span>
          </h2>

          <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
          >
            Un recorrido por los proyectos y tecnologías con los que he
            trabajado mientras desarrollo mis habilidades como programadora y
            diseñadora frontend.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(216,167,255,0.8)]" />

          {/* Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Punto */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Contenido */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>

                    <p className="text-muted-foreground">
                      {exp.company}
                    </p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};