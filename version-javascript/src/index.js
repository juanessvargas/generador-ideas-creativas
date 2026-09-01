// Importamos la lista de ideas desde ideas.js
import { ideas } from "./ideas.js";

// Importamos las funciones que creamos en generador.js
import {
  crearContadorConsultas,
  filtrarPorMood,
  calcularNivelCreativoPromedio,
  combinarIdeas,
  cargarIdeas
} from "./generador.js";


// Creamos el contador de consultas.
// Esta función usa un closure.
const contador = crearContadorConsultas();


// Creamos una función async porque vamos a usar await.
async function main() {

  // Esperamos a que las ideas se carguen.
  const ideasCargadas = await cargarIdeas(ideas);

  // Registramos una consulta.
  contador.registrar();


  // Filtramos solamente las ideas irreverentes.
  const irreverentes = filtrarPorMood(
    ideasCargadas,
    "irreverente"
  );

  // Mostramos las ideas encontradas.
  console.log("Ideas irreverentes:", irreverentes);


  // Calculamos el promedio del nivel creativo.
  const promedio = calcularNivelCreativoPromedio(
    ideasCargadas
  );

  // Mostramos el resultado.
  console.log("Nivel creativo promedio:", promedio);


  // Combinamos dos ideas.
  const ideaCombinada = combinarIdeas(
    ideasCargadas[0],
    ideasCargadas[1]
  );

  // Mostramos la nueva idea.
  console.log("Idea combinada:", ideaCombinada);


  // Mostramos cuántas consultas se realizaron.
  console.log(
    "Consultas realizadas:",
    contador.obtenerTotal()
  );
}


// Ejecutamos el programa.
main();