document.addEventListener("DOMContentLoaded", function () {
    const galeriaVideos = document.querySelector(".video-gallery");
    const anterior = document.querySelector(".prev-button");
    const siguiente = document.querySelector(".next-button");
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