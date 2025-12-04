# 🎨 Sistema de Diseño Tipográfico - Portafolio JICM

## 📐 Jerarquía de Tipografía

### **Fuentes Base**

```css
body: font-family: 'DM Sans', sans-serif;
headings (h1-h6): font-family: 'Epilogue', sans-serif;
code/terminal: font-mono
```

---

## 🎯 Escala Tipográfica Estandarizada

### **H1 - Títulos Principales de Sección**

```jsx
className = "text-5xl md:text-6xl font-bold text-white";
```

- **Tamaño**: `text-5xl` (3rem/48px) en móvil, `text-6xl` (3.75rem/60px) en desktop
- **Peso**: `font-bold` (700)
- **Color**: `text-white`
- **Uso**: Certificaciones, Proyectos, Skills, etc.

**Ejemplo:**

```jsx
<BlurText
  text="Certificaciones"
  className="text-5xl md:text-6xl font-bold text-white tracking-tight"
/>
```

### **H2 - Subtítulos de Sección**

```jsx
className = "text-3xl sm:text-4xl md:text-5xl font-bold text-white";
```

- **Tamaño**: `text-3xl` → `text-4xl` → `text-5xl` (responsive)
- **Peso**: `font-bold` (700)
- **Color**: `text-white`
- **Uso**: "Mi experiencia profesional", "Formación Académica"

### **H3 - Títulos de Tarjetas/Cards**

```jsx
className = "text-lg font-bold text-white";
```

- **Tamaño**: `text-lg` (1.125rem/18px)
- **Peso**: `font-bold` (700)
- **Color**: `text-white`
- **Uso**: Títulos de certificaciones, proyectos

### **H4 - Subtítulos de Cards**

```jsx
className = "text-base font-semibold text-white";
```

- **Tamaño**: `text-base` (1rem/16px)
- **Peso**: `font-semibold` (600)
- **Color**: `text-white`

---

## 📝 Texto de Contenido

### **Párrafo Principal - Descripción de Sección**

```jsx
className = "text-xl text-gray-400 max-w-2xl leading-relaxed";
```

- **Tamaño**: `text-xl` (1.25rem/20px)
- **Peso**: `font-normal` (400) - default
- **Color**: `text-gray-400`
- **Line height**: `leading-relaxed`
- **Uso**: Subtítulos descriptivos debajo de títulos principales

### **Párrafo Secundario - Descripción de Cards**

```jsx
className = "text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed";
```

- **Tamaño**: Responsive `text-base` → `text-lg` → `text-xl`
- **Peso**: `font-normal` (400)
- **Color**: `text-gray-300`

### **Texto Pequeño - Metadatos**

```jsx
className = "text-sm font-medium text-gray-300";
```

- **Tamaño**: `text-sm` (0.875rem/14px)
- **Peso**: `font-medium` (500)
- **Color**: `text-gray-300`
- **Uso**: Fechas, instituciones, etiquetas

### **Texto Extra Pequeño - Helper Text**

```jsx
className = "text-xs text-gray-500";
```

- **Tamaño**: `text-xs` (0.75rem/12px)
- **Peso**: `font-normal` (400)
- **Color**: `text-gray-500`
- **Uso**: Texto de ayuda, pies de página

---

## 🏷️ Elementos Especiales

### **Badges/Tags**

```jsx
className = "text-xs font-bold tracking-wider uppercase";
```

- **Tamaño**: `text-xs`
- **Peso**: `font-bold` (700)
- **Extras**: `tracking-wider uppercase`
- **Uso**: Categorías, etiquetas de estado

### **Botones - Texto**

```jsx
className = "text-sm font-medium";
```

- **Tamaño**: `text-sm`
- **Peso**: `font-medium` (500)
- **Uso**: Botones de acción, CTAs

### **Contador/Stats - Números**

```jsx
className = "text-3xl font-bold text-white";
```

- **Tamaño**: `text-3xl` (1.875rem/30px)
- **Peso**: `font-bold` (700)
- **Color**: `text-white`
- **Uso**: CountUp, estadísticas

---

## 🎨 Pesos de Fuente (Font Weights)

| Clase Tailwind  | Valor | Uso Principal                  |
| --------------- | ----- | ------------------------------ |
| `font-normal`   | 400   | Texto de párrafos              |
| `font-medium`   | 500   | Botones, metadatos importantes |
| `font-semibold` | 600   | H4, subtítulos secundarios     |
| `font-bold`     | 700   | H1, H2, H3, estadísticas       |

**❌ NO USAR:**

- `font-light` (300) - Inconsistente con el diseño
- `font-extrabold` (800) - Demasiado pesado
- `font-black` (900) - Demasiado pesado

---

## 📏 Tamaños de Texto

