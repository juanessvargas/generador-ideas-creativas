# Generador de Ideas Creativas

## Descripción
Mini-programa creativo desarrollado para el Proyecto 1 de Desarrollo Web 3.

## Intención inicial
Crear un programa que genere ideas creativas dependiendo del mood seleccionado.

## Restricciones
- Solo se pueden utilizar moods definidos por el programa.
- Cada idea debe tener información completa.
- Si existe información incorrecta, el programa debe manejar el error.

## Criterios de aceptación
1. El programa puede filtrar ideas dependiendo de un mood.
2. El programa puede generar resultados mediante un proceso asíncrono.
3. El programa puede detectar y manejar datos incorrectos.

## Versión JavaScript

Primero hice el proyecto en JavaScript para comprobar que la idea funcionara bien.

En esta versión utilicé varios conceptos que vimos en clase, como `filter` y `reduce` para trabajar con las ideas, destructuring y spread para combinar información, módulos con `import` y `export`, un closure para llevar el conteo de consultas y promesas con `async/await` para simular la carga de datos sin bloquear el programa. También usé `try/catch` para manejar posibles errores.

## Migración a TypeScript

Cuando la versión en JavaScript ya funcionaba, pasé el mismo proyecto a TypeScript.

La lógica se mantuvo casi igual, pero agregué tipos para controlar mejor qué datos puede recibir cada función y qué información debe tener cada idea. Esto también me ayudó a detectar errores antes de ejecutar el programa.

## Tipos utilizados

### Mood

`Mood` define los moods permitidos:

- irreverente
- emocional
- absurdo
- minimalista

### Formato

`Formato` define los formatos permitidos:

- reel
- post
- valla

### Idea

La interface `Idea` define que cada idea debe tener:

- id
- nombre
- mood
- formato
- nivelCreativo


## Funciones tipadas

El proyecto incluye funciones tipadas como:

- `filtrarPorMood`
- `calcularNivelCreativoPromedio`
- `combinarIdeas`
- `cargarIdeas`


## Errores detectados por TypeScript

Durante la migración, TypeScript detectó que el mood `"minimalista"` estaba siendo utilizado en los datos, pero inicialmente no estaba incluido dentro del tipo `Mood`.

También detectó que las ideas tenían la propiedad `formato`, pero esta propiedad todavía no estaba definida dentro de la interface `Idea`.

Los errores se corrigieron agregando `"minimalista"` al tipo `Mood` y `formato` a la interface `Idea`.


## Cómo ejecutar el proyecto

### JavaScript

cd version-javascript
npm install
npm start

### TypeScript

cd version-typescript
npm install
npm run build
npm run dev


## Aprendizajes

Este proyecto permitió entender cómo migrar un programa de JavaScript a TypeScript y cómo TypeScript ayuda a detectar errores antes de ejecutar el código.

También permitió practicar programación asíncrona con promesas y `async/await`, además de usar Git y GitHub como bitácora del proceso.