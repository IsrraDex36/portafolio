import React from 'react';
import { Award, ExternalLink, Calendar, Building, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BlurText from '@/components/BlurText/BlurText';
import CountUp from '@/components/CountUp/CountUp';

// Importar iconos locales
import googleIcon from '@/assets/img/iconos/google-wordmark.svg';
import udemyIcon from '@/assets/img/iconos/udemy_dark.svg';
import freeCodeCampIcon from '@/assets/img/iconos/free-code-camp.svg';
import courseraIcon from '@/assets/img/iconos/coursera.svg';
import ciscoIcon from '@/assets/img/iconos/cisco_dark.svg';

const CertificationsShowcase = () => {
  const navigate = useNavigate();

  const handleViewAllCertifications = () => {
    navigate('/certificaciones');
  };

  const certifications = [
    {
      id: 1,
      title: "Responsive Web Design",
      institution: "FreeCodeCamp",
      year: "2025",
      category: "Desarrollo Web",
      status: "Completado",
      backgroundImage: freeCodeCampIcon, 
      credentialUrl: "https://freecodecamp.org/certification/fcc49ca491e-af35-4075-880e-d9ca1d28eedc/responsive-web-design"
    },
    {
      id: 2,
      title: "Universidad de Programación - Python, Java y JavaScript",
      institution: "Udemy",
      year: "2025",
      category: "Backend",
      status: "Completado",
      backgroundImage: udemyIcon, 
      credentialUrl: "https://www.udemy.com/certificate/UC-0fe6c01d-5393-4e6c-9c1a-1e57ad3ed270/"
    },
    {
      id: 3,
      title: "Front-End Development Libraries",
      institution: "Udemy",
      year: "2025",
      category: "Frontend",
      status: "Completado",
      backgroundImage: freeCodeCampIcon, 
      credentialUrl: "https://freecodecamp.org/certification/fcc49ca491e-af35-4075-880e-d9ca1d28eedc/front-end-development-libraries"
    }
  ];

  // Certificaciones simuladas para el efecto de desvanecimiento
  const loadingCertifications = [
    { id: 4, title: "React Advanced Patterns", institution: "Meta", year: "2025", credentialId: "---", credentialUrl: "#" },
    { id: 5, title: "n8n Workflow Automation", institution: "n8n", year: "2025", credentialId: "---", credentialUrl: "#" },
    { id: 6, title: "TypeScript Expert", institution: "Microsoft", year: "2023", credentialId: "---", credentialUrl: "#" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-black border border-white/20 rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-white" />
                <span className="text-gray-300 text-sm font-medium">Formación Profesional</span>
              </div>
            </div>
            
            <div className="flex justify-center mb-4">
              <BlurText 
                text="Certificaciones"
                className="text-5xl md:text-6xl font-light text-white tracking-tight justify-center"
                delay={100}
                animateBy="words"
              />
            </div>
            <div className="flex justify-center">
              <BlurText 
                text="Compromiso continuo con la excelencia técnica y el aprendizaje especializado"
                className="text-xl text-gray-400 max-w-2xl leading-relaxed text-center justify-center"
                delay={150}
                animateBy="words"
              />
            </div>
          </div>

          {/* Certifications Grid - Principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="group relative bg-black border border-white/15 rounded-xl overflow-hidden hover:border-white/36 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 h-[28rem]"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Certificate Image with Background */}
                <div 
                  className="relative overflow-hidden h-48 border-b border-white/10 bg-black flex items-center justify-center"
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 z-10" />
                  
                  {/* Logo/Icon Image */}
                  <img 
                    src={cert.backgroundImage} 
                    alt={`${cert.institution} logo`}
                    className="relative z-0 max-w-[60%] max-h-[60%] object-contain opacity-80"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
                      {cert.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-[calc(28rem-12rem)]">
                  <div className="flex-grow">
                    <div className="mb-4">
                      <span className="text-white text-sm font-medium tracking-wider uppercase">
                        {cert.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-300 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Building className="w-4 h-4" />
                        <span className="text-sm">{cert.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{cert.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Credential Info - Always at bottom */}
                  <div className="space-y-2 mt-auto"> 
                    <button 
                      onClick={() => window.open(cert.credentialUrl, '_blank')}
                      className="flex items-center gap-2 text-white hover:text-gray-300 text-sm font-medium transition-colors duration-200 cursor-pointer"
                    >
                      Validar credencial
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fade Effect Container - Con gradiente personalizado - Solo en tablet y desktop */}
          <div className="relative mb-8 hidden md:block">
            {/* Certificaciones con efecto de desvanecimiento */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-20 blur-[1px]">
              {loadingCertifications.slice(0, 3).map((cert) => (
                <div
                  key={cert.id}
                  className="bg-black/90 border border-white/15 rounded-xl overflow-hidden h-[28rem]"
                >
                  {/* Placeholder Image */}
                  <div className="bg-white/20 h-48 flex items-center justify-center border-b border-white/5">
                    <div className="text-center">
                      <Award className="w-8 h-8 text-gray-100 mx-auto mb-1" />
                      <span className="text-gray-100 text-xs">En proceso...</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <div className="mb-3">
                      <div className="h-3 bg-gray-100/30 rounded w-20 mb-2"></div>
                    </div>
                    <h3 className="text-base font-semibold text-white/90 mb-2">
                      {cert.title}
                    </h3>
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center gap-2 text-gray-100">
                        <Building className="w-3 h-3" />
                        <span className="text-xs">{cert.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-100">
                        <Calendar className="w-3 h-3" />
                        <span className="text-xs">{cert.year}</span>
                      </div>
                    </div>

                    {/* Credential Info */}
                    <div className="space-y-2">
                      <div className="text-gray-100/80 text-xs">
                        <span className="font-medium">Identificación:</span> {cert.credentialId}
                      </div>
                      <button 
                        onClick={() => window.open(cert.credentialUrl, '_blank')}
                        className="flex items-center gap-1 text-white/90 hover:text-white text-xs font-medium transition-colors duration-200 cursor-pointer"
                      >
                        Validar credencial
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Overlay personalizado */}
            <div 
              className="absolute bottom-0 left-0 right-0 pointer-events-none" 
              style={{
                background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 99%)',
                height: '200px'
              }}
            />
          </div>

          {/* CTA Button - Responsive positioning */}
          <div className="text-center mt-12 md:-mt-4 relative z-20">
            <button 
              onClick={handleViewAllCertifications}
              className="mt-12 px-6 py-3 bg-black/40 cursor-pointer text-white text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 group"
            >
              <span className="flex items-center gap-2">
                <BlurText
                  text="Ver todas mis certificaciones"
                  delay={300}
                  animateBy="words"
                  direction="top"
                  className=""
                />
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <p className="text-gray-500 text-xs mt-3">
              Explora mi formación completa y especialización técnica
            </p>
          </div>

          {/* Stats Section - Integrado */}
          <div className="mt-8 bg-black border border-white/20 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">
                  <CountUp 
                    to={10} 
                    duration={2.1}
                    fontSize="text-3xl"
                    fontWeight="font-bold"
                    color="text-white"
                  />+
                </div>
                <div className="flex justify-center">
                  <BlurText 
                    text="Certificaciones Completadas"
                    className="text-gray-400 justify-center"
                    delay={200}
                    animateBy="words"
                  />
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">
                  <CountUp 
                    from={200}
                    to={500} 
                    duration={2.1}
                    delay={0.5}
                    fontSize="text-3xl"
                    fontWeight="font-bold"
                    color="text-white"
                  />+
                </div>
                <div className="flex justify-center">
                  <BlurText 
                    text="Horas de Formación"
                    className="text-gray-400 justify-center"
                    delay={250}
                    animateBy="words"
                  />
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">
                  <CountUp 
                    from={2019}
                    to={2025} 
                    duration={1}
                    delay={1}
                    fontSize="text-3xl"
                    fontWeight="font-bold"
                    color="text-white"
                  />
                </div>
                <div className="flex justify-center">
                  <BlurText 
                    text="Última Actualización"
                    className="text-gray-400 justify-center"
                    delay={300}
                    animateBy="words"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Override BlurText centering */
        .blur-text {
          justify-content: center !important;
          width: auto !important;
          text-align: center;
        }
        
        .blur-text span {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default CertificationsShowcase;
