const users = [
  { firstName: 'Ana', lastName: 'García', age: 25},
  { firstName: 'Luis', lastName: 'Martínez', age: 18},
  { firstName: 'Pedro', lastName: 'García', age: 19},
  { firstName: 'Juan', lastName: 'García', age: 19}
];

function sortByMany(list, specs) {
  return [...list].sort((a, b) => {
    for (const { key, dir } of specs) {
      const dirFactor = dir === 'desc' ? -1 : 1;
      
      if (a[key] < b[key]) return -1 * dirFactor;
      if (a[key] > b[key]) return 1 * dirFactor;
      
    }
    return 0; // si son iguales que retorne 0
  });
}

console.log(
  sortByMany(users, [
    { key: 'lastName', dir: 'asc' },
    { key: 'age', dir: 'desc' }
  ])
);
