//tres forma sque tenemos de seleccionar elementos en HTML

//querySelector
//querySelectorAll
//getElementById

//seccion con un h1 un boton y un div con tres enlaces dentro

//a cada uno aplicar las siguientes clases:

//al div le pondremos .navPrincipal
//a los enlaces clase .enlace
//a la seccion le ponemos clase .seccionPrincipal
//y al boton le creamos un id botonPrincipal.

const heading = document.querySelector(".seccionPrincipal h1");
console.log(heading);

const botonPrincipal = document.querySelector("#botonPrincipal");
console.log(botonPrincipal);

heading.textContent="hola nuevo titulo"; //asi se accede y se cambia el titulo desde js

//añadir nueva clase

heading.classList.add("NuevaClaseDesdeJS")//añadir clase
heading.classList.remove("NuevaClaseDesdeJS")//eliminar clase

//intentamos seleccionar los elementos

const enlaces = document.querySelectorAll("div a");
console.log(enlaces);

console.log(enlaces[0]);

enlaces[0].href="https://google.com";


enlaces[1].textContent="enlace 2 modificado ";

enlaces[1].href="https://google.com";

const boton = document.getElementById("botonPrincipal");
console.log(botonPrincipal);

const botonJsClass = document.getElementsByClassName("botonClase");

//como crear elementos de html desde js

//por ejemplo, crear un nuevo enlace dentro del div de los enlaces

const enlace4 = document.createElement("A"); // creamos una variable en la que ponemos un nuevo elemento de enlace
enlace4.href="#"; // en href del enlace sera #
enlace4.textContent="texto del nuevo enlace"; //texto del enlace sera este
enlace4.classList.add("enlace"); // se le crea una clase llamada enlace
const navPrincipal=document.querySelector(".navPrincipal"); //seleccionamos el div donde queremos el nuevo enlace
navPrincipal.appendChild(enlace4); //metemos enlace4 en el div navPrincipal.

//mañana vemos como crear los eventos 




