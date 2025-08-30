// metodos en arrays

const persona = [
{nombre : "Benja", edad: 22, aprendiendo: "Js"},
{nombre : "Tobi", edad: 22 , aprendiendo: "Python"},
{nombre : "Axel", edad: 30, aprendiendo: "Css"},
{nombre : "Valen", edad: 35, aprendiendo: "Cobol"},
{nombre : "Nico", edad: 22, aprendiendo: "Java"},
{nombre : "Ana", edad: 26, aprendiendo: "nose"}
] 

const persona1 = [
{nombre : "Maria", edad: 20, aprendiendo: "Js"},
{nombre : "Jose", edad: 19 , aprendiendo: "Python"},
{nombre : "Juan", edad: 15, aprendiendo: "Css"},
{nombre : "Carlos", edad: 25, aprendiendo: "Cobol"},
{nombre : "Ernes", edad: 22, aprendiendo: "Java"},
{nombre : "Catalina", edad: 22, aprendiendo: "nose"}
] 


// console.log("Personas:",persona);

// function for filter > 28 age
// const mayores = persona.filter(persona => persona.edad > 28 );
// console.log("Mayores a 28 años:",mayores); 

// const menores = persona.filter(persona => persona.edad < 28 );
// console.log("Menores de 28 años:",menores); 

// const ana = persona.find(persona => persona.nombre == "Ana");
// console.log(ana); 
// const union = persona.concat(persona1);

const menores_d_28 = [...persona, ...persona1].filter(persona => persona.edad < 28);
console.log(menores_d_28);