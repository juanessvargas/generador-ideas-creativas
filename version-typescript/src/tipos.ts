
export type Mood =
  | "irreverente"| "emocional" | "absurdo"| "minimalista";



export type Formato =
  | "reel" | "post"| "valla";



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
  
  formato: Formato;
}