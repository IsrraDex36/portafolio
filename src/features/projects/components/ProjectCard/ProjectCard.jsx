import { ExternalLink, Github } from "lucide-react";
import { techIcons } from '../../data/techIcons';
import FadeContent from "@/components/ui/FadeContent/FadeContent";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  status
}) {
  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
      <div className="group relative overflow-hidden bg-black/40 backdrop-blur-lg border border-white/10 w-[380px] h-[550px] rounded-2xl flex flex-col">
        
        {/* Efecto glassmorphism mejorado */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        {/* Imagen con overlay mejorado */}
        <div className="relative overflow-hidden w-full h-[280px]">
          <img
            src={image || "/placeholder.svg"}
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay con gradiente sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        </div>

        {/* Contenido con mejor espaciado */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight leading-tight">
              {title}
            </h3>
            
            <div className="relative">
              <p className="text-gray-300/90 text-sm leading-relaxed mb-4 h-[120px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/30">
                {description}
              </p>
              
              {/* Gradiente fade-out en el scroll */}
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Tecnologías con mejor diseño */}
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1.5 rounded-lg bg-black/50 text-gray-200 flex items-center gap-1.5 hover:bg-black/60 transition-all duration-300 backdrop-blur-sm border border-white/10"
              >
                <span className="text-gray-300 opacity-80">
                  {techIcons[tech] || null}
                </span>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer mejorado - solo visible cuando no hay hover en imagen */}
        <div className="px-6 pb-6 flex gap-3 justify-center">
          {status ? (
            <p className="text-gray-400 text-sm text-center italic">
              {status}
            </p>
          ) : (
            <>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-black/50 hover:bg-black/60 backdrop-blur-sm text-gray-100 hover:text-white transition-all duration-300 text-sm px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Proyecto
                </a>
              )}

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-black/50 hover:bg-black/60 backdrop-blur-sm text-gray-100 hover:text-white transition-all duration-300 text-sm px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/20"
                >
                  <Github className="w-4 h-4" />
                  Ver Código
                </a>
              )}
            </>
          )}
        </div>

      </div>
    </FadeContent>
  );
}
