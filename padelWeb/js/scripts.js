//SECCIÓN CARLO - INICIO
document.addEventListener("DOMContentLoaded", function () {
    const galeriaVideos = document.querySelector(".galeria-videos");
    const anterior = document.querySelector(".anterior");
    const siguiente = document.querySelector(".siguiente");
    const videos = galeriaVideos.querySelectorAll("iframe");
    let videoActual = 0;
  
  // Función para mostrar el video actual
  function mostrarVideoActual() {
    videos.forEach((video, index) => {
      if (index === videoActual) {
        video.style.display = "block";
      } else {
        video.style.display = "none";
      }
    });
  }

  // Función para avanzar al siguiente video
  function siguienteVideo() {
    videoActual = (videoActual + 1) % videos.length;
    mostrarVideoActual();
  }

  // Función para retroceder al video anterior
  function videoAnterior() {
    videoActual = (videoActual - 1 + videos.length) % videos.length;
    mostrarVideoActual();
  }

  // Asigna los manejadores de eventos a los botones de navegación
  anterior.addEventListener("click", videoAnterior);
  siguiente.addEventListener("click", siguienteVideo);

  // Muestra el primer video al cargar la página
  mostrarVideoActual();
});

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  const interval = 5000; // Intervalo de cambio automático en milisegundos (por ejemplo, 5 segundos)

  // Función para mostrar un slide específico
  const showSlide = (index) => {
      slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
  };

  // Función para ir al siguiente slide
  const goToNextSlide = () => {
      currentIndex = (currentIndex + 2) % (slides.length * 2);
      showSlide(currentIndex);
  };

  // Mostrar el primer slide al cargar la página
  showSlide(currentIndex);

  // Agregar eventos a las flechas de navegación
  const nextSlideButton = document.querySelector('.next-slide');
  const prevSlideButton = document.querySelector('.prev-slide');

  nextSlideButton.addEventListener('click', () => {
      goToNextSlide();
  });

  prevSlideButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
  });

  // Cambio automático de slide
  const autoSlide = () => {
      goToNextSlide();
  };

  // Iniciar el cambio automático de slide con un intervalo
  let autoSlideInterval = setInterval(autoSlide, interval);

  // Detener el cambio automático de slide cuando el mouse entra en el slider
  slider.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
  });

  // Reanudar el cambio automático de slide cuando el mouse sale del slider
  slider.addEventListener('mouseleave', () => {
      autoSlideInterval = setInterval(autoSlide, interval);
  });
});
//SECCIÓN CARLO - FINAL