function obtenerZonas() {
    // Esta función se llama obtenerZonas.

    fetch("zonas.json")
        // Se utiliza la función fetch para obtener un archivo JSON llamado "zonas.json".
        .then(resultado => {
            return resultado.json();
        })
        // Cuando se completa la solicitud fetch, se obtiene una respuesta (resultado),
        // y se convierte en formato JSON.

        .then(datos => {
            // Una vez que los datos JSON se han convertido con éxito,
            // se almacenan en la variable "datos".

            const {zonas} = datos;
            // Se extrae la propiedad "zonas" del objeto "datos" y se almacena en la variable "zonas".

            const seccionZonas = document.querySelector(".seccionZonas");
            // Se selecciona un elemento del documento HTML con la clase "seccionZonas" y se almacena en "seccionZonas".

            zonas.forEach(zona => {
                // Se recorre cada elemento en el arreglo "zonas".

                let contenedor = document.createElement("div");
                // Se crea un elemento <div> y se almacena en la variable "contenedor".

                let nombreZona = document.createElement("p");
                nombreZona.textContent = "Zona " + zona.zona;
                // Se crea un elemento <p> y se establece su contenido de texto como "Zona" seguido del nombre de la zona.

                let ciudades = document.createElement("p");
                ciudades.textContent = zona.ciudades;
                // Se crea otro elemento <p> y se establece su contenido de texto como las ciudades de la zona.

                let contenedor2 = document.createElement("div");
                // Se crea un segundo elemento <div> y se almacena en "contenedor2".

                let enlaceZonas = document.createElement("a");
                enlaceZonas.href = zona.enlaceZonas;
                enlaceZonas.textContent = "Ir a página de zona";
                // Se crea un enlace <a> y se establece su URL y texto.

                let enlaceCursos = document.createElement("a");
                enlaceCursos.href = zona.enlaceCursos;
                enlaceCursos.textContent = "Ver cursos en esta zona";
                // Se crea otro enlace <a> y se establece su URL y texto.

                contenedor.appendChild(nombreZona);
                contenedor.appendChild(ciudades);
                contenedor2.appendChild(enlaceZonas);
                contenedor2.appendChild(enlaceCursos);
                // Se agregan los elementos creados al contenedor principal o secundario.

                seccionZonas.appendChild(contenedor);
                seccionZonas.appendChild(contenedor2);
                // Se agregan los contenedores al elemento con la clase "seccionZonas" en el documento HTML.
            });
        });
}

obtenerZonas();
// Finalmente, se llama a la función "obtenerZonas" para ejecutarla.
