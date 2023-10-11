

/*
alert('Hola desde app.js'); // Bloquea la ejecucion hasta que el usuario no da intro

console.log('Hola Mundo');
console.log(console.log('Hola Mundo'));
document.write('Hello World')
*/

// Una variable es un contenedor de información que apunta a una dirección de menória

// let a = 10;
// var b = 10;
// const c = 10;

// c = 20; // no se puede hacer
// a = 20;
// b = 30;

// DIFERNECIAS LET VAR

// c = 30;

/**
 * · 1996: LiveSript a JavaScript
 * · ES1: (ECMAScript 1)
 * 
 * 
 * · ES5: Mayor Compatibilidad con navegadores web mut viejos
 * · ES6/ES2015, ES7/ES2016, ES8/ES2017:
 *  · Soportados por la mayoria de navegadores modernos
 *  · Pero no por todos los navegadores web
 *   . Muchas características puedes ser implementadas con polyfills 
 * 
 * Que es un Polyfill?
 * Es un código que provee el funcionamiento de una nueva característica de JavaScript (ES6), en versiones viejas como ES5
*/

/*
let a = 10;
let b = 10;
let c = 10;
let d = 10;
let x = a  + b;

let a = 10, b = 20, c = 10, x = a + b
*/

// JS ignora los espacios y lo interpretaria así
/*
 let a = 10,
     b = 20,
     c = 10,
     d = 10,
     x = a + b

console.log( x );
*/

// CONSOLA DEL NAVEGADOR
// MENSAJES
/* 
console.log( x ); // normal
console.warn( x ); // amarillo
console.error( x ); // rojo
 */

// REPRESENTACIONES EN LA CONSOLA
// Los () indican que es un método o una función

// Forma de representar y sacar por consola el nombre de la variable y su valor por consola, en forma de objeto (key: value) el objeto es { clave: valor}

/* 
console.log({ a });
console.log({ b });
console.log({ c }); 
 */

//Cambiamos añadimos propiedades de CSS como 2º argumento dentro de la función console.log(). El primer argumento el el String '%c Mis variables'. %c es par aindicar que queremos dar estilos al string (%c sirve para incrustrar CSS).
/*
console.log('%c Mis variables', 'color: blue; font-weight: bold'); 
console.log({ a });
console.log({ b });
console.log({ c }); 
*/



let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'Spiderman',
    x = a + b;

// Forma para de imprimir todas las variables con su valor por console.log()

// CONSOLE TABLE Vs CONSOLE LOG
// Como Array([])
/* 
* console.log([ a, b, c, d, x ]);
* console.table([ a, b, c, d, x ]);
 */

// Como Objeto({})
/*
console.log({ a, b, c, d, x });
console.table({ a, b, c, d, x });
*/

// SCOPE EN LA DECLARACION DE CONSTANTES ( se deben inicializar en el momento de declararlas, ya que en las constantes no se puede cambiar el valor)

// VARIBLE DE ENTORNO
const SALUDO = c + d  + ' VARIABLE DE ENTORNO ';


// Variable de bloque

const saludo = c + d + ' variable de bloque';


// DEPURACIÓN y BREAKPOINTS

c = 'Hola de nuevo';

var miNombre = 'Fernando'; // 


// PROBLEMA DE INICIALIZAR VARIABLES CON VAR
// VAR:  SobreEscribe y  Modifica directamente las propiedades del Objeto Window

/* var outerHeight = 600;
var outerWidth = 1000000;
 */

// LET y CONST:  No sobreescriben las propiedades del objeto window  
let outerHeight = 600;
const outerWidth = 1000000;

//console.log(miNuevoNombre + ' Jiménez');
// var miNuevoNombre = 'Fernando Herrera';

/*
 * JS antes de ejecutar el archivo linea por linea.
 * 
 * 1º) Hace un barrido para cargar las varibles, constantes funciones etc ... y otras cosas. 
 * 2º) Ejecuta secuencialmente el código
 * 
 * Después de escribir esta sentencia:
 * console.log(miNuevoNombre + ' Jiménez');
 * Antes de esta otra:
 * var miNuevoNombre = 'Fernando Herrera';
 * Al recargar el navegador nos encontramos con este resultado: " undefined Jiménez". Está concatenando  var miNuevoNombre (undefined) + Jímenez. Debido a que la variable se usa en el alert y se declara después.
 */

// AHORA CAMBIAMOS VAR por LET
console.log(miNuevoNombre + ' Jiménez');
let miNuevoNombre = 'Fernando Herrera';
/**
 * En el navegador ahora aparecerá: Uncaught ReferenceError: Cannot access 'miNuevoNombre' before initialization ( No puede acceder a la variable antes de la inicialización).
 * Estamos usando la variable en el console.log() y esta toda via no esta inicializada.
 */
