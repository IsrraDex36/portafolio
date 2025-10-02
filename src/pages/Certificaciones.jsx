import { Terminal, Award, ExternalLink, Calendar, Building, ArrowLeft } from "lucide-react"
import { useEffect } from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BlurText from '@/components/BlurText/BlurText';
import Squares from '@/components/Squares/Squares';

// Importar iconos locales
import googleIcon from '@/assets/img/iconos/google-wordmark.svg';
import udemyIcon from '@/assets/img/iconos/udemy_dark.svg';
import freeCodeCampIcon from '@/assets/img/iconos/free-code-camp.svg';
import courseraIcon from '@/assets/img/iconos/coursera.svg';
import ciscoIcon from '@/assets/img/iconos/cisco_dark.svg';

const certificates = [
  {
    title: "Curso de introducción al desarrollo web: HTML y CSS (1/2)",
    issuer: "Google",
    date: "2025",
    category: "Desarrollo Web",
    status: "Completado",
    backgroundImage: googleIcon,
    link: "https://skillshop.exceedlms.com/student/award/RRbYtQh3u4HocanAi1Z1NiDC",
  },
  {
    title: "Curso de introducción al desarrollo web: HTML y CSS (2/2)",
    issuer: "Google",
    date: "2025",
    category: "Desarrollo Web",
    status: "Completado",
    backgroundImage: googleIcon,
    link: "https://skillshop.exceedlms.com/student/award/TY4DjahdjLyxWVi56AsSa8Uw",
  },
  {
    title: "Data Visualization",
    issuer: "freeCodeCamp",
    date: "2025",
    category: "Frontend",
    status: "Completado",
    backgroundImage: freeCodeCampIcon,
    link: "https://www.freecodecamp.org/certification/fcc49ca491e-af35-4075-880e-d9ca1d28eedc/data-visualization",
  },
  {
    title: "Desarrolla tus habilidades de productividad con IA generativa con Microsoft y LinkedIn",
    issuer: "LinkedIn Learning",
    date: "2025",
    category: "IA & Productividad",
    status: "Completado",
    backgroundImage: freeCodeCampIcon, // Usaremos freeCodeCamp como placeholder para LinkedIn
    link: "https://www.linkedin.com/learning/certificates/1c26712bb9a406173d88838a3f65da37b6683ecb73dab871b25d7cd098c16e33",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2025",
    category: "Algoritmos",
    status: "Completado",
    backgroundImage: freeCodeCampIcon,
    link: "https://www.freecodecamp.org/certification/fcc49ca491e-af35-4075-880e-d9ca1d28eedc/javascript-algorithms-and-data-structures-v8",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2025",
    category: "Desarrollo Web",
    status: "Completado",
    backgroundImage: freeCodeCampIcon,
    link: "https://www.freecodecamp.org/certification/fcc49ca491e-af35-4075-880e-d9ca1d28eedc/responsive-web-design",
  },
  {
    title: "Git y GitHub desde cero a experto",
    issuer: "Udemy",
    date: "2025",
    category: "DevOps",
    status: "Completado",
    backgroundImage: udemyIcon,
    link: "https://www.udemy.com/certificate/UC-b235cc92-2533-40c6-bac6-af798ad1ae7c/",
  },
  {
    title: "Universidad de Programación - Python, Java y JavaScript",
    issuer: "Udemy",
    date: "2025",
    category: "Backend",
    status: "Completado",
    backgroundImage: udemyIcon,
    link: "https://www.udemy.com/certificate/UC-0fe6c01d-5393-4e6c-9c1a-1e57ad3ed270/",
  },
  {
    title: "Front-End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2025",
    category: "Frontend",
    status: "Completado",
    backgroundImage: freeCodeCampIcon,
    link: "https://freecodecamp.org/certification/fcc49ca491e-af35-4075-880e-d9ca1d28eedc/front-end-development-libraries",
  },
  {
    title: "Partner: NDG Linux Unhatched",
    issuer: "CISCO",
    date: "2022",
    category: "Sistemas",
    status: "Completado",
    backgroundImage: ciscoIcon,
    link: "/src/assets/img/cisco/Partner.pdf",
  },
  {
    title: "IoT Fundamentals: Connecting Things",
    issuer: "CISCO",
    date: "2022",
    category: "IoT",
    status: "Completado",
    backgroundImage: ciscoIcon,
    link: "/src/assets/img/cisco/IoT.pdf",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "CISCO",
    date: "2023",
    category: "Ciberseguridad",
    status: "Completado",
    backgroundImage: ciscoIcon,
    link: "/src/assets/img/cisco/security.pdf",
  },
  {
    title: "Fundamentos de Python 1",
    issuer: "CISCO",
    date: "2024",
    category: "Backend",
    status: "Completado",
    backgroundImage: ciscoIcon,
    link: "/src/assets/img/cisco/python.pdf",
  },
]

function CertificateCard({ title, issuer, date, category, status, backgroundImage, link }) {
    useEffect(() => {
      // Scroll to top when component mounts
      window.scrollTo(0, 0)
    }, [])
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