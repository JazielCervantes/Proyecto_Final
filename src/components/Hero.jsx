import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Imagen Personal */}
        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="relative w-80 h-80 mx-auto">
            {/* Efecto de fondo animado */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative z-10 w-full h-full rounded-full border-4 border-primary/30 shadow-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 flex items-center justify-center hover:scale-105 transition-transform duration-500">
              <img 
                src="\images\perfil.jpg" 
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Anillo decorativo */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
          </div>
        </div>

        {/* Información Personal */}
        <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          
          {/* nombre */}
          <h1 className="text-5xl md:text-7xl font-display font-bold">
            <span className="text-primary">Hola, soy</span>
            <br />
            <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
              Jaziel Cervantes
            </span>
          </h1>

          {/* Tu título o especialidad */}
          <p className="text-xl md:text-2xl text-white/60 font-medium">
            Desarrollador Web Full Stack
          </p>

          {/* 🔧 MODIFICAR: Tu descripción personal */}
          <p className="text-lg text-white/70 leading-relaxed max-w-xl">
            Apasionado por crear experiencias web únicas y funcionales. 
            Me especializo en desarrollo frontend y backend, siempre buscando 
            aprender nuevas tecnologías y mejorar mis habilidades.
          </p>

          {/* Botones de acción */}
          <div className="flex gap-4 pt-4">
            <a 
              href="/proyectos" 
              className="px-8 py-3 bg-primary hover:bg-primary/80 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/30"
            >
              Ver Proyectos
            </a>
            <a 
              href="/contacto" 
              className="px-8 py-3 border-2 border-primary hover:bg-primary/10 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
