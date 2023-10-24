
/*
*******************
    COMIENZO CLASE 2023/10/23
*******************


/*
!!!!!!!!!!!!!
REPASO ULTIMO DÍA


for(let i=0; i<10; i++)             ///////FOR
{
    console.log(i)
}


let i=0;                            ///////WHILE
while(i<10){
    console.log(i);
    i++;
}


let i=0;                            ////////DO WHILE
do{
    console.log(i);
    i++;
}while(i<10)


función que invierta una cadena.
F: INVERTIR
P: CADENA
*/

function invertir(cadena) {

    //lo convierte en un array con split
    //lo invierte  con reverse
    //y lo vuelve a unir con join

    console.log(cadena.split('').reverse().join(''));
}

invertir("hola");

/*


función que concatene dos cadenas.
F: CONCATENAR
P: CADENA1, CADENA2

*/

function concatenar(cadena1, cadena2) {
    console.log(cadena1 + cadena2)
}

concatenar("hola,amigos");

/*


función que determine si una cadena contiene una letra.
F: CONTIENE
P: CADENA, LETRA
//es decir, que diga si en el texto que le pasamos, esta la letra que buscamos
*/

function contiene(cadena, letra) {

    if (cadena.includes(letra)) {
        console.log(`la letra que has buscado (${letra}) está en el texto (${cadena})`)
    } else { console.log("la letra no está") };
}

contiene("jajaja", "j")
/*

//otra forma de hacerlo
*/
function CONTIENE(cadena,letra){
    return cadena.includes(letra)
}

let contieneLetra=CONTIENE("ejemplo de cadena,", "b");
console.log(contieneLetra);

/*







función que encuentre el número más grande en un array.
F: MAXNUM
P: ARRAY



*/

function Maxnum(array) {

    // paso2: crear una variable para el numero mas grande: 
    let numeroMasGrande = array[0]; //suponemos que el primer elemento es el mas grande

    //paso 3: recorrer el array para encontrar el numero mas grande
    for (let i = 0; i < array.length; i++) {

        // Paso 4: Comparamos el elemento actual con el número más grande actual
        if (array[i] > numeroMasGrande) {
            // Paso 5: Si encontramos un número mayor, actualizamos la variable numeroMasGrande.

            numeroMasGrande = array[i];
        }
    }

    console.log(numeroMasGrande);


}

Maxnum([1, 2, 3, 5, 3, 6]);




/*

función que encuentre el número más pequeño en un array.
F: MINNUM
P: ARRAY

*/
function minnum(array22) {
    let NumeroMasPequeño = array22[0];

    for (let i = 0; i < array22.length; i++) {
        if (array22[i] < NumeroMasPequeño) {
            NumeroMasPequeño = array22[i];
        }
    }

    console.log(NumeroMasPequeño);

}

minnum([2, 1, 3, 4, 5, 6, 7, 8]);






/*




función que cuente la cantidad de elementos booleanos verdadero/falso en un array.
F: NUMBOOLEANOS
P: ARRAY, VALOR

*/

function numbooleanos(array, valor) {

    let falso = 0, verdadero = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            falso++;
        } else { verdadero++ }
    }

    return [falso, verdadero];
}

console.log(numbooleanos([1, 2, 4, 6, 3, 5, true, 3, false, 3, true], false));

/*


función que determine si todos los elementos de un array son números.
F: ARRAYNUMEROS
P: ARRAY

//todos los elementos son numeros? si o no

*/

function arraynumeros2(array) {
    //para saber si todos son numeros tenemos que recorrer el array (con un for)
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] != 'number') {
            return false;
        }
    }
    return true;
}

console.log(arraynumeros2([1, 2, 3, 4, 5]));

/*




función que genere un número aleatorio entre N1 y N2.
F: NUMALEATORIO
P: N1,N2

*/

function randomNum(n1, n2) {
//para que devuelva un numero igual o mayor que el que ponga
return Math.floor(Math.random()*((n2 - n1)) + n1);
}

console.log(randomNum(2,999));
/*


función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2
F: AREATRIAGULO
P: BASE,ALTURA


*/

function areatriangulo(base,altura){
    return base=(base*altura/2)
}

console.log(areatriangulo(3,4));

