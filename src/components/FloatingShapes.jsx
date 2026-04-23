// FloatingShapes.jsx
// Burbujas glassmorphic animadas que viven en el fondo de TODAS las páginas.
// Son "fixed" (no se mueven al hacer scroll) y tienen pointer-events:none
// para que nunca interfieran con los clics del usuario.

// Definición de cada burbuja: tamaño, posición en pantalla,
// retraso de inicio y duración de su animación
const SHAPES = [
  { id: 1, size: 380, top: '6%',  left: '2%',   delay: 0,  duration: 22, color: 'primary' },
  { id: 2, size: 260, top: '52%', left: '74%',  delay: 5,  duration: 28, color: 'accent'  },
  { id: 3, size: 190, top: '22%', left: '55%',  delay: 9,  duration: 19, color: 'primary' },
  { id: 4, size: 310, top: '68%', left: '8%',   delay: 14, duration: 24, color: 'accent'  },
  { id: 5, size: 210, top: '1%',  left: '38%',  delay: 7,  duration: 30, color: 'primary' },
  { id: 6, size: 150, top: '80%', left: '58%',  delay: 3,  duration: 17, color: 'accent'  },
  { id: 7, size: 230, top: '42%', left: '87%',  delay: 11, duration: 25, color: 'primary' },
];

export default function FloatingShapes() {
  return (
    // Contenedor fijo que cubre toda la pantalla
    // z-0 → siempre queda por detrás de TODO el contenido
    // pointer-events-none → los clics lo atraviesan sin problema
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"  // Los lectores de pantalla lo ignoran (es solo decoración)
    >
      {SHAPES.map((shape) => {
        // Alternamos entre el color primario (cian) y el acento (ámbar) para variedad
        const isPrimary = shape.color === 'primary';

        // Gradiente radial muy sutil que va del centro hacia afuera desapareciendo
        const gradient = isPrimary
          ? 'radial-gradient(circle, rgba(14,165,233,0.10) 0%, rgba(14,165,233,0.02) 70%)'
          : 'radial-gradient(circle, rgba(245,158,11,0.08)  0%, rgba(245,158,11,0.02) 70%)';

        // Borde muy tenue para reforzar el efecto de vidrio
        const border = isPrimary
          ? '1px solid rgba(14,165,233,0.07)'
          : '1px solid rgba(245,158,11,0.06)';

        // Cada burbuja usa una de 3 variantes de animación (definidas en globals.css)
        // para que los movimientos sean orgánicos y no todos iguales
        const animVariant = (shape.id % 3) + 1;

        return (
          <div
            key={shape.id}
            style={{
              position: 'absolute',
              width:  shape.size,
              height: shape.size,
              top:    shape.top,
              left:   shape.left,
              borderRadius: '50%',
              background:   gradient,
              border:       border,
              backdropFilter: 'blur(40px)',
              // animación: nombre de variante + duración + retraso + loop infinito
              animation: `floatShape${animVariant} ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
