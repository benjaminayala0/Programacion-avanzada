function debounce(fn, delay) {
  let timer; // guarda el id del temporizador activo

  return function (...args) {
    const context = this; // preserva el this original

    // si había un timer corriendo, lo cancelo
    clearTimeout(timer);

    // creo uno nuevo
    timer = setTimeout(() => {
      fn.apply(context, args); // ejecuto fn con su this y args correctos
    }, delay);
  };
}

const search = (query) => console.log("Buscando:", query);

const debouncedSearch = debounce(search, 3000);

debouncedSearch("h");
debouncedSearch("ho");
debouncedSearch("hol");
debouncedSearch("hola");



