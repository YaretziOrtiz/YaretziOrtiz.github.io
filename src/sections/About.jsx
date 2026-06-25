import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Creando aplicaciones modernas y funcionales con tecnologías actuales.",
  },
  {
    icon: Rocket,
    title: "Aprendizaje Constante",
    description:
      "Siempre explorando nuevas herramientas y mejorando mis habilidades.",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description:
      "Colaborando con otras personas para desarrollar mejores proyectos.",
  },
  {
    icon: Lightbulb,
    title: "Creatividad",
    description:
      "Buscando soluciones innovadoras y experiencias atractivas para el usuario.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre Mí
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Desarrollando ideas,
              <span className="font-serif italic font-normal text-white">
                {" "}
                un proyecto a la vez.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Hola, soy Yaretzi Ortiz Garcia. Soy estudiante y desarrolladora
                apasionada por la tecnología y el desarrollo de software.
              </p>

              <p>
                Tengo experiencia trabajando con tecnologías como React,
                Flutter, Python, Java y bases de datos como PostgreSQL y
                MongoDB. Me gusta crear aplicaciones modernas, funcionales y
                visualmente atractivas.
              </p>

              <p>
                Disfruto aprender nuevas tecnologías, resolver problemas y
                seguir mejorando mis habilidades en programación y desarrollo
                web.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mi objetivo es desarrollar proyectos útiles, creativos y que
                generen un impacto positivo en las personas."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};