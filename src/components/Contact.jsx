import { useState } from 'react';

export default function Contact() {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [animatedSocials, setAnimatedSocials] = useState(new Set());

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/JazielCervantes/',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jaziel-cervantes/',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'Gmail',
      url: 'mailto:jazielcas18@gmail.com?subject=Contacto%20desde%20tu%20portafolio&body=Hola%20Jaziel,%20vi%20tu%20portafolio%20y...',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      ),
      color: 'from-red-500 to-red-700',
      hoverColor: 'hover:text-red-400'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/JazielCervantes',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'from-gray-800 to-black',
      hoverColor: 'hover:text-gray-300'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/jaziel.cervantes2',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jay_z.exe',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      ),
      color: 'from-pink-500 via-purple-500 to-orange-500',
      hoverColor: 'hover:text-pink-400'
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative flex items-center justify-center">
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Título */}
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            ¡Trabajemos Juntos!
          </span>
        </h1>

        {/* Descripción */}
        <p className="text-xl md:text-2xl text-white/70 mb-4">
          ¿Tienes un proyecto en mente? ¿Necesitas ayuda con desarrollo web?
        </p>
        <p className="text-lg text-white/60 mb-16 max-w-2xl mx-auto">
          Estoy siempre abierto a nuevas oportunidades y colaboraciones. 
          No dudes en contactarme a través de cualquiera de mis redes sociales.
        </p>

        {/* Redes Sociales */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target={social.name !== 'Gmail' ? '_blank' : undefined}
              rel={social.name !== 'Gmail' ? 'noopener noreferrer' : undefined}
              onMouseEnter={() => setHoveredSocial(social.name)}
              onMouseLeave={() => setHoveredSocial(null)}
              onAnimationEnd={() => {
                setAnimatedSocials(prev => new Set([...prev, social.name]));
              }}
              className={`
                group relative
                ${!animatedSocials.has(social.name) ? 'opacity-0' : 'opacity-100'}
              `}
              style={{
                animation: !animatedSocials.has(social.name)
                  ? `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`
                  : 'none',
              }}
            >
              <div className={`
                relative p-8 rounded-2xl border border-white/10 
                backdrop-blur-sm bg-white/5
                transition-all duration-500
                hover:scale-110 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20
                ${hoveredSocial === social.name ? 'z-10' : ''}
              `}>
                {/* Gradiente de fondo */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Contenido */}
                <div className="relative z-10 space-y-3">
                  <div className={`text-white/70 ${social.hoverColor} transition-colors transform group-hover:scale-110 duration-300 flex justify-center`}>
                    {social.icon}
                  </div>
                  <h3 className="font-display font-bold text-white">
                    {social.name}
                  </h3>
                </div>

                {/* Efecto de brillo */}
                {hoveredSocial === social.name && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Información adicional de contacto */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-4 text-primary">
            📧 Información de Contacto
          </h2>
          <div className="space-y-3 text-white/70">
            <p className="flex items-center justify-center gap-2">
              <span className="font-semibold text-white">Email:</span>
              <a href="mailto:jazielcas18@gmail.com" className="hover:text-primary transition-colors">
                jazielcas18@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="font-semibold text-white">Ubicación:</span>
              <span>Tijuana, México. Con disponibilidad para trabajo remoto.</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="font-semibold text-white">Disponibilidad:</span>
              <span className="text-green-400">Disponible para proyectos</span>
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12">
          <a
            href="mailto:jazielcas18@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-primary/30"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Enviar un correo
          </a>
        </div>
      </div>
    </section>
  );
}
