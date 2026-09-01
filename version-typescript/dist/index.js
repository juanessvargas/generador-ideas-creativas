"use strict";
/**
 * index.ts
 * --------
 * Archivo principal de la versión TypeScript.
 * Hace lo mismo que index.js,
 * pero utilizando nuestros datos y funciones tipadas.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos las ideas ya validadas por TypeScript.
const ideas_1 = require("./ideas");
// Importamos las funciones del generador.
const generador_1 = require("./generador");
// Creamos nuestro contador de consultas.
const contador = (0, generador_1.crearContadorConsultas)();
// La función es async porque dentro utilizaremos await.
async function main() {
    // Cargamos las ideas de forma asíncrona.
    // await espera a que cargarIdeas termine.
    const ideasCargadas = await (0, generador_1.cargarIdeas)(ideas_1.ideas);
    // Registramos una consulta.
    contador.registrar();
    // Filtramos solamente las ideas con mood "irreverente".
    //
    // TypeScript sabe que "irreverente"
    // es un valor válido del type Mood.
    const irreverentes = (0, generador_1.filtrarPorMood)(ideasCargadas, "irreverente");
    // Mostramos las ideas encontradas.
    console.log("Ideas irreverentes:", irreverentes);
    // Calculamos el promedio creativo.
    const promedio = (0, generador_1.calcularNivelCreativoPromedio)(ideasCargadas);
    // Mostramos el promedio.
    console.log("Nivel creativo promedio:", promedio);
    // Combinamos las dos primeras ideas.
    const ideaCombinada = (0, generador_1.combinarIdeas)(ideasCargadas[0], ideasCargadas[1]);
    // Mostramos la nueva idea.
    console.log("Idea combinada:", ideaCombinada);
    // Mostramos cuántas consultas se hicieron.
    console.log("Consultas realizadas:", contador.obtenerTotal());
}
// Ejecutamos el programa.
main();
