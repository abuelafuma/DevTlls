/* LAS FUNCIONES SE DECLARAN EN LA PARTE SUPERIOR */
function saludar() {
    console.log('Hola Mundo ');
}

/* UN METODO ES UNA FUNCION DENTRO DE UN OBJETO */

saludar();
saludar();
saludar();

/* OTRA FORMA DE DECLARAR FUNCIONES */

var saludar = 123; 
/* ERROR
* saludar();
* Uncaught TypeError: saludar is not a function
*/

/* DECLARACION COM FUNCION ANONIMA (sin nombre) */
const saludar2 = function () {
    console.log('Hola Mundo desde una funcion anónima');

}
// Esta funcion va a responder al nombre saludar2. Esto impedirá que se sobre escriba.

saludar2();
saludar2();
saludar2();

// FUNCIONES CON ARGUMENTOS

function saludar1( nombre ) {
    console.log('Hola ' + nombre);
}

saludar1();
saludar1( 'Fernando' );

const saludar3 = function( nombre ) {
    console.log('Hola, desde la constante que tiene asignada la función, ' + nombre);
}

saludar1( 'Fernando' );
saludar3( 'Fernando' );

saludar3( 'Fernando', 40, true, 'Costa Rica' ); // Esto no da error.
/**
 * Las Funciones tradicionales tienen un objeto implicito llamado arguments
 * LAS FUNCIONES FLECHA 
 */

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

saludarFlecha();


/* FUNCION FLECHA CON ARGUMENTOS */
const saludarFlecha2 = (nombre) => {
    console.log('Hola Flecha ' + nombre);
}

saludarFlecha2( 'Melissa' );

/* FUNCIONES CON ARGUMENTOS RETORNO */

function saludar4( nombre ) {
    console.log(arguments);
    console.log('Hola ' + nombre);
    // return  1; // 1
    // return 10; // 10
                  // {retornoDeSaludar: undefined} retornoDeSaludar: undefined  
}

const retornoDeSaludar = saludar4( 'Fernando', 40, true, 'Costa Rica' ); // 1
console.log({ retornoDeSaludar });

function saludar5( nombre ) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    // return  1; // 1
    return 10; // 10

    // Esto no se va a ejecutar
    console.log('Soy un código que está después del return');
                  
}

const retornoDeSaludar1 = saludar5( 'Fernando', 40, true, 'Costa Rica' ); // 1
console.log({ retornoDeSaludar1 });


/* PODEMOS RETORNAR CUALQUIER COSA */

function saludar6( nombre ) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    // return  1; // 1
    // return [1, 2, 3, 4, 5]; // 10
    return [1,2];

    // Esto no se va a ejecutar
    console.log('Soy un código que está después del return');
                  
}

const retornoDeSaludar2 = saludar6( 'Fernando', 40, true, 'Costa Rica' ); // 1
console.log({ retornoDeSaludar2 });
console.log( retornoDeSaludar2[0], retornoDeSaludar2[1]);


/* EJERCICIOS RETURN */
function sumar(a,b) {
    return a + b;
}

console.log(sumar(1, 2));

/* FORMATO FUNCION FLECHA */

/* const sumar2 = (a,b)  =>  {
    return a + b; 
} */

/* FORMATO ABREVIADO EN UNA SOLA LINEA SI EN ESA LINE ESTA LA PALABA RETURN */

const sumar2 = (a,b) =>  a + b; // Sacamos parentesis y llaves

console.log(sumar2(2,2));

/**
 * FUNCION NUMERO ALEATORIO
 */

function getAleatorio() {
    return Math.random();
}

/* EJERCICIO: Transformar esta función en función flecha */
/* const getAleatorio2 = () => { 
    return Math.random()
}; */
const getAleatorio2 = () => Math.random();
console.log( getAleatorio2() ); 