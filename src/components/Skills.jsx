import { useState } from 'react';

const languages = [
  { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
  { name: 'HTML5', icon: '🌐', color: 'from-orange-400 to-orange-600' },
  { name: 'CSS3', icon: '🎨', color: 'from-blue-400 to-blue-600' },
  { name: 'Python', icon: '🐍', color: 'from-green-400 to-green-600' },
  { name: 'SQL / MySQL', icon: '🐬', color: 'from-yellow-400 to-yellow-600' },
];

const frameworks = [
  { name: 'Astro', icon: '🚀', color: 'from-purple-400 to-purple-600' },
  { name: 'React.js', icon: '⚛️', color: 'from-cyan-400 to-cyan-600' },
  { name: 'Vue.js', icon: '💚', color: 'from-emerald-400 to-emerald-600' },
  { name: 'Tailwind CSS', icon: '🎯', color: 'from-teal-400 to-teal-600' },
  { name: 'Django', icon: '🎸', color: 'from-green-600 to-green-800' },
  { name: 'FastAPI', icon: '⚡', color: 'from-teal-500 to-teal-700' },
  { name: 'jQuery', icon: '🖥️', color: 'from-yellow-400 to-yellow-600' }
];

function SkillCard({ skill, index }) {
  return (
    <div
      className="group relative p-6 rounded-2xl border border-white/10 
                 backdrop-blur-sm transition-all duration-500 cursor-pointer
                 hover:scale-105 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20
                 opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Fondo gradiente animado */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} 
                      opacity-0 rounded-2xl transition-opacity duration-500 
                      group-hover:opacity-10`}>
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center">
        <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-125">
          {skill.icon}
        </div>
        <h3 className="font-display font-bold text-lg text-white">
          {skill.name}
        </h3>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                      from-transparent via-white/10 to-transparent 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-700 pointer-events-none">
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden">
      
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-white/60 text-lg">
            Tecnologías que utilizo en mis proyectos
          </p>
        </div>

        {/* Lenguajes */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold mb-8 text-primary">
            💻 Lenguajes de Programación
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <SkillCard key={lang.name} skill={lang} index={index} />
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div>
          <h3 className="text-2xl font-display font-bold mb-8 text-accent">
            🛠️ Frameworks y Librerías
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <SkillCard key={framework.name} skill={framework} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}