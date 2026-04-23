// Skills.jsx
// Sección de habilidades técnicas del portafolio.
// Muestra lenguajes de programación y frameworks/librerías
// con los íconos SVG originales de cada tecnología (via devicons CDN).
// Soporta cambio de idioma ES/EN.

import { useState, useEffect } from 'react';

// Base URL del CDN de devicons — íconos SVG oficiales de cada tecnología
// Fuente: https://devicon.dev  (open source, Apache 2.0)
const ICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

// --- Lenguajes de programación ---
// Cada entrada tiene: nombre para mostrar, URL del ícono SVG y color del gradiente hover
const languages = [
  {
    name: 'JavaScript',
    icon: `${ICON}/javascript/javascript-original.svg`,
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    name: 'TypeScript',
    icon: `${ICON}/typescript/typescript-original.svg`,
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'HTML5',
    icon: `${ICON}/html5/html5-original.svg`,
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'C#',
    icon: `${ICON}/csharp/csharp-original.svg`,
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'CSS3',
    icon: `${ICON}/css3/css3-original.svg`,
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Python',
    icon: `${ICON}/python/python-original.svg`,
    color: 'from-green-400 to-yellow-500',
  },
  {
    name: 'SQL / MySQL',
    icon: `${ICON}/mysql/mysql-original.svg`,
    color: 'from-orange-400 to-blue-500',
  },
];

// --- Frameworks y librerías ---
const frameworks = [
  {
    name: 'Astro',
    icon: `${ICON}/astro/astro-original.svg`,
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'React.js',
    icon: `${ICON}/react/react-original.svg`,
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    name: 'Vue.js',
    icon: `${ICON}/vuejs/vuejs-original.svg`,
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    name: 'Tailwind CSS',
    icon: `${ICON}/tailwindcss/tailwindcss-original.svg`,
    color: 'from-teal-400 to-teal-600',
  },
  {
    name: 'ASP.NET',
    icon: `${ICON}/dotnetcore/dotnetcore-original.svg`,
    color: 'from-violet-400 to-violet-600',
  },
  {
    name: 'Django',
    icon: `${ICON}/django/django-plain.svg`,
    color: 'from-green-600 to-green-800',
  },
  {
    name: 'FastAPI',
    icon: `${ICON}/fastapi/fastapi-original.svg`,
    color: 'from-teal-500 to-teal-700',
  },
  {
    name: 'jQuery',
    icon: `${ICON}/jquery/jquery-original.svg`,
    color: 'from-blue-400 to-blue-600',
  },
];

// Traducciones de los títulos de sección
const TEXT = {
  es: {
    title:    'Habilidades',
    subtitle: 'Tecnologías que utilizo en mis proyectos',
    langsCat: 'Lenguajes de Programación',
    fwCat:    'Frameworks y Librerías',
  },
  en: {
    title:    'Skills',
    subtitle: 'Technologies I use in my projects',
    langsCat: 'Programming Languages',
    fwCat:    'Frameworks & Libraries',
  },
};

// --- Componente de tarjeta individual de habilidad ---
// Recibe un objeto skill (con name, icon, color) y su índice para el delay de animación
function SkillCard({ skill, index }) {
  return (
    <div
      className="group relative p-6 rounded-2xl border border-white/10 
                 backdrop-blur-sm transition-all duration-500 cursor-default
                 hover:scale-105 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20
                 opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Fondo gradiente que aparece suavemente al hacer hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} 
                      opacity-0 rounded-2xl transition-opacity duration-500 
                      group-hover:opacity-10`}>
      </div>

      {/* Contenido: ícono SVG + nombre */}
      <div className="relative z-10 text-center">
        {/* 
          Ícono SVG oficial de la tecnología.
          - w-12 h-12 → tamaño consistente entre todos los íconos
          - object-contain → mantiene proporciones sin recortar
          - Django usa ícono monocromático; en light mode puede verse tenue,
            pero el efecto glassmorphic del fondo lo contrasta bien
        */}
        <img
          src={skill.icon}
          alt={`Ícono de ${skill.name}`}
          className="w-12 h-12 mx-auto mb-3 object-contain
                     transition-transform duration-300 group-hover:scale-125"
          loading="lazy"
        />
        <h3 className="font-display font-bold text-lg text-white">
          {skill.name}
        </h3>
      </div>

      {/* Efecto de brillo al hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                      from-transparent via-white/10 to-transparent 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-700 pointer-events-none">
      </div>
    </div>
  );
}

export default function Skills() {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    // Leer idioma guardado al montar
    const savedLang = localStorage.getItem('lang') || 'es';
    setLang(savedLang);

    // Escuchar cambios de idioma desde Navigation.jsx
    const handleLangChange = (e) => setLang(e.detail);
    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const t = TEXT[lang];

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-white/60 text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Categoría: Lenguajes */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold mb-8 text-primary">
            {t.langsCat}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <SkillCard key={lang.name} skill={lang} index={index} />
            ))}
          </div>
        </div>

        {/* Categoría: Frameworks y librerías */}
        <div>
          <h3 className="text-2xl font-display font-bold mb-8 text-accent">
            {t.fwCat}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {frameworks.map((fw, index) => (
              <SkillCard key={fw.name} skill={fw} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
