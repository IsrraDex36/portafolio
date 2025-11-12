import React from 'react';
import { Award, ExternalLink, Calendar, Building, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BlurText from '@/components/BlurText/BlurText';
import CountUp from '@/components/CountUp/CountUp';
import { certificates } from '@/data/certificates';

const CertificationsShowcase = () => {
  const navigate = useNavigate();

  const handleViewAllCertifications = () => {
    navigate('/certificaciones');
  };

  const featuredCertificationTitles = [
    "React: De cero a experto",
    "Universidad de Programación - Python, Java y JavaScript",
    "Front-End Development Libraries",
  ];

  const featuredCertifications = featuredCertificationTitles
    .map((title, index) => {
      const certificate = certificates.find((cert) => cert.title === title);

      if (!certificate) return null;

      return {
        id: index + 1,
        title: certificate.title,
        institution: certificate.issuer,
        year: certificate.date,
        category: certificate.category,
        status: certificate.status,
        backgroundImage: certificate.backgroundImage,
        credentialUrl: certificate.link,
      };
    })
    .filter(Boolean);

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
            {featuredCertifications.map((cert, index) => {
              // Extraer ID de credencial de la URL si es posible
              const extractCredentialId = (url) => {
                if (url.includes('certificate/UC-')) {
                  const match = url.match(/UC-([a-f0-9-]+)/);
                  return match ? match[1].substring(0, 8) + '...' : null;
                }
                if (url.includes('certification/')) {
                  const parts = url.split('certification/');
                  if (parts[1]) {
                    const id = parts[1].split('/')[0];
                    return id.substring(0, 12) + '...';
                  }
                }
                if (url.includes('award/')) {
                  const parts = url.split('award/');
                  if (parts[1]) {
                    return parts[1].substring(0, 12) + '...';
                  }
                }
                return null;
              };

              const credentialId = extractCredentialId(cert.credentialUrl);

              return (
                <div
                  key={cert.id}
                  className="group relative bg-black border border-white/15 rounded-xl overflow-hidden hover:border-white/36 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 h-[32rem] flex flex-col"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Certificate Image with Background */}
                  <div className="relative overflow-hidden h-56 border-b border-white/10 bg-gradient-to-br from-gray-900/50 to-black flex items-center justify-center">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }} />
                    
                    {/* Logo/Icon Image */}
                    <div className="relative z-10 p-8 flex items-center justify-center w-full h-full">
                      <img 
                        src={cert.backgroundImage} 
                        alt={`${cert.institution} logo`}
                        className="max-w-[70%] max-h-[70%] object-contain opacity-90 filter drop-shadow-lg"
                      />
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
                        {cert.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <div className="mb-5">
                        <span className="text-white text-xs font-bold tracking-wider uppercase bg-white/10 px-3 py-1.5 rounded-md">
                          {cert.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300 line-clamp-3 leading-tight min-h-[4.5rem]">
                        {cert.title}
                      </h3>
                      
                      <div className="space-y-4 mb-5">
                        <div className="flex items-center gap-3 text-gray-300">
                          <Building className="w-4 h-4 text-white" />
                          <span className="text-sm font-medium">{cert.institution}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <Calendar className="w-4 h-4 text-white" />
                          <span className="text-sm font-medium">{cert.year}</span>
                        </div>
                        {credentialId && (
                          <div className="text-xs text-gray-400 font-mono bg-black/30 px-2 py-1 rounded border border-white/5">
                            ID: {credentialId}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Credential Info - Always at bottom */}
                    <div className="mt-auto border-t border-white/10 pt-5"> 
                      <button 
                        onClick={() => window.open(cert.credentialUrl, '_blank')}
                        className="w-full flex items-center justify-center gap-2 text-white hover:text-gray-300 text-sm font-medium transition-all duration-200 cursor-pointer bg-white/5 hover:bg-white/10 px-4 py-3 rounded-lg border border-white/10 hover:border-white/30"
                      >
                        Validar credencial
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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
