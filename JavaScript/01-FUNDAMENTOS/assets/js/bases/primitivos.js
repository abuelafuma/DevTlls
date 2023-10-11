/**
 * PRIMITIVOS JAVASCRIPT TIPO DE DATOS
 */

let nombre = 'Peter Parker';
console.log( nombre );

/* ERROR */
// let nombre = 'Ben Parker';
// ERROR: Uncaught SyntaxError:
// Identifier'nombre' has already been declared (at primitivos.js:8:5)

/* CORRECTO, aquí no redeclaramos la variable sino que la redefinimos */
nombre = 'Ben Parker';
console.log( nombre );

nombre = "Tía MAy";
nombre = `Tía May`;
console.log( typeof nombre );

nombre = 123;
console.log( typeof nombre );

let esMarvel = false; // NO es False
console.log( typeof esMarvel );

let edad = 33;
console.log( typeof edad );

edad = 33.001;
console.log(typeof edad );

let superPoderDeSpiderMan; // No se le ha asigando ningún valor al inicializarla, po tr
console.log( superPoderDeSpiderMan ); 

let soyNull = null;
console.log( soyNull );

let symbol1 = Symbol('a'); // Es un objeto Symbol
let symbol2 = Symbol('a'); // Es otro objeto Symbol diferente

console.log( typeof symbol1 );

console.log( symbol1 === symbol2 );

