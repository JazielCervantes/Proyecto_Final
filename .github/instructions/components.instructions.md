---
applyTo: "src/components/**/*.jsx"
---

# Convenciones de Componentes React

## Estructura Estándar

```jsx
// 1. Imports
import { useState, useEffect } from 'react';

// 2. Datos hardcodeados (si aplica al componente)
const items = [ /* ... */ ];

// 3. Componente con export default al final
function MyComponent() {
  const [state, setState] = useState(false);

  return (/* JSX */);
}

export default MyComponent;
```

## Hidratación

Siempre usar `client:load` al importar en páginas `.astro`. Sin este directivo el componente no tiene interactividad.

## Animaciones

Preferir las clases de `globals.css` ya definidas (`animate-fadeInUp`, `animate-shine`) sobre nuevas `@keyframes`.
Para entrance animations usar `IntersectionObserver` + `useState(false)` como en `ProjectsList.jsx`.

## Glassmorphism (patrón de cards)

```jsx
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 
                hover:bg-white/10 transition-all duration-300 
                shadow-lg shadow-primary/10">
```

## Responsive

Mobile-first. Breakpoints estándar de Tailwind: `md:` (768px), `lg:` (1024px).
Grid de proyectos: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
