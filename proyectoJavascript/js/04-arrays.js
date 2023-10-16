// crear tres variables y darle valores que queramos

variablea = "varA";
variableb = "varB";
variablec = "varC";


// luego crear un objeto vacio 

let ejercicio6 = {};

// creamos propiedades a partir de las variables (lo opuesto al destructuring)


ejercicio6.variablea=variablea;
ejercicio6.variableb=variableb;
ejercicio6.variablec=variablec;

console.log(ejercicio6);

//se imprime el objeto con sus propiedades y valores.

//creamos nuestro primer ARRAY NUMEROS

let numeros = [10,20,30,40,50];

console.log("mi primer array: ", numeros);

console.table(numeros);

//se imprime la tabla de dos columnas: el indice y el valor.

//creamos nuevo array llamado meses:

//otra forma de crearla:

const meses = new Array("Enero", "Febrero", "marzo"); //forma menos utilizada

console.table(meses);

// y otro mas:

const diaSemana=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

console.table(diaSemana);

//si quiero mostrar el indice numero 2:

console.log("quiero acceder a la posicion 3 de diaSemana, asi que pongo indice 2: diaSemana[2] ",diaSemana[2]);

//mostramos solo lunes y jueves:

console.log("mostrando solo lunes y jueves::::: ", diaSemana[0], diaSemana[3]);

//creamos un objeto con tres propiedades, tipo string, num y booleano
//añadimos una propiedad a ese objeto que va a ser tipo array
//y tendra como valores los dias del fin de semana
//luego, hacemos destructuring con cada una de las propiedades del objeto

let finde = {
    prop1:"string",
    prop2:3,
    prop3: true
};

//añadimos una propiedad nueva llamada finSemana que tiene como valor un tipo array:

finde.finSemana=["sabado", "domingo"];

//imprimimos nuestro objeto

console.log(finde);

//hemos puesto un array dentro de un objeto. como una propiedad más.


//ahora, hacemos un destructuring de cada propiedad para crear variables con el mismo nombre, y poder llamar a las propiedades por separado sin referirnos al objeto.

let{prop1, prop2, prop3, finSemana} = finde;

console.log(prop1);


//ahora vemos el largo (lenght) del array

console.log("longitud del array", finSemana.length, finSemana) //longitud del array

//metodo forEach (por cada elemento del array, lo recorre uno a uno);

// Como eliminar modificar o añadir elementos a los arrays

numeros[5]= 60;

numeros.push(70); //añade 70 al final del array
numeros.push(80,90,100); //añades tantos valores como quieras


numeros.unshift(-18, 129020, -30); //añade elementos al inicio

//eliminar cosas del array

numeros.pop(); //elimina ultimo elemento del array
numeros.shift(); //elimina el primer elemento del array
numeros.splice(2,3); //indice por el que va a empezar, que a partir del indice dos, coja tres registros. (los borra)

//he estado modificando el array

//para evitar eso y crear una copia del array usamos spread operator

const nuevoArray = [16.54, ...numeros,1540];

console.log(nuevoArray); 

//creamos un nuevo array

let estaciones = ["verano"];

//añadimos las demas estaciones en orden.

estaciones.unshift("primavera");
estaciones.push("otoño", "invierno");
console.log(estaciones);

//ejercicio carritos

//crear un array carrito

let carrito = [ 

    {
        nombre: "nombre1",
        precio: 4
    },
    {
        nombre: "nombre2",
        precio: 3
    },
    {
        nombre: "nombre3",
        precio: 2
    },
    {
        nombre: "nombre4",
        precio: 1
    },

];

console.table(carrito);


//mas metodos para arrays

//include (que diga si esta o no esta en el array)

let resultado;

resultado = meses.includes("Mayo");
console.log(resultado);

//metodo some. es ideal para array de objetos.

// resultado = carrito.some(function(producto){
//     return producto.nombre === "Tablet";//me devuelve true/false

// }

//metodo filter: por ejemplo, que me diga solo los valores cuyo precio sea mayor que tanto.

resultado = carrito.filter(function (producto){
    return producto.precio >1
});

console.log("uso de filter: ", resultado);

// === exactamente iguales
//==iguales pero no estrictamente (no del mismo valor)
//!== diferentes
// <menor que
// > mayor que 
// <=
// >=

//repaso de destructuring

let objetos ={
    nombre:"carlos",
    precio:200
};

//ahora hacemos destructuring:

let {precio}= objetos;

console.log(precio);


//hemos convertido una propiedad en una variable.

