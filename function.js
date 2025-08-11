//function declaration

function saludo(nombre){
    console.log("Bienvenido," + nombre);
}

saludo("Benjamin");

//function expression
const cliente = function(nombreCliente,age){
    console.log("Mostrando los datos del cliente: " + nombreCliente + " " + age);

}
cliente("Axel",20);

// function actividad(nombre,nombre_actividad){
//     console.log(`El cliente ${nombre} esta realizando la actividad ${nombre_actividad}`)
// }
// actividad("Benja","Programacion en javascrip");

function actividad(nombre = "Benjamin Ayala",nombre_actividad = "Probabilidad y estadistica"){
    console.log(`El cliente ${nombre} esta realizando la actividad ${nombre_actividad}`)
}

actividad();

