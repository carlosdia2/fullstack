// funciones 

//dentro de los parentesis van los argumentos 

// una funcion llamada sumar:




function sumar(n1, n2){ //argumento de la funcion

    console.log(n1+n2);
};

sumar(10,20); 



//otra forma de crear funciones



let sumar2= function(n3,n4){

console.log(n3+n4);
}


sumar2(3,9);



//una tercera forma (metodo IIFE)

(function(){
    console.log("funcion IIFE")

})();


//el javascript corre en dos etapas:

//primera etapa: recorre todo el codigo, lee la cracion de las funciones (etapa de creacion)
//segunda etapa: lee las etapas de las funciones. 


//hemos visto los metodos, ahora estamos viendo las funciones.
//cual es la diferencia?

//los metodos ya estan preestablecidos, y las funciones no


const numero1 = 20;
const numero2 = "20";

console.log(typeof(parseInt(numero2))); // parseInt() es una funcion.


// ejercicio: crear una funcion que reciba como argumento de entrada un color y me muestre por pantalla, el color elegido es 


function color(x){

    console.log(`el color elegido es ${x}`);

}

color("verde");


//EJERCICIO

//crear una funcion que reciba como argumentos importe, descuente
//y me muestre por pantalla el descuento total

//llamar varias veces a la funcion con distintos valores.

function contador(importe, descuento) {
    console.log(`el total a pagar es ${importe*descuento} €
    y el descuento fue de ${importe - (importe*descuento)} %`);
}

contador(100,0.5);

//crear un una funcion que cuente los caracteres de un tweet y muestre el numer de caracteres que tiene

function tweet(texto){

    console.log(`tu texto tiene: ${texto.length} caracteres!!!`);
}

tweet("hola amigos")


//crear una funcion que, dado un texto y una palabra, me diga si la palabra esta contenida en el texto

function buscar(texto,palabra){
    console.log(`¿esta esta tu palabra en el texto? ${texto.includes(palabra)}`);
}

buscar("hola amigos", "hola");

//ejercicio crear una funcion que añada un elemento al final a un array previamente definido y mostrar por pantalla.

//recibe como argumento de entrada el elemento
// la funcion se llamara añadir

let frutas=["pera", "platano"];

function añadirFruta(k){

    console.log(frutas.push(k));


}

añadirFruta("fresa");

//crear una funcion que me reste dos valores dados.

function resta(valor1, valor2){
    console.log(valor1-valor2);
}

resta(20,10);

//clase 18/10




function multiplicar (x,y){

    //las funciones que retornan valores utilizan un "return" en el cuerpo de la funcion

    return x*y;

    let resultadoMultiplicar = multiplicar(2,4);

    console.log(resultadoMultiplicar);

}

//funcion agregarCarrito



let totalCarrito = 0;

function agregarCarrito(x){

    totalCarrito+=x; //esta variable sumara su valor al valor de x;
    
}

agregarCarrito(50);
agregarCarrito(20);
agregarCarrito(10);

console.log(totalCarrito);

//realizar una funcion que calcule el descuento que se indica de los descuentos anteriores uno a uno y los sume

//Variables: descuento, totalAhorro

let descuento = 0.2;
let totalAhorro = 0;

function calcularDescuento(z){
    totalAhorro += (z*descuento);
}

calcularDescuento(100);
calcularDescuento(120);
calcularDescuento(350);

console.log(totalAhorro);

//creamos nuestros propios metodos: un metodo es un objeto donde cada propiedad es una funcion

let reproductor = {
    reproducir: function(id){
        console.log(`reproduciendo la cancion con ID ${id}`);
    },

    pausar: function(pausa){
        console.log(`pausando cancion...`);
    },

    crearPlaylist: function(nombre){
        console.log(`Creando playlist: ${nombre} `)
    }
}

reproductor.reproducir(17); //hemos creado un metodo: que no es mas que un objeto con funciones dentro.

reproductor.crearPlaylist("hola");

