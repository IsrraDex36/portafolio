import { Terminal, ExternalLink, Calendar, Building, ArrowLeft } from "lucide-react"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import BlurText from '@/components/ui/BlurText/BlurText';
import Squares from '@/components/shared/Squares/Squares';
import { useMetaTags } from '@/hooks/useDocumentTitle';
import { pageMetadata } from '@/data/pageMetadata';
import { certificates } from '@/data/certificates';

function CertificateCard({ title, issuer, date, category, status, backgroundImage, link }) {
    useEffect(() => {
      // Scroll to top when component mounts
      window.scrollTo(0, 0)
    }, [])

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
      if (url.includes('.pdf')) {
        const parts = url.split('/');
        const filename = parts[parts.length - 1];
        return filename.replace('.pdf', '');
      }
      return null;
    };

    const credentialId = extractCredentialId(link);

  return (
    <div className="group relative bg-black border border-white/15 rounded-xl overflow-hidden hover:border-white/36 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 h-[32rem] flex flex-col">
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
            src={backgroundImage} 
            alt={`${issuer} logo`}
            className="max-w-[70%] max-h-[70%] object-contain opacity-90 filter drop-shadow-lg"
          />
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
            {status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="mb-5">
            <span className="text-white text-xs font-bold tracking-wider uppercase bg-white/10 px-3 py-1.5 rounded-md">
              {category}
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300 line-clamp-3 leading-tight min-h-[4.5rem]">
            {title}
          </h3>
          
          <div className="space-y-4 mb-5">
            <div className="flex items-center gap-3 text-gray-300">
              <Building className="w-4 h-4 text-white" />
              <span className="text-sm font-medium">{issuer}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-sm font-medium">{date}</span>
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
            onClick={() => window.open(link, '_blank')}
            className="w-full flex items-center justify-center gap-2 text-white hover:text-gray-300 text-sm font-medium transition-all duration-200 cursor-pointer bg-white/5 hover:bg-white/10 px-4 py-3 rounded-lg border border-white/10 hover:border-white/30"
          >
            Validar credencial
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CertificatesSection() {
  const navigate = useNavigate();
  
  // Configurar metadatos para la página de certificaciones
  useMetaTags(pageMetadata.certifications);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="min-h-screen bg-black px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-60">
        <Squares 
          speed={0.1} 
          squareSize={50}
          direction='diagonal'
          borderColor='rgba(255, 255, 255, 0.4)'
          hoverFillColor='rgba(255, 255, 255, 0.1)'
        />
      </div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Back Button (no afecta el centrado) */}
        <button
          onClick={handleGoBack}
          className="group inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer mb-8"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Regresar</span>
        </button>
        
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black px-4 py-1.5 text-sm text-gray-300">
            <Terminal className="h-4 w-4" />
            <span className="font-mono">Certificaciones</span>
          </div>
          <div className="flex justify-center mb-4">
            <BlurText 
              text="Logros y Certificados"
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl justify-center"
              delay={100}
              animateBy="words"
            />
          </div>
          <div className="flex justify-center">
            <BlurText 
              text="Una colección de certificaciones que reflejan mi pasión por el desarrollo web y mi compromiso con el aprendizaje continuo."
              className="text-lg leading-relaxed text-gray-400 max-w-2xl justify-center"
              delay={150}
              animateBy="words"
            />
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <CertificateCard {...cert} />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="font-mono text-sm text-gray-500">
            <span className="text-white">{"// "}</span>
            Construyendo el futuro, una línea de código a la vez
          </p>
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
      `}</style>
    </section>
  )
}