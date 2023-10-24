let numeroCJ="900";

if (numeroCJ===900){
    console.log(`tu numero es ${numeroCJ}`);
} else {
    console.log(`tu numero no es 900`);
}

//ejercicio: crear una estructura de control que compruebe si el pin es correcto.

//creamos una variable que se llame pinCorrecto: 1234.

let pinCorrecto=1234;
let saldo=200;

if (pinCorrecto===1234){
    console.log(`el pin es correcto!`)

if (saldo>=200){
    console.log(`aqui esta tu dinero`)

} else {console.log(`no tienes fondos suficientes`) }

} else {
    console.log('el pin no es correcto!')
};

//crear una estructura de control que compruebe si yo puedo retirar el dinero 

//crear una variable nueva que se llame saldo de 200.


//crear estructura de control que compruebe si puedo retirar el dinero

let saldoCJ=4000000;
let pinCJ=1234;
let importeRetirar=100;
let pinIntroducido=1234;

if(pinIntroducido===pinCJ){
    console.log("pin OK")

if(importeRetirar<=saldoCJ){
    console.log("saldo suficiente")
} else {console.log("esta tarjeta no es tuya bandido")
} 

}

//completar 

//hacer lo mismo 

function cajero(pin,cantidad){

    if(pin=1234){
        console.log("pin OK");
        if(cantidad<=saldoCJ){
            console.log("tome su dinero");
        } else {console.log("saldo insuficiente")
    }
}else{
    console.log("pin incorrecto!!!")
}  
    }

    cajero(1234, 12300);


//creamos una variable que se llame rol y le damos el valor de editor

let rol = "dasd";

if(rol=="administrador"){
    console.log("eres administrador")
} else if(rol=="editor") {
    console.log("eres un editor");
} else if(rol=="administrador") {
    console.log("puedes administrar todo el sistema");
} else {
    console.log("no tienes acceso");

}

//crear una estructura de control con if y else if que me compare en que estacion del año estamos 

let estacionActual="otoña";

if (estacionActual==="primavera") {
    console.log("estamos en primavera, la siguiente estacion es verano");
} else if (estacionActual==="verano"){
    console.log("estamos en verano, la siguiente es otoño")
} else if (estacionActual==="otoño"){
    console.log("estamos en otoño, la proxima es invierno")
} else if (estacionActual==="invierno"){
    console.log("estamos en invierno")
} else
    { console.log("no has escrito bien")}

//crear una estructura de control que me diga si la nota de un examen es sobresaliente 9-10
//notable 7-8
//suficiente 5-6
//suspenso -5

//creamos una variable que se llame notaExamen

let notaExamen=9;

if(notaExamen >= 9){
    console.log("sobresaliente!!")
} else if(notaExamen>=7){
    console.log("notable")
} else if(notaExamen>=5){
    console.log("suficiente")
} else if(notaExamen<5) {
    console.log("suspenso")
} else {
    console.log("")
}

//switch: simplifica el if
//por cada caso necesitamos un case y un break.

//creamos una variable que se llama metodoPago

//let metodoPago = prompt("introduce tu metodo de pago","escribe aqui");
let metodoPago = "Tarjeta";

switch (metodoPago){
    case "tarjeta": console.log("pagado con tarjeta"); //
    break;

    case "bizum": console.log("pagado con bizum");
    break;

    case "enMano": console.log("Pago en mano");
    break;

    default: console.log("pendiente de pago"); 
    break;
}
    //crear una estructura de control que me compare si un numero multiplicado por si mismo es menor que 100, menor que 200, y si no cumple las anteriores

    let numeroE3=300;

    if (numeroE3*numeroE3<100){
        console.log("el numero multiplicado por si mismo es menor que 100");
    } else if (numeroE3*numeroE3<200){
        console.log("el numero multiplicado por si mismo es menor que 200");
    } else  {
        console.log("el numero multiplicado por si mismo no es menor de 200");
    }
    

//creamos una funcion con el if dentro

function multiplo(x){

    if (x*x<100){
        console.log("el numero multiplicado por si mismo es menor que 100");
    } else if (x*x<200){
        console.log("el numero multiplicado por si mismo es menor que 200");
    } else  {
        console.log("el numero multiplicado por si mismo no es menor de 200");
    }

    multiplo(20);

}

//crear una estructura de control con switch que me compare
//si un numero dado por usuario + 10 es: 
// igual a 9, 12, 151, 100 , resto de posibilidades.

let numeroSecreto=parseInt(prompt("escribe un numero", "numero"));

switch (numeroSecreto+10){
    case 9: console.log("tu numero secreto es 9");
    break;
    case 12: console.log("tu numero secreto es 12");
    break;
    case 151: console.log("tu numero secreto es 151");
    break;
    case 100: console.log("tu numero secreto es 100");
    break;
    default: console.log("tu numero secreto no es ninguno de los establecidos")
    break;
    
}

//iteradores o bucles!!!

//for, while y do while.

//ejercicio Mostrar por pantalla del numero 100 al 200;

// for(let i=100; i<=200; i++){
//     console.log(i);
// }

// for(let i=2; i<49; i+=2){
//     console.log(i);


// }


//mostrar del numero 100 al numero 0, y que vaya de 5 en 5.

// for(let i=100;i>=0;i-=5){
//     console.log(i);
// }
 
//Ejercicio: mostrar del 1 al 20 todos los numeros pares

//nota: 1%2===0 me da la condicion de par

for(let i=1; i<=20; i++){
    if(i%2===0){
        console.log("numeros pares:", i);
    }
    else{
        console.log("este numero no es par: ", i)
    }
}

// crear un array plano y mostrar cada elemento del array


let array9= [1,2,3,4,5,6,7,8,9];

for(let i=0; i<array9.length; i++){
    console.log(array9[i])
}

//recorrer el array e imprimir todos los elementos 
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

for(let i=0;i<carrito.length; i++){
    console.log(carrito[i]);
    console.log(carrito[i].nombre);
}

//while

// let i=0;
// while(i<100){
//     i++;
//     console.log(i);
    
// }

// let j=0;

// do{
//     console.log(j);

// } while {j<10};


//en el for, el indice va dentro del parentesis despues

// en el while, dentro

//y en el do while, dentro pero al final (por eso, se ejecuta y luego revisa)

//otro ejercicio:

//mostrar los numeros pares, pero hacerlo ahora con while.
//mostrar del 1 al 20 todos los numeros pares incluidos ambos


//nota: 1%2===0 me da la condicion de par
 

// let jj=1;

// while(jj<=20){
//     if(jj%2===0){
//         console.log("par:", jj);
//     }
// }

//una funcion que dado un argumento me diga si es positivo, es negativo,es = 0;

//con un if dentro

function funcion11(x){
    if(x>0){
        console.log("el numero es positivo");
    } else if (x=0){ console.log("el numero es igual a 0");

    } else {console.log("el numero es negativo")}
}

funcion11(23);

//crear una funcion que recibe como argumento un numero positivo (7) y muestre por consola, los numeros desde el 7 hasta el 0 (descendiendo);

function regresion(x){

    for(let i=x; i>=0; i--){
        console.log(i);
    }

}

regresion(16);

//crear una funcion que se llama acumulacion
//recibe un argumento de entrada y me devuelve la suma de todos los numeros entre cero y ese argumento


let totalAcum=0;

function acumulacion(k){
    for(let i=k;i>=0;i--){
        totalAcum=totalAcum+1;
    }
    console.log(totalAcum);
}

acumulacion(22);

//una funcion que reciba un argumento, que me calcule la media de la suma de todo 





