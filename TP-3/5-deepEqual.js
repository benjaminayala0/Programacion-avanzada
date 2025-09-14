function deepEqual(a, b) {
  if (a === b) return true;

  // Si es tipo objeto o null
  if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }

  // Obtener claves de ambos objetos
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // Diferente cantidad de claves , no son iguales
  if (keysA.length !== keysB.length) return false;

  // Comparar recursivamente cada valor
  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

console.log(deepEqual({x:[1,2]}, {x:[1,2]})); 
console.log(deepEqual({x:1}, {x:'1'}));      
console.log(deepEqual(null, null));           
