const numbers = [1,2,2,3]

function sumUnique(numbers) {
  return [...new Set(numbers)] // elimina duplicados
    .filter(n => Number.isFinite(n)) // solo numeros finitos
    .reduce((acc, n) => acc + n, 0); // suma acumulada
}

// console.log(sumUnique([1,2,2,3]));
console.log(sumUnique([1,'2',2,3,'a']));
console.log(sumUnique([1,20,20,3,'hola',1,4])); //1+20+3+4