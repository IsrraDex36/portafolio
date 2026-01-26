// Componentes principales
import PrincipalComponent from '@/features/home/components/PrincipalComponent/PrincipalComponent';
import Skills from '@/features/home/components/Skills/Skills';
import Proyects from '@/features/projects/components/Proyects';
import ExperienceTimeline from '@/features/certifications/components/TimeLine/TimeLine';
import ProfileImage from '@/components/shared/ProfileImage/ProfileImage';
import Navbar from '@/components/layout/Navbar/Navbar';
import CertificationsShowcase from '@/features/certifications/components/Certifications/Certifications';

// Componentes de animación y efectos
import BlurText from '@/components/ui/BlurText/BlurText';
import CountUp from '@/components/ui/CountUp/CountUp';
import '../../estilos/PrincipalStyles.css'

// Hooks y datos
import { useMetaTags } from '@/hooks/useDocumentTitle';
import { pageMetadata } from '@/data/pageMetadata';
import { itemExperience, formacion } from '@/data/experienceData';


export default function Principal() {
  // Configurar metadatos para la página principal
  useMetaTags(pageMetadata.home);

  return (
    <>   
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Efecto de fondo con gradiente radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] blur-3xl opacity-30 pointer-events-none"></div>
        <Navbar />
        
        <section id="home">
          <PrincipalComponent />
        </section>
 
        <section id="experience">
          <div className="w-full mt-30 flex justify-center px-4">
            <div className="w-full max-w-5xl flex flex-col items-center">
              
              {/* Encabezado de la sección */}
              <div className="mb-10 mt-20 text-center flex flex-col items-center">
                <BlurText
                  text="Mi experiencia profesional"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-4xl sm:text-4xl md:text-5xl font-bold mb-2 justify-center"
                />
                <BlurText
                  text="Proyectos y empresas donde he desarrollado mis habilidades"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto justify-center"
                />
              </div>

              {/* Contador de años de experiencia */}
              <div className="mb-8 mt-6 text-center">
                <div 
                  className="inline-flex items-center justify-center gap-1 px-6 py-4  rounded-2xl opacity-0 translate-y-4 transition-all duration-700 ease-out delay-[1200ms] animate-[slideUp_0.8s_ease-out_1.2s_forwards]" 
                  style={{
                    animation: 'slideUp 0.8s ease-out 1.2s forwards',
                    animationFillMode: 'forwards'
                  }}
                >
                  <span className="text-4xl font-bold text-white">+</span>
                  <CountUp
                    from={0}
                    to={2}
                    direction="up"
                    duration={1}
                    delay={1.1}
                    fontSize="text-4xl"
                    color="text-white"
                    fontWeight="font-bold"
                    className="tabular-nums"
                  />
                  <span className="text-lg text-gray-300 font-medium ml-2">años de experiencia</span>
                </div>
              </div>

              {/* Timeline de experiencia profesional */}
              <ExperienceTimeline items={itemExperience} />
            </div>
          </div>
        </section>
 
        <section id="projects" className="min-h-screen py-20">
          <Proyects />
        </section>
 
        <section id="certifications" className="min-h-screen py-20">
          <CertificationsShowcase />
        </section>
 
        <section id="skills" className="min-h-screen py-20">
          <Skills />
        </section>
 
        <section id="education">
          <div className="w-full mt-0 flex justify-center px-4">
            <div className="w-full max-w-5xl flex flex-col items-center"> 
              <div className="mb-10 mt-20 text-center flex flex-col items-center">
                <BlurText
                  text="Formación Académica"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 justify-center"
                />
                <BlurText
                  text="Mi recorrido académico y profesional como desarrollador"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto justify-center"
                />
              </div>

              {/* Timeline de formación académica */}
              <ExperienceTimeline items={formacion} />
            </div>
          </div>
        </section> 
        <section id="about">
          <ProfileImage />
        </section>
        
      </div>
    </>
  );
}
