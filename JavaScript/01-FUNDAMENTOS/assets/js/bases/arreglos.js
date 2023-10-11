/**
 * SON UNA ESTRUCTURA DE DATOS PRIMITIVOS que son una colecciòn de datos información
 */

// const arr = new Array( 10 );

// console.log(arr); // length = 10

// const arr1 = [];
// console.log(arr1); // length = 0

let videoJuegos = [ 'Mario', 'Megaman', 'Chrono Trigger' ];
console.log({ videoJuegos });

console.log(videoJuegos[0]);

// let arregloCosas = [
    // true,
    // 123,
    // 'Fernando',
    // 1 + 2, // Primero hace la operación y después inserta el resulltado en el arreglo.
// ];

// console.log(arregloCosas);

/* OBTENER INFORMACIÓN DE UN ARREGLO */ 

let arregloCosas1 = [
    true,
    123,
    'Fernando',
    1 + 2, // Primero hace la operación y después inserta el resulltado en el arreglo.
    function(){},
    () => {},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. light']
];

// console.log(arregloCosas1);

console.log(arregloCosas1[7][3]);

/**
 * EJERCICIO 1 mostrar el último elemento del arreglo que hay dentro del un arreglo principal (arregloCosas[]). Acceder a 'Dr.Light'
*/

// let arregloCosas = [
    // true,
    // 123,
    // 'Fernando',
    // 1 + 2,
    // function(){},
    // () => {},
    // { a: 1 },
    // ['X', 'Megaman', 'Zero', 'Dr. light'] 
// ];

// console.log( arregloCosas[7][3]); // variable[indice][indice]


/**
 * EJRCICIO 2 Arreglo anidado. Acceder a 'Woodman'
 */

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    () => {},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. light',
    ['Dr.Willy', 'Woodman']
    ] 
];

console.log( arregloCosas[7][4][1]); // variable[indice][indice]



