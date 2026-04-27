// Hero.jsx
// Sección principal (landing) del portafolio.
// Muestra foto de perfil, nombre, título y botones de acción.
// Soporta cambio de idioma ES/EN a través del evento "langChange"
// que dispara Navigation.jsx cuando el usuario presiona el toggle.

import { useEffect, useState } from 'react';

// Traducciones del Hero — cada clave tiene versión ES e EN
const TEXT = {
  es: {
    greeting:    'Hola, soy',
    role:        'Desarrollador Web Full Stack',
    description: 'Apasionado por crear experiencias web únicas y funcionales. Me especializo en desarrollo frontend y backend, siempre buscando aprender nuevas tecnologías y mejorar mis habilidades.',
    ctaProjects: 'Ver Proyectos',
    ctaContact:  'Contactar',
  },
  en: {
    greeting:    "Hi, I'm",
    role:        'Full Stack Web Developer',
    description: 'Passionate about building unique and functional web experiences. I specialize in frontend and backend development, always looking to learn new technologies and sharpen my skills.',
    ctaProjects: 'View Projects',
    ctaContact:  'Contact Me',
  },
};

export default function Hero() {
  // isVisible controla la animación de entrada al cargar la página
  const [isVisible, setIsVisible] = useState(false);
  // lang guarda el idioma activo; empieza en 'es' y se actualiza al hidratar
  const [lang, setLang] = useState('es');

  useEffect(() => {
    // Disparamos la animación de entrada
    setIsVisible(true);

    // Leemos el idioma guardado en localStorage (puede haber sido cambiado antes)
    const savedLang = localStorage.getItem('lang') || 'es';
    setLang(savedLang);

    // Escuchamos cambios de idioma que envía Navigation.jsx
    const handleLangChange = (e) => setLang(e.detail);
    window.addEventListener('langChange', handleLangChange);

    // Limpiamos el listener cuando el componente se desmonta
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  // Textos activos según el idioma
  const t = TEXT[lang];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Imagen Personal — entra desde la izquierda */}
        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="relative w-52 h-52 mx-auto">
            {/* Halo de color detrás de la foto */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-primary rounded-full blur-3xl opacity-20"></div>
            <div className="relative z-10 w-full h-full rounded-full border-4 border-primary/30 shadow-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 flex items-center justify-center hover:scale-105 transition-transform duration-500">
              <img 
                src="/images/perfil.jpg" 
                alt="Foto de perfil de Jaziel Cervantes"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Anillo decorativo giratorio */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
          </div>
        </div>

        {/* Información Personal — entra desde la derecha */}
        <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          
          {/* Nombre y saludo */}
          <h1 className="text-5xl md:text-7xl font-display font-bold">
            <span className="text-primary">{t.greeting}</span>
            <br />
            {/* Gradient text: en modo claro, from-white se convierte en oscuro (via globals.css) */}
            <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
              Jaziel Cervantes
            </span>
          </h1>

          {/* Título profesional */}
          <p className="text-xl md:text-2xl text-white/60 font-medium">
            {t.role}
          </p>

          {/* Descripción personal */}
          <p className="text-lg text-white/70 leading-relaxed max-w-xl">
            {t.description}
          </p>

          {/* Botones de acción */}
          <div className="flex gap-4 pt-4">
            <a 
              href="/proyectos" 
              className="px-8 py-3 bg-primary hover:bg-primary/80 rounded-lg font-semibold text-white transition-all hover:scale-105 shadow-lg shadow-primary/30"
            >
              {t.ctaProjects}
            </a>
            <a 
              href="/contacto" 
              className="px-8 py-3 border-2 border-primary hover:bg-primary/10 rounded-lg font-semibold text-white transition-all hover:scale-105"
            >
              {t.ctaContact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

