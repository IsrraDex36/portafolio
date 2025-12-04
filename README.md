# 🚀 Portafolio JICM - Desarrollador Frontend

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-38B2AC?logo=tailwind-css)

Un portafolio moderno y dinámico construido con React, presentando proyectos, habilidades y experiencia profesional con animaciones fluidas y un diseño premium.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante con tema oscuro y efectos visuales premium
- ⚡ **Performance Optimizada**: Lazy loading, code splitting y React memoization
- 📱 **Responsive Design**: Adaptable a móvil, tablet y desktop
- 🎭 **Animaciones Fluidas**: GSAP, Motion y efectos personalizados
- 🚀 **Smooth Scrolling**: Implementación con Lenis
- ♿ **Accesibilidad**: Semántica HTML5 y atributos ARIA
- 🔍 **SEO Optimizado**: Meta tags, Open Graph y Twitter Cards

## 🛠️ Tecnologías

### Core

- **React 19.1.1** - UI Framework
- **Vite 7.1.2** - Build tool y dev server
- **React Router 7.9** - Navegación

### Estilos

- **TailwindCSS 4.1** - Framework de estilos
- **CSS Modules** - Estilos basados en componentes

### Animaciones

- **Motion 12.23** - Librería de animaciones moderna
- **GSAP 3.13** - Animaciones avanzadas
- **Lenis 1.3** - Smooth scrolling

### Iconos & UI

- **Lucide React** - Iconos modernos
- **Class Variance Authority** - Gestión de variantes

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/IsrraDex36/portafolio.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del Proyecto

```
portafolio/
├── public/              # Archivos estáticos
│   ├── pdf/            # CVs y documentos
│   └── jcm_logo.png    # Logo del portafolio
├── src/
│   ├── assets/         # Imágenes y recursos
│   ├── components/     # Componentes reutilizables
│   │   ├── BlurText/
│   │   ├── Navbar/
│   │   ├── Skills/
│   │   └── ...
│   ├── context/        # Context API (Lenis)
│   ├── data/           # Datos estáticos
│   ├── hooks/          # Custom hooks
│   ├── pages/          # Páginas principales
│   ├── app.router.tsx  # Configuración de rutas
│   └── main.jsx        # Entry point
└── index.html
```

## 🎯 Componentes Principales

### Navegación

- **Navbar**: Dock-style navegación con detección automática de sección activa
- **Smooth Scroll**: Navegación fluida entre secciones

### Secciones

- **PrincipalComponent**: Hero section con efecto de texto encriptado
- **Skills**: Habilidades técnicas en terminales temáticas
- **Proyects**: Carrusel de proyectos destacados
- **BentoGrid**: Layout tipo Pinterest para proyectos
- **Certifications**: Showcase de certificaciones
- **Timeline**: Experiencia y formación académica
- **ProfileImage**: Sección "Sobre mí"

### Animaciones

- **BlurText**: Texto con efecto de desenfoque
- **DecryptedText**: Efecto de texto encriptado
- **CountUp**: Contador animado
- **FloatingIcons**: Iconos flotantes 3D
- **FadeContent**: Apariciones con fade

## 🔧 Scripts Disponibles

```json
{
  "dev": "vite", // Servidor de desarrollo
  "build": "vite build", // Build para producción
  "preview": "vite preview", // Preview del build
  "lint": "eslint ." // Linting del código
}
```

## 🌐 Deployment

El proyecto está configurado para deploy en Netlify:

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"
```

**URL**: [portafolio-jicm.netlify.app](https://portafolio-jicm.netlify.app/)

## 📊 Optimizaciones Recientes

- ✅ Eliminadas dependencias no utilizadas (Three.js, i18next, etc.)
- ✅ Código comentado removido
- ✅ Importaciones estandarizadas
- ✅ Componentes memoizados
- ✅ Lazy loading de rutas

## 🎨 Diseño

- **Paleta**: Tema oscuro con gradientes sutiles
- **Tipografía**: DM Sans (body), Epilogue (headings)
- **Efectos**: Glassmorphism, blur, gradientes radiales
- **Animaciones**: Micro-interacciones en hover y scroll

## 📝 SEO

- Meta tags configurados
- Open Graph para redes sociales
- Twitter Cards
- Sitemap automático
- Robots.txt configurado

## 📄 Licencia

Este proyecto es personal y está destinado para fines de portafolio.

## 👤 Autor

**Jonathan Israel Caballero Morales**

- LinkedIn: [@jonathan-ism](https://www.linkedin.com/in/jonathan-ism)
- GitHub: [@IsrraDex36](https://github.com/IsrraDex36)
- Email: jonathanisrrael3609@gmail.com

---

⭐ Si te gusta este proyecto, ¡no dudes en darle una estrella!
