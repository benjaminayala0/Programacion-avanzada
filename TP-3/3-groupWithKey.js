function groupBy(list, keyOrFn) {
  return list.reduce((acc, item) => {
    const key = typeof keyOrFn === 'function' 
      ? keyOrFn(item) 
      : item[keyOrFn];

    // si la clave no existe en el acumulador, inicializamos un array vacio
    if (!acc[key]) {
      acc[key] = [];
    }

    // agregamos el item en el grupo correspondiente
    acc[key].push(item);

    return acc;
  }, {}); // acumulador inicial: objeto vacío

}

console.log(groupBy([{t:'a'},{t:'b'},{t:'a'}], 't'));
console.log(groupBy([6,7,8,9], n => n%2 ? 'impar':'par'));

