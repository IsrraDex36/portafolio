import CasiSat from '@/assets/img/casisatv2.png'
import Fortisiip from '@/assets/img/proyect2.png'
import Clever from '@/assets/img/clever.png'

export const projects = [
  {
    title: "Colaboracion en Medicinas Ultra",
    description: "Durante mi estancia en Clever Cloud participé en el desarrollo de la web de Medicinas Ultra, colaborando en el diseño de interfaz, organización del catálogo y mejora del buscador para optimizar la experiencia del usuario.",
    image: Clever,
    technologies: ["Vue.js", "JavaScript", "PHP", "Bootstrap"],
    liveUrl: "https://www.medicinasultra.com/inicio"
  },
  {
    title: "FortiSiip",
    description: "Sistema de gestión de personal en ASP.NET y C# que permite administrar empleados, generar informes, gestionar vacaciones y evaluar desempeño. Usa MySQL en Linux y aumenta la eficiencia administrativa en un 30 %.",
    image: Fortisiip,
    technologies: ["Visual Studio", "C#", "SQL Server"],
    status: "Proyecto interno de empresa - Código y proyecto no disponibles para visualización"
  },
  {
    title: "CasiSAT",
    description: "App de gestión de gastos personales en Flutter y Firebase que permite registrar gastos, ver estadísticas en gráficos y exportar reportes en PDF o Microsoft Excel. Incluye autenticación segura y almacenamiento en la nube.",
    image: CasiSat,
    technologies: ["Flutter", "FireBase", "Dart"],
    githubUrl: "https://github.com/IsrraDex36/casi-sat-app-m-vil"
  }
];