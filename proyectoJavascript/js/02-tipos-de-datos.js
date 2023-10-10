const producto1 = "Juego de mesa EL PUEBLO DUERME"; //(es la forma mas utilizada)
const producto2 = String("1");
const producto3 = new String("UNO");  //es para crear un objeto, lo veremos luego.

console.log(typeof producto1, producto1);
console.log(typeof producto2);
console.log(typeof producto3);

// arriba tenemos tres formas de declarar variables de texto (String).


let numero100;
let numero200;

numero100 = false;
numero200 = "200";

console.log(typeof numero100);
console.log(typeof numero200);

console.log("METODO LENGTH:", producto1.length); 

console.log("Metodo indexOf:",producto1.indexOf("DUERME"));

console.log("Metodo indexOf:",producto1.includes("DUERME"));

let string1 = "hola";
string2 = "hola2";
string3 = "hola2";

console.log("la variable 1 tiene:", string1.length, "caracteres.");
console.log("la l de 'hola' está en la posicion:", string2.indexOf("l"));
console.log("¿está la palabra 'chao' en la variable string3?", string3.includes("chao"));

// clase 10/10

let numero1 = 100;
let numero2 = 200.25;
let numero3 = "200"; //tipo String
let numero4 = 2/3; 

console.log("num 1: ", numero1, "tipo de dato", typeof numero1);
console.log("num 2: ", numero2, "tipo de dato", typeof numero2);
console.log("num 3: ", numero3, "tipo de dato", typeof numero3);
console.log("num 4: ", numero4, "tipo de dato", typeof numero4);

// OPERACIONES MATEMATICAS

// SUMA, RESTA, MULTI, DIVI, y MODULO

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);

// METODOS PARA MATEMATICA 

let resultado = Math.round (Math.random()*30);

console.log(resultado);


// Pagina web que calcula el area de una pagina web en funcion del diametro.

let diametro = 5;
let area;

let radio= diametro/2;

area = Math.PI * Math.pow(radio, 2);
console.log("este es e larea a partir del diametro", area);

// EJERCICIO: CREAR UN DADO 

resultado= Math.round(Math.random()*5+1);

document.write("resultado del dado: ", resultado);

// ejercicio calcular el descuento y el total a pagar 

let descuento = 0.4; 
let prenda1, prenda2, prenda3;
let ahorro;
let importe;
let total;

prenda1 = 120;
prenda2 = 85;
prenda3 = 24;

// primero suma las tres prendas: (total sin descuento)

importe =(prenda1+prenda2+prenda3);
console.log ("total sin descuento:", importe);

// a ese total sin descuento le aplicamos el descuento (lo multiplico por el descuento)

total = importe * descuento; //229*0,40
console.log("total con descuento:", total);

// el ahorro es el total sin decuento menos el total con descuento

ahorro =(importe-total);//229-91,60
console.log("te ahorras: ", ahorro);


let meGusta=19;

meGusta+=15;

console.log(meGusta);

let nombre, email;

nombre="carlos javier";
email="cjdvilla@gmail.com";

console.log("Nombre: " + nombre);

console.log(`este es el nombre: ${nombre}`);

let boolean1 = true;
let boolean2 = false;
let boolean3 = "true"; //esto es un falso booleano. 









// Math.PI;

// Math.round(2.5); PARA REDONDEAR

// Math.cell(2.1); REDONDEA HACIA ARRIBA 

// Math.floor(2.9); REDONDEA HACIA ABAJO

// Math.sqrt(144); RAIZ CUADRADA 

// Math.pow(x,2); Eleva al cuadrado x

// un numero aleatorio entero entre 0 y 30;

console.log()





