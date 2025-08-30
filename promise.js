//promise
//resolve => ejecuta el llamado al promise cuando el mismo llamado es correcto
//reject => cuando hay un error

const aplicar_desc = new Promise ((resolve,reject) => {
    setTimeout(() => {
        let descuento = false
        if(descuento){
            resolve("Descuento Aplicado");
        }else{
            reject("No se pudo aplicar el descuento");
        }
    },3000)
});

console.log(aplicar_desc);

aplicar_desc.then (resultado =>{
    console.log(resultado);
}).catch(error => {
    console.log("Hubo un error en la consulta" + error);
});

