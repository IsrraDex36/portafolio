# 🧪 Testing Guide

## Stack de Testing

- **Vitest** - Framework de testing rápido y moderno
- **React Testing Library** - Testing de componentes React
- **@testing-library/jest-dom** - Matchers adicionales para assertions
- **@testing-library/user-event** - Simulación de interacciones de usuario
- **jsdom** - Simulación de entorno de navegador

## Scripts Disponibles

```bash
# Ejecutar todos los tests una vez
npm run test

# Ejecutar tests con UI interactiva
npm run test:ui

# Ejecutar tests en modo watch (re-ejecuta al guardar)
npm run test:watch

# Ejecutar tests con reporte de cobertura
npm run test:coverage
```

## Estructura de Tests

```
src/
├── components/
│   ├── BlurText/
│   │   ├── BlurText.jsx
│   │   └── BlurText.test.jsx
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.test.jsx
│   └── ...
└── test/
    └── setup.js  # Configuración global de tests
```

## Ejemplos de Tests

### Test de Componente Básico

```javascript
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MiComponente from "./MiComponente";

describe("MiComponente", () => {
  it("renderiza correctamente", () => {
    render(<MiComponente />);
    expect(screen.getByText("Hola Mundo")).toBeInTheDocument();
  });
});
```

### Test con Interacciones

```javascript
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("ejecuta onClick cuando se hace click", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await userEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
```

### Test con Mocks

```javascript
import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";

// Mock de dependencia
vi.mock("@/hooks/useCustomHook", () => ({
  useCustomHook: () => ({ data: "mocked data" }),
}));

describe("ComponenteConHook", () => {
  it("usa el hook correctamente", () => {
    // Test con mock aplicado
  });
});
```

## Tests Actuales

### ✅ Componentes Testeados

1. **BlurText** - Componente de texto con efecto blur

   - Renderizado correcto
   - Aplicación de clases CSS
   - Animación por palabras
   - Animación por caracteres

2. **Navbar** - Barra de navegación

   - Renderizado de elementos
   - Visibilidad
   - Interactividad
   - Responsive design

3. **CountUp** - Componente de contador animado

   - Renderizado
   - Direcciones (up/down)
   - Estilos personalizados
   - Valores iniciales

4. **ProjectsData** - Validación de datos
   - Estructura correcta
   - Propiedades requeridas
   - Tipos de datos
   - Validación de contenido

## Mocks Configurados

El archivo `src/test/setup.js` incluye mocks para:

- **IntersectionObserver** - Para componentes con scroll detection
- **ResizeObserver** - Para componentes responsive
- **matchMedia** - Para media queries

## Buenas Prácticas

1. **Naming**: Los archivos de test deben tener el sufijo `.test.jsx` o `.test.js`
2. **Organización**: Coloca los tests junto al componente que testean
3. **Describe**: Agrupa tests relacionados con `describe()`
4. **It**: Cada test debe tener una descripción clara
5. **Arrange-Act-Assert**: Organiza tus tests en estas tres secciones
6. **Cleanup**: El cleanup automático está configurado en setup.js

## Coverage

Para generar un reporte de cobertura:

```bash
npm run test:coverage
```

Esto generará un reporte en la carpeta `coverage/` mostrando:

- % de líneas cubiertas
- % de funciones cubiertas
- % de branches cubiertas
- % de statements cubiertas

## Recursos

- [Vitest Docs](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Próximos Tests a Implementar

- [ ] Hook `useActiveSection`
- [ ] Hook `useLenis`
- [ ] Componente `Skills`
- [ ] Componente `Timeline`
- [ ] Componente `ProjectCard`
- [ ] Integración de rutas
- [ ] Tests E2E con Playwright (futuro)
