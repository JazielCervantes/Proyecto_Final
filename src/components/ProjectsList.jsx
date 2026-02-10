import { useState } from 'react';

export default function ProjectsList() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [animatedProjects, setAnimatedProjects] = useState(new Set());
  
  const projects = [
    {
      id: 1,
      title: 'Calculadora Virtual',
      description: 'Proyecto simple de una calculadora virtual donde, como desarrollador, practicas la manipulación del DOM y la gestión de eventos.',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      githubUrl: 'https://calculadora-virtual-mu.vercel.app/',
      image: '/images/project1.jpg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Login Page sin Base de Datos',
      description: 'Proyecto sencillo para manejo de login sin usar base de datos, para posteriormente realizar una solicitud Get y Post a una API pública..',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      githubUrl: 'https://github.com/JazielCervantes/Login_sinBD',
      image: '/images/project2.jpg',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Conexión API pública con diferentes métodos',
      description: 'Introducción práctica al uso de Axios, Fetch y jQuery en la programación web.',
      technologies: ['jQuery', 'JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/JazielCervantes/Ejercicio_semanal_11',
      image: '/images/project3.jpg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Conexión API pública usando patrón MVC.',
      description: 'Proyecto enfocado en el uso del patrón Modelo-Vista-Controlador (MVC) para crear una aplicación web que consulte y muestre información sobre usuarios utilizando la API pública JSONPlaceholder.',
      technologies: ['jQuery', 'JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/JazielCervantes/Caso_practico_modulo6',
      image: '/images/project4.jpg',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'CRUD',
      description: 'CRUD completo que gestiona información ingresada por el usuario (nombre, teléfono y correo electrónico). Permite crear, almacenar, editar y eliminar utilizando métodos POST, GET, PUT y DELETE mediante procesos almacenados en MySQL.',
      technologies: ['Astro', 'Django', 'Python', 'MySQL'],
      githubUrl: 'https://github.com/JazielCervantes/CRUD_ASTRO_DJANGO_MySQL',
      image: '/images/project5.jpg',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Portafolio Personal',
      description: 'Portafolio personal como Desarrollador Web, en el que se visualiza una breve descripción, proyectos y medio de contacto..',
      technologies: ['Astro', 'TailwindCSS', 'React'],
      githubUrl: 'https://github.com/tu-usuario/chat-realtime',
      image: '/images/project6.jpg',
      color: 'from-teal-500 to-cyan-500'
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative">
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/98 to-dark"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Mis Proyectos
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Explora los proyectos en los que he trabajado. Haz clic en cualquiera para ver el código en GitHub.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onAnimationEnd={() => {
                setAnimatedProjects(prev => new Set([...prev, project.id]));
              }}
              className={`
                group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden 
                border border-white/10 hover:border-primary/50 
                transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20
                ${!animatedProjects.has(project.id) ? 'opacity-0' : 'opacity-100'}
              `}
              style={{
                animation: !animatedProjects.has(project.id) 
                  ? `fadeInUp 0.6s ease-out ${index * 0.1}s forwards` 
                  : 'none',
              }}
            >
              
              {/* Imagen del proyecto */}
              <div className="relative h-48 overflow-hidden">
                
                {/* Imagen real */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay degradado */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`}></div>
                
                {/* Ícono de GitHub */}
                <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Indicador de hover */}
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-semibold">Ver en GitHub</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Efecto de brillo al hover */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shine pointer-events-none"></div>
              )}
            </a>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-white/60 mb-6">
            ¿Quieres ver más? Visita mi perfil de GitHub
          </p>
          <a
            href="https://github.com/JazielCervantes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/30"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Ver perfil completo
          </a>
        </div>
      </div>
    </section>
  );
}
