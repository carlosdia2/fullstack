// object literal, manual

const producto = {
    nombre: "tablet",
    precio: 500
}


//esta es la forma en como veniamos creando los objetos.

// esta forma es "estática"

//object constructor, es dinámico

//le ponemos el nombre de la clase siempreinicio en mayus
 
function ProductoClase(nombre,precio,disponibilidad=false,categoria="play"){ //los argumentos seran propiedades

    //igualamos esos parametros a nuestras propiedades:

    this.nombreObjeto = nombre;
    this.precioObjeto = precio;
    this.categoria = categoria; // se le puede poner el mismo nombre
    this.disponibilidad = disponibilidad;
}

//creamos una instancia 

const producto2 = new ProductoClase("monitor curvo", 800,true,"tech");
const producto3 = new ProductoClase("PC", 1000);
const producto4 = new ProductoClase("Relo", 800);

//ejercicio 
//crear un constructor de objeto que se llamara  fecha, con propiedades año mes y dia;
//dar 4 valores distintos (para probarla 4 veces )

function Fecha(año,mes,dia){
    this.año = año;
    this.mes = mes;
    this.dia = dia;
}

const año1 = new Fecha(2023,10,25);
const año2 = new Fecha(2024,10,25);
const año3 = new Fecha(2025,10,25);
const año4 = new Fecha(2026,10,25);

console.log(año1);
console.log(año2);
console.log(año3);
console.log(año4);



// ProductoClase.prototype.formatearProducto=function(){
//     console.log(`el producto ${this.nombreObjeto} tiene un precio de ${this.precioObjeto}`)
// }

// console.log(producto2.formatearProducto());


/// una forma de crear objetos mediante constructores 
//es la mas reciente

class ProductoClase2{ 
    constructor(nombre,precio){
this.nombreObjeto2=nombre;
this.precioObjeto2=precio;
}

formatearProducto2(){
    console.log(`el producto ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2} €`)

}

descuento(){
    return(`el precio final con el descuento es de ${this.precioObjeto2*(1-0.2)} €`);
}

}



//crear un constructor de objeto que se llame libro
//con nombre precio y isbn
//usando class
//y generar una instancia al menos

class Libro{
    constructor(nombre,precio,isbn){
        this.nombre=nombre;
        this.precio=precio;
        this.isbn=isbn;
    }

    desglosarLibro(){
        console.log(`el libro: ${this.nombre} tiene un precio de ${this.precio} € y su ISBN es este: ${this.isbn}`)

    }


}

let libro1 = new Libro("la culpa es de la vaca", 0.10, 123151412321);

libro1.desglosarLibro();




// otro ejercicio
//extends es hereda
class biblioteca extends Libro{
    constructor(nombre,precio,isbn,categoria){ //(no es obligatorio heredar todas las propiedades)
        super(nombre,precio,isbn); //todas las heredadas van
        this.categoria=categoria; //como categoria es la que se agrega, se pone como siemore    }
    }
    formatearProducto(){
        console.log(`el producto ${this.nombre} pertenece a la categoria ${this.categoria}`)
    }
}

//falta llamar a la funcion;

//ejercicio

//crear un objeto constructor coche
//con propiedades marca, añocompra, motor, matricula
//una funcion/metodo  que diga el numero de años que tiene el coche

//crear una instancia, una para tu coche, y otra para alguien mas 


class Coche{
    constructor(marca, añoCompra,motor,matricula){
        this.marca=marca;
        this.añoCompra=añoCompra;
        this.motor=motor;
        this.matricula=matricula;
    }

    añosCoche(){

        let añoActual = new Date().getFullYear();
        
        console.log(`el coche tiene ${añoActual-this.añoCompra} años desde que fue comprado`);
    }
}




let coche1 = new Coche("Tesla", 2022, "154 kW", "EE3399")
let coche2 = new Coche("Lamborghini", 2023, "152", "E33349X")
coche1.añosCoche();
coche2.añosCoche();
console.log(coche1);
console.log(coche2);

//ITV

class ITV extends Coche{
    constructor(añoCompra, matricula, añoITV){
        super(añoCompra,matricula)
        this.añoITV= añoITV;
    }

    proximaITV(){
        return(`la proxima Itv es dentro de ${this.añoItv-2023} años`)
    }
}

miCoche = new ITV(2003, "1234ab", 2025);
console.log(miCoche.proximaITV());



