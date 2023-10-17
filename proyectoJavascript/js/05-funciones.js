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



