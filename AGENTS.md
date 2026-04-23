# Portafolio — Agent Guidelines

Portafolio personal de **Jaziel Cervantes** (Tijuana, México). Stack: Astro 5 + React 18 + Tailwind 3.
Objetivo del ciclo actual: mejorar visual y código usando SDD con GitHub Copilot (Claude Sonnet 4.6)
y los skills open-source instalados (`impeccable`, `ui-ux-pro-max`).

## Build & Dev

```bash
npm run dev      # Servidor de desarrollo (localhost:4321)
npm run build    # Build estático → dist/
npm run preview  # Vista previa del build
```

No hay tests ni linting configurados.

## Architecture

| Carpeta | Rol |
|---------|-----|
| `src/pages/*.astro` | Rutas (file-based routing). No lógica interactiva aquí. |
| `src/layouts/Layout.astro` | Wrapper HTML global — define `<head>`, fonts, `globals.css` |
| `src/components/*.jsx` | Componentes React con estado local (`useState`). Sin props desde Astro. |
| `src/styles/globals.css` | Animaciones globales (`fadeInUp`, `shine`, `spin-slow`) + scrollbar |
| `public/images/` | `perfil.jpg` + `project{1-8}.jpg` |

## Key Conventions

**Hydration**: Todos los componentes React se montan con `client:load` — si agregas uno nuevo, mantén ese patrón.

**Datos hardcodeados**: El contenido (proyectos, skills, redes) vive dentro de cada `.jsx`. No hay CMS ni fetching externo. Para actualizar datos, edita directamente los arrays en el componente correspondiente.

**Tipado**: Las páginas `.astro` usan TS (`interface Props`). Los componentes React son `.jsx` sin tipos — no convertir a `.tsx` salvo que se pida explícitamente.

**Archivos clave de referencia de patrones**:
- Componente complejo → [`src/components/ProjectsList.jsx`](src/components/ProjectsList.jsx)
- Animaciones + glassmorphism → [`src/components/Hero.jsx`](src/components/Hero.jsx)
- Layout base → [`src/layouts/Layout.astro`](src/layouts/Layout.astro)

## Design System

Tokens definidos en [`tailwind.config.mjs`](tailwind.config.mjs):

| Token | Valor | Uso |
|-------|-------|-----|
| `font-display` | Space Mono | Headings, nombres, badges |
| `font-body` | Work Sans | Texto corrido |
| `primary` | `#0EA5E9` | Cyan — color de acento principal |
| `dark` | `#0F172A` | Fondo base |
| `accent` | `#F59E0B` | Amber — highlights secundarios |

**Patrones visuales activos**: dark-mode por defecto · glassmorphism (`bg-white/5 backdrop-blur-md border-white/10`) · gradient text · `shadow-primary/20`.

## Skills Instalados

Para mejoras visuales y de UI, invocar los skills antes de generar código:

- **`impeccable`** — diseño de componentes frontend production-grade. Usar con `/craft` para construir, `/extract` para sacar tokens.
- **`ui-ux-pro-max`** — paletas, tipografía, UX guidelines, 25 tipos de charts. Usar para decisiones de diseño.

> Los skills están en `.agents/skills/`. Cuando Copilot genere componentes nuevos o refactorice UI, debe leer el `SKILL.md` del skill relevante primero.

## Pitfalls Comunes

- **No usar SSR**: La config de Astro es SSG puro (`output` no definido → static). No agregar adaptadores de servidor sin discutirlo.
- **client:load en todos los React**: Omitirlo deja los componentes sin hidratar (solo HTML estático).
- **Fuentes vía CDN**: Space Mono y Work Sans se cargan desde Google Fonts en [`Layout.astro`](src/layouts/Layout.astro) — no instalar paquetes de fuentes npm.
