//for each y map. metodos exclusivos para arrays.

// metodos de un arraynumeros2solo se pueden ejecutar arraynumeros2, una vez por cada elemento del array


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


console.log("for para mostrar carrito:")

for (let i=0;i<carrito.length;i++){
    console.log(carrito[i]);
}


//ahora con foreach:

console.log("foreach:")

carrito.forEach(function(producto) {
    console.log(producto, producto.nombre); //recorre de manera automatica los elementos de un array uno a uno
})

//con map

console.log("con metodo map");

const arrayMap = carrito.map(producto => producto.nombre)

console.log(arrayMap); ['TV', 'TABLET', 'MOVIL', 'PC'] //PREGUNTA ENTREVISTA: DIFERENCIA ENTRE MAP Y UN FOREACh


// let reserva = {
//     nombre: "Carlos",
//     apellido: "Diaz",
//     total: "20€",
//     pagado: true,
//     informacion: function(){
//         return(`el cliente ${reserva.nombre} ${reserva.apellido} tenia un total por pagar de: ${reserva.total}
//     Ha pagado: ${pagado}`);

//     }
// }

// console.log(reserva.informacion());


//que hace el this: accede a las propiedades dentro de un objeto



//crear un objeto llamado "fecha"

//tendra las siguientes propiedades: año, mes, dia, faltantes, donde faltantes es una funcion que me dice cuantos dias faltan para que finalice el mes de octubre. (recordar que octubre tiene 31 dias)

//creo el objeto con propiedades:

let fecha = {
    año:2024,
    mes:10,
    dia:24,
    faltantes:function(){
        return(`teniendo en cuenta que es el dia: ${this.dia}, entonces, faltan ${31-this.dia} dias para el 31 de octubre`)
    }
}

console.log(fecha.faltantes());

