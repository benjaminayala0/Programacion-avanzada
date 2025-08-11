const carrito = ['leche','Pan','Mantequilla de mani','Asado'];
// console.log(carrito);
// console.log(carrito[0]);

carrito.map(producto =>{
    return `El producto es ${producto}`;
});

// spead operation
let lenguages = ['Javascript','Python','Css'];
let frameworks = ['React','Angular','Vue'];

//unir los arrays en 1 solo array
let tecnologias = [...lenguages , ...frameworks]

console.log(tecnologias);

let tecnologias2 = ['C#','PHP','Ruby'];
let tecnologiascompleta = tecnologias2.concat(tecnologias)

console.log(tecnologiascompleta);

