// Importaciones de imágenes
import MovieXD from '@/assets/img/peliculasxd.png';
import PokedexApi from '@/assets/img/pokedexapi.png';
import ClimaApi from '@/assets/img/clima-api.png';
import GeminiApi from '@/assets/img/gemini-api.png';
import TetrisJuego from '@/assets/img/tetrisjicm.png';
import GitQuick from '@/assets/img/gitimat.png';
import MiInbox from '@/assets/img/inbox.jpeg';

export const projectItems = [
  {
    title: "MOVIEXD - Catálogo de Películas con Vue",
    description:
      "Single Page App (SPA) interactiva que consume la API de TMDB para mostrar películas populares, con búsqueda en tiempo real, filtros por género y reproductor de tráilers. Desarrollada con Vue 3, Vite y CSS moderno, destacando componentes reactivos y diseño responsive.",
    media: { type: "img", src: MovieXD },
    technologies: ["Vue.js", "JavaScript", "CSS3", "Vite"],
    githubUrl: "https://github.com/IsrraDex36/pelisxd/tree/main",
    liveUrl: "https://pelisxd.netlify.app/",
    className: "md:col-span-2",
  },
  {
    type: "quote",
    content: "La creatividad es la inteligencia divirtiéndose",
    author: "Albert Einstein",
    className: "md:col-span-1",
  },
  {
    type: "gif-quote-split",
    gifMedia: { type: "gif", src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGM1OXY5NncybTYxcWN0MmRrOWc5ZzhpcGY4cDg4Y2p1c2lwcTVscCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/78XCFBGOlS6keY1Bil/giphy.gif" },
    quoteContent: "El futuro pertenece a quienes creen en la belleza de sus sueños",
    quoteAuthor: "Eleanor Roosevelt",
    className: "",
  },
  {
    title: "MiInbox - Aplicación de Correo Electrónico",
    description:
      "Aplicación de correo electrónico tipo Gmail con React 18, TypeScript y Zustand. Gestiona mensajes en hilos, composición, búsqueda y organización con interfaz responsive. Demuestra arquitectura moderna, estado global y testing automatizado, con v0 y react.",
    media: { type: "img", src: MiInbox },
    technologies: ["React", "TypeScript", "V0", "Tailwind CSS", "ReactRouter"],
    githubUrl: "https://github.com/IsrraDex36/MiInboxAppPrueba",
    liveUrl: "https://miinboxapp.netlify.app/",
    className: "md:col-span-2",
  },
  {
    title: "API Pokedex",
    description:
      "Pokédex interactiva que consume la API oficial de Pokémon para mostrar información completa de cada criatura. Incluye estadísticas detalladas, tipos, habilidades, evoluciones y sprites animados. Interfaz responsive con búsqueda avanzada y filtros por generación.",
    media: { type: "img", src: PokedexApi },
    technologies: ["HTML5", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/IsrraDex36/PokedexApi",
    liveUrl: "https://peppy-biscotti-ade567.netlify.app/",
    className: "",
  },
  {
    title: "Clima Api",
    description:
      "Aplicación meteorológica que integra la API de OpenWeatherMap para proporcionar información climática en tiempo real. Muestra temperatura actual, condiciones atmosféricas, humedad, velocidad del viento y pronóstico extendido. Búsqueda por ciudad con geolocalización automática y diseño adaptativo.",
    media: { type: "img", src: ClimaApi },
    technologies: ["HTML5", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/IsrraDex36/Clima-Api",
    liveUrl: "https://clima-api-jicm.netlify.app/",
    className: "",
  },
  {
    type: "mini-grid",
    cards: [
      {
        type: "quote",
        content: "La única forma de hacer un gran trabajo es amar lo que haces",
        author: "Steve Jobs",
      },
      {
        type: "gif",
        src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YjIzZjM0aWdoempwb2N6enl5YzRiN2wwMXV2ZzJsYXoyZXI1eXl3biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OumCa12QC9CIvBe2c1/giphy.gif",
      },
      {
        type: "gif",
        src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3djljOTR3bWMxaGhqNHdhamtudHh1czZnZnk1bDZ1M2ZtcHp4NHVpMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UqAlDtPrxUIT1yYmFp/giphy.gif",
      },
      {
        type: "quote",
        content: "Cualquier tonto puede escribir código que una computadora entienda. Los buenos programadores escriben código que los humanos pueden entender",
        author: "Martin Fowler",
      }
    ],
    className: "md:col-span-2",
  },
  {
    type: "quote-gif-split",
    quoteContent: "No tengas miedo de renunciar a lo bueno para perseguir lo grandioso",
    quoteAuthor: "John D. Rockefeller",
    gifMedia: { type: "gif", src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MnVubmVueTBsY29naGt4NnRpeDlpMjJseHNkZGl0c3pxM3JqczFmdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kanka5wfr3BxGpLRQu/giphy.gif" },
    className: "",
  },
  {
    title: "Tetris juego clásico",
    description:
      "Tetris Vue - Clon moderno del clásico juego, desarrollado con Vue.js. Gráficos mejorados, efectos visuales, sistema de puntuación y controles intuitivos.",
    media: { type: "img", src: TetrisJuego },
    technologies: ["Vite", "JavaScript", "Vue.js", "CSS3"],
    githubUrl: "https://github.com/IsrraDex36/tetrisjicm",
    liveUrl: "https://tetris-vue.netlify.app/",
    className: "",
  },
  {
    title: "GitQuick",
    description:
      "GitQuick: aprende Git fácil con comandos y ejemplos prácticos.",
    media: { type: "img", src: GitQuick },
    technologies: ["CSS3", "Vite", "Vue.js", "JavaScript"],
    githubUrl: "https://github.com/IsrraDex36/GitQuick",
    liveUrl: "https://gitquickguide.netlify.app/",
    className: "",
  },
  {
    type: "gif-quote-split",
    gifMedia: { type: "gif", src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N2dvbWVoMHF6ZWlqdHBqMmh2Nzh1d3J1a3NiNWR4NTV1NXRjNjBhOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AqVx0YGEyRajOI3Pkm/giphy.gif" },
    quoteContent: "10K+ líneas de código escritas con pasión",
    quoteAuthor: "Desarrollador Dedicado",
    className: "",
  },
  {
    title: "Gemini api",
    description:
      "Aplicación full-stack desarrollada con Vue.js y Node.js que integra la API de Gemini AI de Google para generación inteligente de texto. Cuenta con chat interactivo en tiempo real, animaciones fluidas, historial de conversaciones, y una interfaz moderna y responsive. Implementa autenticación, manejo de estados y optimización de rendimiento.",
    media: { type: "img", src: GeminiApi },
    technologies: ["Node.js", "Vue.js", "JavaScript", "Vite"],
    githubUrl: "https://github.com/IsrraDex36/gemini-writer",
    liveUrl: "https://writer-gemini-api.netlify.app/",
    className: "md:col-span-2",
  },
  {
    type: "mini-grid",
    cards: [
      {
        type: "quote",
        content: "La práctica hace al maestro",
        author: "Proverbio",
      },
      {
        type: "gif",
        src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b3hzdDEzYWo4bHhvcDhmajNpNHhqb3liZW13YWxtMG5odmZ5bzFrayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JqmupuTVZYaQX5s094/giphy.gif",
      },
      {
        type: "gif",
        src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3a29rc28wZWt3dHk1aTl5NzU0Z2Y4cTg4YWxic2kwY3E0Z2FzOHdweSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/iEw5gfk0q6oWOlJruu/giphy.gif",
      },
      {
        type: "quote",
        content: "El código limpio es simple y directo",
        author: "Robert C. Martin",
      }
    ],
    className: "md:col-span-2",
  },
];