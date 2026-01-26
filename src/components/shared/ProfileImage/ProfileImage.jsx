import React, { useState, useEffect, useRef, useCallback } from "react";
import profileImage from "@/assets/img/me.png";
import BlurText from "@/components/BlurText/BlurText";
import FadeContent from "@/components/FadeContent/FadeContent";

export default function AboutMe() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [typedText, setTypedText] = useState("");
  const commands = useRef([
    'echo "ING titulado en desarrollo de software"',
    'cat stack.txt',
    'printf "ship rápido, UI limpia, foco en valor\\n"'
  ]);
  const typingInterval = useRef(null);
  const timeoutRef = useRef(null);

  // Cursor parpadeante
  useEffect(() => {
    const blink = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(blink);
  }, []);

  // Animación de tipeo con cleanup
  const typeCommand = useCallback(() => {
    const command = commands.current[currentCommand];
    let idx = 0;
    setTypedText("");

    typingInterval.current = setInterval(() => {
      if (idx < command.length) {
        setTypedText(command.slice(0, idx + 1));
        idx++;
      } else {
        clearInterval(typingInterval.current);
        timeoutRef.current = setTimeout(() => {
          setCurrentCommand((prev) => (prev + 1) % commands.current.length);
        }, 2000);
      }
    }, 100);
  }, [currentCommand]);

  useEffect(() => {
    timeoutRef.current = setTimeout(typeCommand, 1000);
    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(typingInterval.current);
    };
  }, [typeCommand]);

  return (
    <section
      className="w-full flex justify-center px-4 py-20 bg-black"
      aria-labelledby="aboutme-heading"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Texto */}
        <FadeContent duration={800} delay={200} threshold={0.2} className="text-left">
          <BlurText
            id="aboutme-heading"
            text="Sobre mí"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight mb-6"
          />
          <div className="space-y-4 text-gray-300">
            <p>
              Soy <strong className="text-white">Jonathan Israel Caballero Morales</strong> ("<em>Isrra</em>" para los amigos), con una mentalidad de aprendizaje continuo desde mis 15 años, orientado a soluciones reales y escalables.
            </p>
            <p>
              Colaboré en <strong className="text-white">Clever Cloud</strong>, mejorando proyectos con foco en calidad, orden y comunicación.
            </p>
            <p>
              Mi objetivo es formar parte de equipos donde la creatividad y el impacto importen, aportando mi propuesta diferencial.
            </p>
          </div>
        </FadeContent>

        {/* Terminal Card - MINIMALISTA */}
        <FadeContent duration={800} delay={400} threshold={0.2} className="flex justify-center md:justify-end">
          <div className="relative w-[320px] sm:w-[400px] md:w-[480px]">

            {/* Card principal - diseño limpio */}
            <div className="rounded-2xl overflow-hidden bg-gray-950 border border-gray-800/50 shadow-xl hover:border-gray-700/70 transition-all duration-300">

              {/* Barra Terminal - minimalista */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-black/50 border-b border-gray-800/50">
                <div className="flex space-x-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
                </div>
                <span className="font-mono text-xs text-gray-400">isrra@portfolio — zsh</span>
                <div className="w-6" />
              </div>

              {/* Contenido Terminal */}
              <div className="p-6 sm:p-7 bg-black/30">

                {/* Header con foto */}
                <div className="flex flex-col sm:flex-row items-center gap-5 mb-7">
                  <img
                    src={profileImage}
                    alt="Foto de Jonathan Israel Caballero"
                    className="h-20 w-20 rounded-xl object-cover shadow-lg ring-1 ring-gray-800 hover:ring-gray-700 transition-all duration-300"
                    loading="lazy"
                  />

                  <div className="text-center sm:text-left min-w-0 flex-1">
                    <p className="font-mono text-xs text-emerald-400 mb-1.5">
                      ~/about
                    </p>
                    <h3 className="text-white font-semibold text-lg sm:text-xl leading-tight mb-1.5">
                      Jonathan Israel Caballero Morales
                    </h3>
                    <p className="text-gray-400 text-sm">
                      ING titulado en desarrollo de software
                    </p>
                  </div>
                </div>

                {/* Separador simple */}
                <div className="h-px bg-gray-800/50 mb-6" />

                {/* Terminal Interactive */}
                <div className="space-y-4 font-mono text-sm">
                  {/* Prompt line */}
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">$</span>
                    <span className="text-gray-300">{typedText}</span>
                    {showCursor && <span className="text-emerald-400 animate-pulse">|</span>}
                  </div>

                  {/* Output */}
                  <div className="ml-4 space-y-4">
                    <p className="text-gray-200">
                      ING titulado en desarrollo de software
                    </p>

                    {/* Tech Stack - simple y limpio */}
                    <div className="flex flex-wrap gap-2">
                      {['JS', 'TS', 'Vue', 'React', 'Node'].map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-md text-emerald-300 text-xs font-medium transition-colors duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Quote simple */}
                    <p className="italic text-gray-300 border-l-2 border-gray-800 pl-4">
                      "ship rápido, UI limpia, foco en valor"
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
