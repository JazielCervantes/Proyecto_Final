import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-display font-bold text-primary hover:text-accent transition-colors"> Jaziel Cervantes </a>

          {/* Menú Desktop */}
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-white/80 hover:text-primary transition-colors font-medium">
              Inicio
            </a>
            <a href="/proyectos" className="text-white/80 hover:text-primary transition-colors font-medium">
              Proyectos
            </a>
            <a href="/contacto" className="text-white/80 hover:text-primary transition-colors font-medium">
              Contacto
            </a>
          </div>

          {/* Botón Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <a href="/" className="text-white/80 hover:text-primary transition-colors font-medium">
              Inicio
            </a>
            <a href="/proyectos" className="text-white/80 hover:text-primary transition-colors font-medium">
              Proyectos
            </a>
            <a href="/contacto" className="text-white/80 hover:text-primary transition-colors font-medium">
              Contacto
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
