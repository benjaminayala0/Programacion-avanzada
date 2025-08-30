const traficoRed = {
  "08:00": 1250, 
  "09:00": 1870,
  "10:00": 2100,
  "11:00": 1950,
  "12:00": 1600,
  "13:00": 1300,
  "14:00": 1700,
  "15:00": 2200,
  "16:00": 1800,
  "17:00": 1500
};

// calculamos total de datos transferidos
const total = Object.values(traficoRed).reduce((acum, valor) => acum + valor, 0);

// encontrar la hora con mayor trafico
const [horaMax, maximo] = Object.entries(traficoRed).reduce(
  (acc, [hora, valor]) => (valor > acc[1] ? [hora, valor] : acc),
  ["", -Infinity]
);

console.log("Total MB transferidos:", total);
console.log("Hora con mayor tráfico:", horaMax, "con", maximo, "MB");
