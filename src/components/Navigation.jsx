// Navigation.jsx
// Barra de navegación fija en la parte superior.
// Maneja tres estados globales compartidos con todos los componentes:
//   1. isOpen    → menú móvil abierto/cerrado
//   2. isDark    → tema oscuro/claro (persiste en localStorage)
//   3. lang      → idioma activo "es" | "en" (persiste en localStorage)
//
// Los cambios de tema se aplican añadiendo/quitando la clase "light" en <html>.
// Los cambios de idioma se propagan a los demás componentes mediante un
// evento personalizado del navegador (CustomEvent "langChange").

import { useState, useEffect } from 'react';

// Textos del menú en ambos idiomas
const NAV_TEXT = {
  es: { home: 'Inicio', projects: 'Proyectos', contact: 'Contacto' },
  en: { home: 'Home',   projects: 'Projects',  contact: 'Contact'  },
};

export default function Navigation() {
  const [isOpen,  setIsOpen]  = useState(false);
  const [isDark,  setIsDark]  = useState(true);   // true = tema oscuro (default)
  const [lang,    setLang]    = useState('es');    // 'es' | 'en'

  // Al montar el componente, leemos las preferencias guardadas por el usuario
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedLang  = localStorage.getItem('lang')  || 'es';
    setIsDark(savedTheme === 'dark');
    setLang(savedLang);
    // Por si la clase no fue aplicada por el script inline (casos edge)
    document.documentElement.classList.toggle('light', savedTheme === 'light');
  }, []);

  // --- Función: cambiar entre tema oscuro y claro ---
  function toggleTheme() {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    // Añadir/quitar clase "light" en <html> activa todos los overrides de CSS
    document.documentElement.classList.toggle('light', newTheme === 'light');
  }

  // --- Función: cambiar entre español e inglés ---
  function toggleLang() {
    const newLang = lang === 'es' ? 'en' : 'es';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    // Notificamos a todos los componentes que escuchan "langChange"
    window.dispatchEvent(new CustomEvent('langChange', { detail: newLang }));
  }

  // Textos activos según el idioma seleccionado
  const t = NAV_TEXT[lang];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* Logo / nombre */}
          <a href="/" className="text-2xl font-display font-bold text-primary hover:text-accent transition-colors">
            Jaziel Cervantes
          </a>

          {/* Menú desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/"          className="text-white/80 hover:text-primary transition-colors font-medium">{t.home}</a>
            <a href="/proyectos" className="text-white/80 hover:text-primary transition-colors font-medium">{t.projects}</a>
            <a href="/contacto"  className="text-white/80 hover:text-primary transition-colors font-medium">{t.contact}</a>

            {/* Separador visual */}
            <span className="text-white/20 select-none">|</span>

            {/* Botón de idioma: muestra el idioma AL QUE puedes cambiar */}
            <button
              onClick={toggleLang}
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                         border border-white/10 text-white/70 hover:text-primary
                         hover:border-primary/40 transition-all duration-200
                         font-display text-sm font-bold tracking-wide"
            >
              {/* Idioma activo (opaco) → idioma destino (resaltado) */}
              <span className={lang === 'es' ? 'text-primary' : 'text-white/40'}>ES</span>
              <span className="text-white/20">/</span>
              <span className={lang === 'en' ? 'text-primary' : 'text-white/40'}>EN</span>
            </button>

            {/* Botón de tema: sol = ir a claro, luna = ir a oscuro */}
            <button
              onClick={toggleTheme}
              title={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
              className="p-2 rounded-lg border border-white/10
                         text-white/70 hover:text-primary hover:border-primary/40
                         transition-all duration-200"
            >
              {isDark
                ? /* Ícono de sol: cambia a modo claro */
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 
                         17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707
                         M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                : /* Ícono de luna: cambia a modo oscuro */
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
              }
            </button>
          </div>

          {/* Botón de menú en móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <a href="/"          className="text-white/80 hover:text-primary transition-colors font-medium">{t.home}</a>
            <a href="/proyectos" className="text-white/80 hover:text-primary transition-colors font-medium">{t.projects}</a>
            <a href="/contacto"  className="text-white/80 hover:text-primary transition-colors font-medium">{t.contact}</a>

            {/* Controles de tema e idioma en una fila dentro del menú móvil */}
            <div className="flex items-center gap-3 pt-2 border-t border-white/10">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg
                           border border-white/10 font-display text-sm font-bold"
              >
                <span className={lang === 'es' ? 'text-primary' : 'text-white/40'}>ES</span>
                <span className="text-white/20">/</span>
                <span className={lang === 'en' ? 'text-primary' : 'text-white/40'}>EN</span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-white/10 text-white/70 hover:text-primary"
              >
                {isDark
                  ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 
                           17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707
                           M12 8a4 4 0 100 8 4 4 0 000-8z" />
                    </svg>
                  : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                    </svg>
                }
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

