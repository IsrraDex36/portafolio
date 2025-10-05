import React, { useState, useCallback } from "react";
import profileImage from "@assets/img/me.png";
import RandomizedTextEffect from "@components/DecryptedText/DecryptedText";
import DownloadDialog from "@components/DownloadDialog/DownloadDialog";
import FloatingIcons from "@components/FloatingIcons/FloatingIcons";
import { Mail, LinkedinIcon, GithubIcon, FileText } from "lucide-react";

// Clases reutilizables para botones
const buttonBaseClasses = "inline-flex items-center gap-1.5 px-3 py-2 border rounded-xl text-xs transition-all duration-300 backdrop-blur-md shadow-lg";
const buttonSecondaryClasses = "bg-black/40 border-white/30 text-white shadow-black/20 hover:bg-black/60 hover:border-white/40 hover:shadow-xl hover:shadow-black/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50";
const buttonPrimaryClasses = "bg-black/60 border-white text-white shadow-white/20 hover:bg-white hover:text-black hover:shadow-xl hover:shadow-white/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer";

const ProfileSection = () => {
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);

  const handleDownloadClick = useCallback(() => {
    setIsDownloadDialogOpen(true);
  }, []);

  const handleDownloadComplete = useCallback(() => {
    // Crear y ejecutar descarga
    const link = document.createElement("a");
    link.href = "/pdf/CV-JICM.pdf";
    link.download = "CV-JICM.pdf";
    link.setAttribute("aria-label", "Descargar CV de Jonathan Isrrael Caballero Morales");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setIsDownloadDialogOpen(false);
  }, []);

  return (
    <div className="text-white min-h-screen p-0">
      <div className="w-full min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-7xl mx-auto p-6 md:p-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 items-center">
          
          {/* Imagen de Perfil */}
          <div className="md:order-2 flex justify-center mb-4 md:mb-0">
            <div className="relative w-64 md:w-80 overflow-visible">
              <img
                src={profileImage}
                alt="Foto profesional de Jonathan Israel Caballero Morales, desarrollador Frontend especializado en React y Node.js"
                className="w-full h-auto rounded-full relative z-10"
                loading="lazy"
              />
              <FloatingIcons />
            </div>
          </div>

          {/* Información Personal */}
          <section className="md:order-1 text-center md:text-left" aria-labelledby="profile-heading">
            <header>
              <h1 id="profile-heading" className="text-3xl md:text-5xl leading-tight mb-4 md:mb-5">
                <RandomizedTextEffect text="Jonathan Israel Caballero Morales" />
              </h1>
            </header>

            {/* Badge de Rol */}
            <div className="mb-4 md:mb-6">
              <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-2 bg-black/30 border border-white rounded-full">
                <div 
                  className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse" 
                  aria-hidden="true"
                />
                <span className="text-xs tracking-wider uppercase">
                  Desarrollador Frontend
                </span>
              </div>
            </div>

            {/* Descripción */}
            <p className="text-sm md:text-base leading-relaxed text-gray-300 max-w-2xl mb-6 md:mb-8 mx-auto md:mx-0">
              Desarrollador Frontend especializado en <strong>React</strong> y <strong>Node.js</strong>, con experiencia construyendo aplicaciones escalables y mantenibles.
              Me enfoco en la arquitectura, el rendimiento y la calidad del código para entregar soluciones sólidas y eficientes.
            </p>

            {/* Botones de Contacto */}
            <nav aria-label="Enlaces de contacto y perfil profesional">
              <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                
                <a
                  href="mailto:jonathanisrrael3609@gmail.com"
                  className={`${buttonBaseClasses} ${buttonSecondaryClasses}`}
                  aria-label="Enviar email a jonathanisrrael3609@gmail.com"
                >
                  <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                  <span className="hidden sm:inline">Contáctame</span>
                  <span className="sm:hidden">Email</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/jonathan-ism"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBaseClasses} ${buttonSecondaryClasses}`}
                  aria-label="Ver perfil de LinkedIn de Jonathan Israel Caballero (se abre en nueva pestaña)"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/IsrraDex36"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBaseClasses} ${buttonSecondaryClasses}`}
                  aria-label="Ver repositorios de GitHub de IsrraDex36 (se abre en nueva pestaña)"
                >
                  <GithubIcon className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                  GitHub
                </a>

                <button
                  type="button"
                  onClick={handleDownloadClick}
                  className={`${buttonBaseClasses} ${buttonPrimaryClasses}`}
                  aria-label="Abrir diálogo para descargar CV en formato PDF"
                >
                  <FileText className=" w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                  <span className="hidden sm:inline">Descargar CV</span>
                  <span className="sm:hidden">CV</span>
                </button>

              </div>
            </nav>
          </section>
        </div>
      </div>

      {/* Modal de Descarga */}
      <DownloadDialog
        isOpen={isDownloadDialogOpen}
        onClose={handleCloseDialog}
        onComplete={handleDownloadComplete}
      />
    </div>
  );
};

export default ProfileSection;
