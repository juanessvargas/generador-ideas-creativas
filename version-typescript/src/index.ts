/**
 * index.ts
 * --------
 * Archivo principal de la versión TypeScript.
 * Hace lo mismo que index.js,
 * pero utilizando nuestros datos y funciones tipadas.
 */


// Importamos las ideas ya validadas por TypeScript.
import { ideas } from "./ideas";


// Importamos las funciones del generador.
import {
  crearContadorConsultas,
  filtrarPorMood,
  calcularNivelCreativoPromedio,
  combinarIdeas,
  cargarIdeas
} from "./generador";


// Creamos nuestro contador de consultas.
const contador = crearContadorConsultas();


// La función es async porque dentro utilizaremos await.
async function main() {

  // Cargamos las ideas de forma asíncrona.
  // await espera a que cargarIdeas termine.
  const ideasCargadas = await cargarIdeas(ideas);


  // Registramos una consulta.
  contador.registrar();


  // Filtramos solamente las ideas con mood "irreverente".
  //
  // TypeScript sabe que "irreverente"
  // es un valor válido del type Mood.
  const irreverentes = filtrarPorMood(
    ideasCargadas,
    "irreverente"
  );


  // Mostramos las ideas encontradas.
  console.log(
    "Ideas irreverentes:",
    irreverentes
  );


  // Calculamos el promedio creativo.
  const promedio =
    calcularNivelCreativoPromedio(
      ideasCargadas
    );


  // Mostramos el promedio.
  console.log(
    "Nivel creativo promedio:",
    promedio
  );


  // Combinamos las dos primeras ideas.
  const ideaCombinada = combinarIdeas(
    ideasCargadas[0],
    ideasCargadas[1]
  );


  // Mostramos la nueva idea.
  console.log(
    "Idea combinada:",
    ideaCombinada
  );


  // Mostramos cuántas consultas se hicieron.
  console.log(
    "Consultas realizadas:",
    contador.obtenerTotal()
  );
}


// Ejecutamos el programa.
main();