reproductor.borrarCancion = function(id){
    console.log(`borrando la cancion con id ${id}`);
}

reproductor.borrarCancion(16);


//crearemos una propiedad tipo funcion que sera borrar cancion;


//una funcion que al pasarle un nombre y un apellido, te encuentra por consola el nombre completo:

function nombreCompleto(nombre,ap1,ap2){
    console.log(`nombre completo: ${nombre}, apellido: ${ap1}, segundo apellido: ${ap2} `);
}


nombreCompleto("carlos", "diaz", "villavicencio")

// una funcion que al darle un argumento multiplica por tres 


let triplicar = function (x){ // esto es un objeto con una funcion dentro

    //un objeto es un contenedor de propiedades.

    x*3

}


//funciones de flecha: no son mas que una simplificacion de la expresion de una funcion
//es otra forma que tenemos para crear funciones.
    //si solo hay una linea de codigo en el cuerpo, la quitamos

    //si solo tenemos un argumento y no esta inicializado, los parentesis desaparecen.

    //la palabra reservada funcion, desaparece 

   let triplicar2 = x => 3*x;

    //colocar entre el parentesis y la llave una flecha =>




//creamos una funcion que se llame aprendiendo

let aprendiendoFerro=numero => numero+7;

let resultadoAprendiendo=aprendiendoFerro(16);


console.log(resultadoAprendiendo);


    //que sume 7 al numer



    //nos copiamos el array carrito:

    let carrito= [ 

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
    
    let resultado;

//copiar del github del profe esta parte de la clse para entenderla mejor en casa con ayuda de gpt

resultado = carrito.reduce(function(total,producto) {
    return total + producto.precio},0) //suma un valor al resultado simplemente

    console.log("uso de reduce", resultado); 

// crear una funcion que sume 3 numeros dados, ponerla con expresion,
//declaracion y como funcion de 


//sumaDeclaracion
//sumaExpresion
//sumaFlecha

//y muestre resultados por console.

function sumaDeclaracion(n1,n2,n3){
   console.log(n1+n2+n3);
}

sumaDeclaracion(2,2,4);


//con sumaExpresion

let sumaExpresion = function(n1, n2, n3) {
    console.log(n1 + n2 + n3);
}

sumaExpresion(2, 2, 4);


//con sumaFlecha

let sumaFlecha2=(n1,n2,n3)=>console.log(n1+n2+n3);

sumaFlecha2(2,5,7);



//ejercicio2 
//crear una funcion que tiene como argumentos 

//argumento: un numero 
//previamente voy a definir un array de numeros
//si el numero que busco esta dentro del array. (con includes)


//declaramos el array

let arrayNumeros=[1,2,3,4,5,6,7,8,11,12,13,134];

//funcion con declaracion

function buscaDeclaracion(x){

   console.log(arrayNumeros.includes(x));
}

buscaDeclaracion(1);

//funcion con forma de expresion

let buscaExpresion = function(x){
    console.log(arrayNumeros.includes(x));
}

buscaExpresion(63);


//funcion con forma de flecha

let buscaFlecha=x=>console.log(arrayNumeros.includes(x));

buscaFlecha(1);


//crear una funcion de flecha que le pasemos dos parametros, y de la suma de los dos por 10.

//n1+n2*10

let multi10=(n1,n2)=>console.log((n1+n2)*10);

multi10(2,4);

//CREAR UNA funcion de flecha que dados dos parametros me indique el numero de caracteres
//de los dos

let contarCaracteres=(texto1,texto2)=>console.log (texto1.length+texto2.length);

contarCaracteres("hola", "amigos");




//en forma de declaracion:

function caracteres(x,y){
    return x.length+y.length;
}

console.log(caracteres("hola","adios"));



//ejercicio : crear una funcion de flecha que quite el ultimo elemento del final
//de un array nuevo que creemos cada vez que la llamamos




let quitarUltimo = x => x.pop();

let array11 = [1,2,3,4,5,6];

quitarUltimo(array11);

console.log(array11);


// ver en casa