| Clase Tailwind | rem      | px   | Uso                      |
| -------------- | -------- | ---- | ------------------------ |
| `text-xs`      | 0.75rem  | 12px | Helper text, badges      |
| `text-sm`      | 0.875rem | 14px | Botones, metadatos       |
| `text-base`    | 1rem     | 16px | Texto base               |
| `text-lg`      | 1.125rem | 18px | H3, descripciones cortas |
| `text-xl`      | 1.25rem  | 20px | Párrafos principales     |
| `text-2xl`     | 1.5rem   | 24px | -                        |
| `text-3xl`     | 1.875rem | 30px | Stats, H2 móvil          |
| `text-4xl`     | 2.25rem  | 36px | H2 tablet                |
| `text-5xl`     | 3rem     | 48px | H1 móvil                 |
| `text-6xl`     | 3.75rem  | 60px | H1 desktop               |

---

## 🎯 Colores Tipográficos

| Color           | Código  | Uso                                       |
| --------------- | ------- | ----------------------------------------- |
| `text-white`    | #FFFFFF | Títulos principales, contenido importante |
| `text-gray-100` | #F3F4F6 | Texto secundario claro                    |
| `text-gray-200` | #E5E7EB | -                                         |
| `text-gray-300` | #D1D5DB | Metadatos, descripciones                  |
| `text-gray-400` | #9CA3AF | Subtítulos descriptivos                   |
| `text-gray-500` | #6B7280 | Helper text, pie de página                |

---

## ✅ Ejemplos de Uso Correcto

### Sección Principal

```jsx
{
  /* Título */
}
<BlurText
  text="Certificaciones"
  className="text-5xl md:text-6xl font-bold text-white tracking-tight"
/>;

{
  /* Descripción */
}
<BlurText
  text="Formación continua y especialización técnica"
  className="text-xl text-gray-400 max-w-2xl leading-relaxed"
/>;
```

### Card de Proyecto

```jsx
{
  /* Título del proyecto */
}
<h3 className="text-lg font-bold text-white mb-4">
  MOVIEXD - Catálogo de Películas
</h3>;

{
  /* Descripción */
}
<p className="text-gray-300 text-base leading-relaxed">
  Single Page App interactiva...
</p>;

{
  /* Metadatos */
}
<span className="text-sm font-medium text-gray-300">2024</span>;
```

### Badge/Etiqueta

```jsx
<span className="text-xs font-bold tracking-wider uppercase bg-white/10 px-3 py-1.5 rounded-md">
  Desarrollo Web
</span>
```

### Botón CTA

```jsx
<button className="text-sm font-medium tracking-wide">Ver más proyectos</button>
```

---

## 🚫 Errores Comunes a Evitar

### ❌ Inconsistencia de Pesos

```jsx
// ❌ MAL - Título con font-light
<h1 className="text-5xl font-light">Certificaciones</h1>

// ✅ BIEN - Título con font-bold
<h1 className="text-5xl font-bold">Certificaciones</h1>
```

### ❌ Tamaños Inconsistentes

```jsx
// ❌ MAL - Mezcla de tamaños sin patrón
<h3 className="text-2xl">Proyecto A</h3>
<h3 className="text-lg">Proyecto B</h3>

// ✅ BIEN - Mismo tamaño para mismo nivel
<h3 className="text-lg font-bold">Proyecto A</h3>
<h3 className="text-lg font-bold">Proyecto B</h3>
```

### ❌ Colores Incorrectos

```jsx
// ❌ MAL - Gris muy oscuro poco legible
<p className="text-gray-900">Descripción</p>

// ✅ BIEN - Gris adecuado para el fondo oscuro
<p className="text-gray-300">Descripción</p>
```

---

## 📱 Responsive Typography

### Mobile First Approach

```jsx
// Empezar con tamaño móvil, escalar hacia arriba
className = "text-base sm:text-lg md:text-xl";

// H1 responsive
className = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl";
```

### Breakpoints

- **Mobile**: Tamaño base (sm y abajo)
- **Tablet**: `sm:` (640px+)
- **Desktop**: `md:` (768px+)
- **Large**: `lg:` (1024px+)

---

## 🔍 Checklist de Revisión Tipográfica

Antes de publicar cambios, verifica:

- [ ] ¿Los títulos principales usan `font-bold`?
- [ ] ¿Los tamaños son consistentes para el mismo nivel?
- [ ] ¿El color de texto es legible en el fondo oscuro?
- [ ] ¿Se implementa responsive typography?
- [ ] ¿Los pesos de fuente siguen el sistema (400, 500, 600, 700)?
- [ ] ¿No se usa `font-light` o `font-extrabold`?
- [ ] ¿El `line-height` es apropiado (`leading-relaxed` para párrafos)?
- [ ] ¿El `tracking` (letter-spacing) es apropiado?

---

**Última actualización**: Diciembre 2025  
**Sistema de diseño**: Portafolio JICM v1.0
