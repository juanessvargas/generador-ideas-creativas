/**
 * tipos.ts
 * --------
 * Aquí definimos las formas de datos permitidas
 * para nuestro Generador de Ideas Creativas.
 */


// TYPE 1: Mood
// Una idea solamente puede tener uno de estos moods.
//
// IMPORTANTE:
// Por ahora vamos a dejar "minimalista" afuera a propósito.
// Cuando migremos ideas.js a TypeScript,
// TypeScript debería detectar el problema.
// Esto replica el ejercicio que hicimos en clase.
export type Mood =
  | "irreverente"
  | "emocional"
  | "absurdo";


// TYPE 2: Formato
// Solo permitimos estos formatos.
export type Formato =
  | "reel"
  | "post"
  | "valla";


// TYPE 3: Interface Idea
// Define qué información debe tener una idea.
export interface Idea {

  // Puede ser número en las ideas originales
  // o string cuando combinamos dos ideas.
  id: number | string;

  // El nombre siempre debe ser texto.
  nombre: string;

  // Mood solamente acepta valores definidos arriba.
  mood: Mood;

  // Por ahora NO agregamos formato.
  // Lo haremos después cuando TypeScript detecte el problema.

  // El nivel creativo siempre debe ser un número.
  nivelCreativo: number;
}