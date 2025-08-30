const topologiaRed = {  
    nodos: [  
        { id: "A", tipo: "Router", ubicacion: "Planta 1" },  
        { id: "B", tipo: "Switch", ubicacion: "Planta 1" },  
        { id: "C", tipo: "Switch", ubicacion: "Planta 2" },  
        { id: "D", tipo: "Switch", ubicacion: "Planta 3" },  
        { id: "E", tipo: "Router", ubicacion: "Planta 3" }  
    ],  
    conexiones: [  
        { origen: "A", destino: "B", ancho_banda: 1000 },  
        { origen: "A", destino: "C", ancho_banda: 1000 },  
        { origen: "B", destino: "C", ancho_banda: 100 },  
        { origen: "B", destino: "D", ancho_banda: 100 },  
        { origen: "C", destino: "D", ancho_banda: 100 },  
        { origen: "C", destino: "E", ancho_banda: 1000 },  
        { origen: "D", destino: "E", ancho_banda: 1000 }  
    ]  
};

// cuenta el numero de conexiones por nodo  
const conexionesPorNodo = {};  
topologiaRed.nodos.forEach(nodo => {  
    conexionesPorNodo[nodo.id] = 0;  
});  

// contar las conexiones
topologiaRed.conexiones.forEach(conexion => {
    conexionesPorNodo[conexion.origen]++;
    conexionesPorNodo[conexion.destino]++;
});

// encuentra los nodos con mas conexiones
const nodosOrdenados = Object.entries(conexionesPorNodo)
    .sort((a, b) => b[1] - a[1]); // Ordenar de mayor a menor

console.log("Nodos ordenados por número de conexiones:");
console.log(nodosOrdenados);

// analisis y sugerencias de optimización
console.log("\n--- ANÁLISIS Y SUGERENCIAS DE OPTIMIZACIÓN ---");

// nodo con mas conexiones
const nodoMasConectado = nodosOrdenados[0];
console.log(`Nodo más conectado: ${nodoMasConectado[0]} con ${nodoMasConectado[1]} conexiones`);

// Identificar cuellos de botella (conexiones con bajo ancho de banda)
const conexionesBajas = topologiaRed.conexiones.filter(conexion => conexion.ancho_banda < 500);
console.log("\nCuellos de botella (ancho de banda < 500 Mbps):");
conexionesBajas.forEach(conexion => {
    console.log(`- ${conexion.origen} ↔ ${conexion.destino}: ${conexion.ancho_banda} Mbps`);
});

// optimización
console.log("\nSugerencias de optimización:");
console.log("1. Mejorar el ancho de banda de las conexiones de 100 Mbps a 1000 Mbps");
console.log("2. Considerar agregar un switch adicional en Planta 2 para distribuir mejor las conexiones");
console.log("3. Evaluar la redundancia de conexiones críticas entre routers");
console.log("4. Balancear la carga entre los nodos más conectados (C y B)");

// informacion adicional por nodo
console.log("\nInformación detallada por nodo:");
nodosOrdenados.forEach(([nodoId, conexiones]) => {
    const nodoInfo = topologiaRed.nodos.find(n => n.id === nodoId);
    console.log(`${nodoId} (${nodoInfo.tipo} - ${nodoInfo.ubicacion}): ${conexiones} conexiones`);
});