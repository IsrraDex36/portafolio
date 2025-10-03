import React, { useState, useEffect, useRef, useCallback } from "react";
import profileImage from "@assets/img/me.png";
import BlurText from "@components/BlurText/BlurText";
import FadeContent from "@components/FadeContent/FadeContent";

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
      className="w-full flex justify-center px-4 py-20 bg-gradient-to-tr from-gray-900 to-black"
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

        {/* Terminal Card */}
        <FadeContent duration={800} delay={400} threshold={0.2} className="flex justify-center md:justify-end">
          <div className="relative w-[320px] sm:w-[400px] md:w-[480px]">
            <div className="rounded-2xl overflow-hidden backdrop-blur-xl bg-gray-900/80 border border-gray-700 shadow-xl">

              {/* Barra Terminal */}
              <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-b border-gray-700">
                <div className="flex space-x-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-xs text-gray-400">isrra@portfolio — zsh</span>
                <div className="w-6" />
              </div>

              {/* Contenido Terminal */}
              <div className="p-6 bg-gradient-to-b from-black/80 to-gray-900/80">
                {/* Header Terminal */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                  <img
                    src={profileImage}
                    alt="Foto de Jonathan Israel Caballero"
                    className="h-24 w-24 sm:h-16 sm:w-16 rounded-xl object-cover shadow-lg"
                    loading="lazy"
                  />
                  <div className="text-center sm:text-left min-w-0">
                    <p className="font-mono text-[10px] sm:text-[11px] text-emerald-400 mb-1">
                      ~/about
                    </p>
                    <h3 className="text-white font-semibold text-base sm:text-lg leading-tight mb-1">
                      <span className="block sm:inline truncate sm:truncate-none">
                        Jonathan Israel Caballero Morales
                      </span>
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      ING titulado en desarrollo de software
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gray-700/50 mb-6" />

                {/* Terminal Interactive */}
                <div className="space-y-4 font-mono text-sm text-gray-200">
                  <div className="flex items-center">
                    <span className="text-emerald-400 mr-2">$</span>
                    <span>{typedText}</span>
                    {showCursor && <span className="text-emerald-400 animate-pulse">|</span>}
                  </div>

                  <div className="ml-4 space-y-3">
                    <p className="text-gray-100">ING titulado en desarrollo de software</p>
                    <div className="flex flex-wrap gap-2">
                      {['JS','TS','Vue','React','Node'].map(t => (
                        <span key={t} className="px-3 py-1 bg-emerald-500/20 rounded font-medium text-emerald-300 text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="italic text-gray-100">"ship rápido, UI limpia, foco en valor"</p>
                  </div>
                </div>
              </div>

              {/* Textura */}
              <div
                className="pointer-events-none absolute inset-0 opacity-5 mix-blend-overlay"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '8px 8px' }}
              />

            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
