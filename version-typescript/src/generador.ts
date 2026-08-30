/**
 * generador.ts
 * -------------
 * Esta es la versión TypeScript de generador.js.
 * La lógica es la misma, pero ahora indicamos
 * qué tipos de datos reciben y devuelven las funciones.
 */


// Importamos los tipos que definimos en tipos.ts
import { Idea, Mood } from "./tipos";


// ----------------------------------------------------
// CLOSURE
// ----------------------------------------------------

// Creamos un contador privado de consultas.
// No necesita parámetros.
export function crearContadorConsultas() {

  // Esta variable queda "guardada" dentro del closure.
  let total = 0;

  return {

    // Aumenta el contador en 1.
    registrar(): number {
      total += 1;
      return total;
    },

    // Devuelve el total actual.
    obtenerTotal(): number {
      return total;
    }

  };
}


// ----------------------------------------------------
// FILTER
// ----------------------------------------------------

// "lista: Idea[]" significa que recibimos
// un arreglo de ideas.
//
// "mood: Mood" significa que solo aceptamos
// los moods permitidos en tipos.ts.
//
// ": Idea[]" significa que devolvemos un arreglo de ideas.
export function filtrarPorMood(
  lista: Idea[],
  mood: Mood
): Idea[] {

  return lista.filter(
    (idea) => idea.mood === mood
  );
}


// ----------------------------------------------------
// REDUCE
// ----------------------------------------------------

// Recibe una lista de ideas
// y devuelve un número.
export function calcularNivelCreativoPromedio(
  lista: Idea[]
): number {

  // Si la lista está vacía, devolvemos 0.
  if (lista.length === 0) {
    return 0;
  }

  // reduce suma todos los niveles creativos.
  const suma = lista.reduce(
    (acumulado, idea) =>
      acumulado + idea.nivelCreativo,
    0
  );

  // Calculamos el promedio.
  return Math.round(
    suma / lista.length
  );
}


// ----------------------------------------------------
// DESTRUCTURING + SPREAD
// ----------------------------------------------------

// Recibe dos ideas y devuelve una nueva Idea.
export function combinarIdeas(
  ideaA: Idea,
  ideaB: Idea
): Idea {

  // Sacamos nivelCreativo de ideaA
  // y guardamos el resto de sus propiedades.
  const {
    nivelCreativo: nivelA,
    ...restoA
  } = ideaA;


  // Sacamos solamente nivelCreativo de ideaB.
  const {
    nivelCreativo: nivelB
  } = ideaB;


  // Creamos una nueva idea combinando información.
  return {

    // Copiamos las propiedades de ideaA.
    ...restoA,

    // Creamos un nuevo id.
    id: `${ideaA.id}-${ideaB.id}`,

    // Combinamos los nombres.
    nombre:
      `${ideaA.nombre} + ${ideaB.nombre}`,

    // Conservamos el mood de la primera idea.
    mood: ideaA.mood,

    // Usamos el formato de la segunda idea.
    formato: ideaB.formato,

    // Promediamos los dos niveles creativos.
    nivelCreativo: Math.round(
      (nivelA + nivelB) / 2
    )
  };
}


// ----------------------------------------------------
// PROMISE
// ----------------------------------------------------

// Esta función simula una operación que demora.
//
// Recibe una Idea.
//
// Promise<Idea> significa:
// "esta promesa eventualmente devolverá una Idea".
function simularCargaIdea(
  idea: Idea
): Promise<Idea> {

  return new Promise(
    (resolve, reject) => {

      // Simulamos una espera de 200 milisegundos.
      setTimeout(() => {

        // Si falta información importante,
        // rechazamos la promesa.
        if (!idea || !idea.mood) {

          reject(
            new Error(
              `Idea inválida: falta el mood`
            )
          );

          return;
        }

        // Si todo está bien,
        // devolvemos la idea.
        resolve(idea);

      }, 200);

    }
  );
}


// ----------------------------------------------------
// ASYNC / AWAIT + TRY / CATCH
// ----------------------------------------------------

// async significa que esta función es asíncrona.
//
// Promise<Idea[]> significa que al terminar
// devolverá un arreglo de ideas.
export async function cargarIdeas(
  lista: Idea[]
): Promise<Idea[]> {

  try {

    // Cargamos todas las ideas al mismo tiempo.
    const ideasCargadas =
      await Promise.all(
        lista.map(
          (idea) => simularCargaIdea(idea)
        )
      );

    // Si todo salió bien, devolvemos la lista.
    return ideasCargadas;

  } catch (error) {

    // Si ocurre un error mostramos un mensaje.
    console.error(
      "No se pudieron cargar las ideas."
    );

    // Devolvemos una lista vacía.
    return [];
  }
}