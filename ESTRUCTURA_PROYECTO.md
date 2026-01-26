# 📁 Estructura del Proyecto Portafolio

## 🎯 Nueva Organización de Carpetas

```
src/
├── components/              # Componentes reutilizables
│   ├── ui/                 # Componentes UI básicos
│   │   ├── BlurText/
│   │   ├── CountUp/
│   │   ├── DecryptedText/
│   │   ├── ScrambledText/
│   │   ├── FadeContent/
│   │   ├── ClickSpark/
│   │   └── TrueFocus/
│   │
│   ├── layout/            # Componentes de layout
│   │   ├── Navbar/
│   │   └── FloatingIcons/
│   │
│   └── shared/           # Componentes compartidos
│       ├── ProfileImage/
│       ├── DownloadDialog/
│       └── Squares/
│
├── features/             # Módulos principales por feature
│   ├── home/            # Feature de página principal
│   │   ├── components/
│   │   │   ├── PrincipalComponent/
│   │   │   ├── BentoGrid/
│   │   │   └── Skills/
│   │   └── Principal.jsx
│   │
│   ├── projects/        # Feature de proyectos
│   │   ├── components/
│   │   │   ├── Proyects/
│   │   │   └── ProjectCard/
│   │   ├── data/
│   │   │   ├── projectsData.js
│   │   │   └── techIcons.jsx
│   │   └── Proyectos.jsx
│   │
│   └── certifications/  # Feature de certificaciones
│       ├── components/
│       │   ├── Certifications/
│       │   └── TimeLine/
│       └── Certificaciones.jsx
│
├── data/                # Datos globales
│   ├── certificates.js
│   ├── experienceData.js
│   └── pageMetadata.js
│
├── hooks/              # Custom hooks
│   ├── useActiveSection.js
│   ├── useDocumentTitle.js
│   ├── useLenis.js
│   └── useTypewriter.js
│
├── context/           # Context providers
│   └── LenisContext.jsx
│
├── lib/              # Utilidades
│   └── utils.js
│
├── routes/           # Rutas de la aplicación
│   └── AppRouter.jsx
│
├── estilos/          # Estilos globales
│   └── PrincipalStyles.css
│
├── assets/           # Recursos estáticos
│   └── img/
│
├── App.jsx           # Componente principal
├── main.jsx          # Punto de entrada
└── index.css         # Estilos base
```

## 📝 Convenciones de Importación

### Componentes UI

```javascript
import BlurText from "@/components/ui/BlurText/BlurText";
import CountUp from "@/components/ui/CountUp/CountUp";
import FadeContent from "@/components/ui/FadeContent/FadeContent";
```

### Componentes de Layout

```javascript
import Navbar from "@/components/layout/Navbar/Navbar";
import FloatingIcons from "@/components/layout/FloatingIcons/FloatingIcons";
```

### Componentes Compartidos

```javascript
import ProfileImage from "@/components/shared/ProfileImage/ProfileImage";
import DownloadDialog from "@/components/shared/DownloadDialog/DownloadDialog";
import Squares from "@/components/shared/Squares/Squares";
```

### Features

```javascript
// Home
import Principal from "@/features/home/Principal";
import PrincipalComponent from "@/features/home/components/PrincipalComponent/PrincipalComponent";
import Skills from "@/features/home/components/Skills/Skills";
import BentoGrid from "@/features/home/components/BentoGrid/BentoGrid";

// Projects
import Proyectos from "@/features/projects/Proyectos";
import Proyects from "@/features/projects/components/Proyects";
import ProjectCard from "@/features/projects/components/ProjectCard/ProjectCard";
import { projects } from "@/features/projects/data/projectsData";
import { techIcons } from "@/features/projects/data/techIcons";

// Certificat ions
import Certificaciones from "@/features/certifications/Certificaciones";
import Certifications from "@/features/certifications/components/Certifications/Certifications";
import TimeLine from "@/features/certifications/components/TimeLine/TimeLine";
```

### Data Global

```javascript
import { certificates } from "@/data/certificates";
import { experienceData } from "@/data/experienceData";
import { pageMetadata } from "@/data/pageMetadata";
```

### Hooks

```javascript
import { useActiveSection } from "@/hooks/useActiveSection";
import { useMetaTags } from "@/hooks/useDocumentTitle";
import { useLenis } from "@/hooks/useLenis";
import { useTypewriter } from "@/hooks/useTypewriter";
```

## 🎨 Coherencia Visual

### Paleta de Bordes Unificada

Todos los componentes usan la misma escala de opacidad:

- **Base**: `border-white/10`
- **Hover**: `border-white/20` (opcional, algunos componentes no tienen hover)
- **Fondo oscuro**: `bg-black/10` a `bg-black/40`

### Componentes con Bordes Coherentes

- ✅ TimeLine: `border-white/10` sin hover
- ✅ ProjectCard: `border-white/10 hover:border-white/20`
- ✅ Certifications: `border-white/10` sin hover

## 🚀 Beneficios de la Nueva Estructura

1. **Escalabilidad**: Fácil agregar nuevas features sin mezclar código
2. **Mantenibilidad**: Componentes organizados por propósito
3. **Claridad**: Import paths descriptivos
4. **Separación de Concerns**: UI, Layout, Shared y Features bien definidos
5. **Reutilización**: Componentes UI compartidos entre features

## 📦 Próximos Pasos

- [ ] Verificar que todos los imports estén actualizados
- [ ] Probar que la aplicación funcione correctamente
- [ ] Eliminar carpetas antiguas vacías
- [ ] Actualizar documentación si es necesario
