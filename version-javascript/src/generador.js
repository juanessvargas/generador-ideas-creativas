/**
 * generador.js
 * ------------
 * Lógica del generador de ideas creativas.
 * Usa varios conceptos de JavaScript avanzado:
 * - Closures
 * - Funciones de orden superior: filter y reduce
 * - Destructuring + spread
 * - Promesas
 * - async/await
 * - try/catch
 */

// --- CLOSURE ---------------------------------------------------
// Guarda de forma privada cuántas ideas hemos consultado.
export function crearContadorConsultas() {
  let total = 0;

  return {
    registrar() {
      total += 1;
      return total;
    },

    obtenerTotal() {
      return total;
    },
  };
}


// --- FILTER ----------------------------------------------------
// Filtra las ideas y devuelve solamente las que tienen el mood elegido.
export function filtrarPorMood(lista, mood) {
  return lista.filter((idea) => idea.mood === mood);
}


// --- REDUCE ----------------------------------------------------
// Calcula el nivel creativo promedio de todas las ideas.
export function calcularNivelCreativoPromedio(lista) {
  if (lista.length === 0) return 0;

  const suma = lista.reduce(
    (acumulado, idea) => acumulado + idea.nivelCreativo,
    0
  );

  return Math.round(suma / lista.length);
}


// --- DESTRUCTURING + SPREAD -----------------------------------
// Combina dos ideas para crear una nueva.
export function combinarIdeas(ideaA, ideaB) {
  const { nivelCreativo: nivelA, ...restoA } = ideaA;
  const { nivelCreativo: nivelB } = ideaB;

  return {
    ...restoA,
    id: `${ideaA.id}-${ideaB.id}`,
    nombre: `${ideaA.nombre} + ${ideaB.nombre}`,
    mood: ideaA.mood,
    formato: ideaB.formato,
    nivelCreativo: Math.round((nivelA + nivelB) / 2),
  };
}


// --- PROMISE ---------------------------------------------------
// Simula que una idea tarda en cargarse.
function simularCargaIdea(idea) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if (!idea || !idea.mood) {
        reject(
          new Error(
            `Idea inválida: falta el campo "mood" (id: ${idea?.id})`
          )
        );
        return;
      }

      resolve(idea);

    }, 200);
  });
}


// --- ASYNC / AWAIT + TRY / CATCH -------------------------------
// Carga varias ideas al mismo tiempo sin bloquear el programa.
export async function cargarIdeas(lista) {
  try {

    const ideasCargadas = await Promise.all(
      lista.map((idea) => simularCargaIdea(idea))
    );

    return ideasCargadas;

  } catch (error) {

    console.error(
      "No se pudieron cargar las ideas:",
      error.message
    );

    return [];
  }
}