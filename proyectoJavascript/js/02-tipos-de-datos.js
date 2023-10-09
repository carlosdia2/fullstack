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

crear 3 variables de tipo string e imprimir en consola las tres usando length, indexOf y 

let string1 = "hola";
string2 = "hola2";
string3 = "hola2";

console.log("la variable 1 tiene:", string1.length, "caracteres.");
console.log("la l de 'hola' está en la posicion:", string2.indexOf("l"));
console.log("¿está la palabra 'chao' en la variable string3?", string3.includes("chao"));
