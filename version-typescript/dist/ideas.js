"use strict";
/**
 * ideas.ts
 * --------
 * Aquí guardamos las mismas ideas que teníamos
 * en la versión JavaScript, pero ahora estarán
 * validadas por TypeScript.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ideas = void 0;
// Creamos nuestra lista de ideas.
//
// ": Idea[]" significa:
// esta variable debe ser un arreglo de objetos
// que tengan la forma definida en interface Idea.
exports.ideas = [
    // Primera idea
    {
        id: 1,
        nombre: "El producto responde a sus haters",
        mood: "irreverente",
        formato: "reel",
        nivelCreativo: 85
    },
    // Segunda idea
    {
        id: 2,
        nombre: "Una historia contada solo con sonidos",
        mood: "emocional",
        formato: "reel",
        nivelCreativo: 78
    },
    // Tercera idea
    {
        id: 3,
        nombre: "Una valla que no quiere venderte nada",
        mood: "absurdo",
        formato: "valla",
        nivelCreativo: 92
    },
    // Cuarta idea
    {
        id: 4,
        nombre: "Una campaña construida con una sola palabra",
        mood: "minimalista",
        formato: "post",
        nivelCreativo: 73
    },
    // Quinta idea
    {
        id: 5,
        nombre: "El producto habla como si fuera tu amigo",
        mood: "irreverente",
        formato: "post",
        nivelCreativo: 88
    }
];
