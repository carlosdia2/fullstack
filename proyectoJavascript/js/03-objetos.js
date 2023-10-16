"use strict"; //correr JS en modo estricto

let producto = {

    nombreProducto: "ketchup",
    precio: 2,
    disponible: true

}

console.log(producto);

console.log(`este es mi primer objeto: ${producto}`, producto);

console.log("uso de sintaxis de punto producto.precio:", producto.precio);

console.log(`mostrando producto.precio con el Template String: ${producto.precio}`);

producto.categoria = "salsas";

console.log("añadimos une nueva propiedad 'categoria' al objeto producto:", producto);

delete producto.disponible;
console.log("Borramos disponible a producto : ", producto);

const precioProducto = producto.precio;

// almacenar el valor de la propiedad nombreProducto del objeto producto. 

let nombreProducto = producto.nombre;

// Puedes llamar igual la variable y la propieda no pasa nada pues son dos cosas distintas.

// DESTRUCTURING al PRECIO (otra forma de crear variables a partir de las propiedades)



let{precio} = producto;

console.log(precio);

// Ejercicio 

// crear un objeto que se llame Playa
// con las siguientes propiedades:

// -nombrePlaya
// -ubicacion
// -recomendable
// -temperaturaAgua
// hacer destructurin a las propiedades y mostrar las info por consola con template string

// en la playa ---- que esta en --- el agua esta a ---  te la recomiendo: ----

let playa = {
    nombrePlaya: "Los cocos",
    ubicacion: "Venezuela",
    recomendable: true,
    temperaturaAgua: 33
};



//ya hemos creado nuestro objeto 

//ahora hacemos el destructuring (separar una propiedad y convertirla en una variable)

const {nombrePlaya, ubicacion, recomendable, temperaturaAgua} = playa;

console.log(`en la playa ${nombrePlaya} que esta en ${ubicacion}, la temperatura suele estar en ${temperaturaAgua}, y si me preguntas si te la recomiendo, te digo: ${recomendable}`);

//creamos una nueva propiedad para el objeto Playa;

playa.tipoArena="arena limpia";

// metodos para los objetos

// congelar: si queremos congelar un objeto para que no se puedan modificar las propiedades, hacemos uso de Object.freeze();

// Object.freeze(producto);

//producto.congelado = "intentamos congelarlo";

console.log(producto); //imprimimos en consola el objeto producto, pero no aparece la propiedad que hemos intentado crear, porque previamente lo hemos congelado con freeze.

console.log("esta congelado??", Object.isFrozen(producto)); 

//ejercicio 

//crear un objeto nuevo que se llame medidas con 4 propiedades (alto ancho peso y profundidad)



let medidas ={
    peso:10,
    alto:5,
    ancho: 4,
    profundidad: 2
}

Object.seal(medidas);  //con seal deja modificar el valor de la propiedad (pero no dejara añadir ni borrar propiedades)



medidas.profundidad = 1;

console.log("Mostramos como se puede modificar con seal", medidas)



// resumiendo:

// feeze

// no podemos añadir, borrar ni modificar propiedades.Object

// con seal: permite modificar pero no borrar ni añadir. 

let nuevoProducto = {...producto,...medidas};
console.log("nuevo objeto con spread operator", nuevoProducto)

//aplicamos las propiedades de ambos objetos y las unimos en un solo objeto.






