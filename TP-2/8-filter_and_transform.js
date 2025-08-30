const alertas = [
  { id: 1, dispositivo: "PC-Desarrollo", ip: "192.168.1.5", nivel: "alto", mensaje: "Intento de acceso no autorizado" },
  { id: 2, dispositivo: "PC-Marketing", ip: "192.168.1.7", nivel: "medio", mensaje: "Uso elevado de CPU" },
  { id: 3, dispositivo: "Servidor-Web", ip: "192.168.1.8", nivel: "alto", mensaje: "Posible ataque DDoS" },
  { id: 4, dispositivo: "Servidor-BD", ip: "192.168.1.11", nivel: "bajo", mensaje: "Consulta lenta detectada" }
];

// filtrar solo alertas de nivel alto
const alertasAltas = alertas.filter(alerta => alerta.nivel === "alto");

// transformarlas en mensajes personalizados
const mensajes = alertasAltas.map(alerta => 
  `Alerta crítica en ${alerta.dispositivo} (${alerta.ip}): ${alerta.mensaje}`
);

console.log("Mensajes para el administrador:");
console.log(mensajes);