/*


función que convierta grados Celsius a Fahrenheit.
F: GRADOS
P: CELSIUS


*/
function grados(celsius) {
    //debemos convertir celsius a farenheit:

    const farenheit = (celsius * 9 / 5) + 32;

    return farenheit;
}

console.log(grados(0));
/*

*/

//otra forma de hacerlo

function grados(celsius){
    let formula=(celsius*9/5)+32;
    return formula;
}

let celsius= 20;
let resultado=grados(celsius)/*

función que determine si un año es bisiesto.
F: BISIESTO
P: DIAS

*/

function bisiesto(dias) {
    if (dias == 365) {
        console.log("no es año bisiesto");
    } else if (dias == 366) {
        console.log("es un año bisiesto");
    } else { console.log("la cantidad de dias debe ser la de un año") }
}

bisiesto(366);





/*


función que cuente la cantidad de vocales en una cadena.
F: VOCALES
P: TEXTO

*/

function vocales(texto){

  // Paso 1: Inicializa un contador de vocales
  let contador=0;

  // Paso 3: Recorre cada carácter en el texto

  for(let i=0;i<texto.length;i++){

     // Paso 4: Comprueba si el carácter actual es una vocal (a, e, i, o, u)

     if (texto[i]==='a' || texto[i]==='e' || texto[i]==='i' || texto[i]==='o' || 
     
        texto[i]==='u'){
            contador++;
        }
    }

    return contador;

}

console.log(vocales("jajajajajajjawwwweeee"))

/*


función que cuente la cantidad de palabras en una cadena.
F: PALABRAS //numero de espacios mas uno.
P: TEXTO

*/
function palabras(texto){
    let contadorPalabras=1;
    for(let i=0;i<texto.length;i++){
        if(texto[i]===' '){
            contadorPalabras++;
        }
    }
    return contadorPalabras;
}

console.log(palabras("hola amigos como estan"));
    /*
función que elimine los elementos duplicados de un array.
F: ELIMINADUPLICADOS
P: ARRAY

*/

function eliminaDuplicados(array){

}

/*

función que ordene un array de números de forma ascendente.
F: ORDENARARRAY
P: ARRAY

*/


/*


función que muestre la tabla de multiplicar de un numero.
F: TABLAMULTIPLICAR
A: NUMERO


*/

function tablaMultiplicar(numero){

let tabla="";

    for(let i=1;i<=10;i++){

    tabla+= (`${numero} x ${i} = ${numero*i}\n`)

    }

console.log(tabla)
}

tablaMultiplicar(7)



/*

función que tome un número del 1 al 12 y devuelva el nombre del mes 
correspondiente utilizando una declaración switch
F: NOMBREMES
P: NUMMES

*/

function nombremes(nummes){
    switch(nummes){
        case 1: console.log("enero")
        break;
        case 2: console.log("febrero")
        break;
        case 3: console.log("marzo")
        break;
        case 4: console.log("abril")
        break;
        case 5: console.log("mayo")
        break;
        case 6: console.log("junio")
        break;
        case 7: console.log("julio")
        break;
        case 8: console.log("agosto")
        break;
        case 9: console.log("septiembre")
        break;
        case 10: console.log("octubre")
        break;
        case 11: console.log("noviembre")
        break;
        case 12: console.log("diciembre")
        break;
        default: console.log("este mes no existe");
    }
}

nombremes(5);
/*


función que determine si una contraseña es segura basándose en 
longitud>8, 
mayúsculas y minusculas
números
F: CONTRASEÑASEGURA
P: CONTRASEÑA

*/

function contraseñaSegura(contraseña){

let numero;

    if (contraseña.length<8){
        for(let i=0; i<contraseña.length;i++){
           if (typeof(contraseña[i])==='Number'){
            numero=true;
           } else {  console.log("tu clave necesita un numero")}
        }
            return(contraseña, "contraseña segura")
    }
}

console.log()
/*


función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
F: REEMPLAZAR
P: LETRA1, LETRA2

*/

function reemplazar(texto, letra1, letra2) {
    if (texto.includes(letra1)) {
        texto = texto.replace(letra1, letra2);
        console.log(texto);
    } else {
        console.log("La letra no se encuentra en el texto.");
    }
}

reemplazar("hola amigos", "a", "j");


