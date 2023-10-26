//Try catch

const numero1 = 20;
const numero3 = 40;

console.log(numero1);

console.log(numero3);


try{
    console.log(numero2)
} catch (error) {
    console.log("tienes un error al mostrar el numero2")
}

console.log(numero3) 

//la promesa puede que se cumpla, que no, o 

//crear una promesa si el usuario esta autenticado
const autenticado = true;
const usuarioautenticado = new Promise((resolve, reject)=>{
    if (autenticado){
        resolve("usuario autenticado") //promise se cumple
    } else {
        reject("no se puede iniciar sesion") //no  se cumple

    }
});

console.log(usuarioautenticado);



//para acceder a un elemento del html digo 

const boton = document.querySelector("#boton");

boton.addEventListener("click", function(){

    console.log("diste click");

    Notification.requestPermission() // YA ES UNA PROMISA
    .then(resultado => console.log(`El resultado es ${resultado}`)); // SOLICITAR PERMISO DE NOTIFICACIONES
})

if (Notification.permission == "granted") {

    new Notification("Esta es una notificacion", {
        icon: "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
        body: "Notificación Tu Carrera Digital"
    })

}


setTimeout(function(){
    console.log("set time out finalizado")

}, 3000)


setInterval(function(){
    console.log("set interval actuando")
}, 4000)



//funcion descargarNuevosClientes

function descargarNewClients(){
    return new Promise(resolve => {
        console.log("descargando clientes... espera....")

        setTimeout(()=> {
            resolve("los clinetes fueron descargados")
        }, 5000)
});
}

descargarNewClients();

//otra funcion que lleva a cabo una reserva dentro de la aplicacion
//pero antes necesito tener descargado a todos los clientes:
//es una funcion asincrona porque tiene que esperar que haya descargado todos los clientes

async function app(){
    const resultadoAsync = await descargarNewClients();
    console.log("este codigo si se bloquea")
    console.log(resultadoAsync);
}

app();
console.log("este codigo no se bloquea");

//crear funcion llamada descargar pedidos que a los tres segundos me de la respuesta de los pedidos han sido descargados

function descargarPedidos(){
return new Promise(()=>

console.log("descargando pedidos...")

setTimeout(()=>{
console.log("los pedidos fueron descargados") //VAMOS A CONTEMPLAR UNICAMENTE EL CASO DE EXITO, PARA FACILITAR EL EJEMPLO
}, 3000)

});
}

descargarPedidos();
