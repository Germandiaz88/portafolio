// Detectar las secciones
const secciones = document.querySelectorAll('section');

// Función que revisa si una sección está en pantalla
const mostrarSeccion = () => {
  const triggerBottom = window.innerHeight * 0.8; // 80% del viewport
  secciones.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
};

// Escuchar el scroll
window.addEventListener('scroll', mostrarSeccion);

// Mostrar secciones visibles al cargar
mostrarSeccion();