//en el formato son obligatorias las comillas dobles

//destructuring al precio


/*
*******************
    COMIENZO CLASE 2023/10/30
*******************

*******************


// FETCH API

// PONER DIAPOSITIVA 17

/*
CREAMOS UN NUEVO ARCHIVO empleados.json EN LA CARPETA GLOBAL

// VAMOS SIMULAR UNA PEQUEÑA BASE DE DATOS
// JAVASCRIPT NECESITA DE UN LENGUAJE DE BACK QUE
// LE DE UNA RESPUESTA A UNA CONSULTA DE LA BASE DE DATOS
// EN EL FORMATO .JSON
// SON OBLIGATORIAS LAS COMILLAS DOBLES

*/


// Define una función llamada obtenerEmpleados
function obtenerEmpleados() {
    // Realiza una solicitud para obtener el archivo "empleados.json"
    fetch("empleados.json")
        // Cuando se recibe la respuesta, convierte los datos a JSON
        .then(resultado => {
            return resultado.json(); // Esto devuelve una promesa con los datos en formato JSON
        })
        // Una vez que los datos se han convertido a JSON, continúa aquí
        .then(datos => {
            // Utiliza desestructuración para extraer la propiedad "empleados" de los datos
            const { empleados } = datos;
            console.log(empleados); // Muestra la lista de empleados en la consola

            // Recorre la lista de empleados
            empleados.forEach(empleado => {
                console.log(empleado); // Muestra información sobre cada empleado
                console.log(empleado.id); // Muestra el ID del empleado
                console.log(empleado.nombre); // Muestra el nombre del empleado
                console.log(empleado.puesto); // Muestra el puesto del empleado
            });
        });
}

// Llama a la función obtenerEmpleados para iniciar el proceso
obtenerEmpleados();


//STATUS OK, ES QUE HA HECHO LA CONSULTA FETCH CORRECTAMENTE. STATUS 200

//OTRA FORMA DE HACERLO CON ASYNC/AWAIT

async function obtenerEmpleados2() {

    const resultado = await fetch("empleados.json");

    const datos = await resultado.json();

    console.log(datos)

}

obtenerEmpleados2();

//AHORA VEREMOS COMO ACTUAL JAVASCRIPT EN EL DOM, COMO SELECCIONAR ELEMENTOS DEL HTML, COMO CREAR EVENTOS ETC

//ENTREGAR COMO PRÁCTICA MODULO 3. UNA CARPETA CON LOS ARCHIVOS JS QUE HEMOS HECHO HASTA HOY









/*

CREAMOS EL ARCHIVO interaccion.js Y COMENTAMOS EL 10





*/