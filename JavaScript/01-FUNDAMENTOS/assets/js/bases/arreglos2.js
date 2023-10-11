/**
 *  PROPIEDADES DE ARREGLOS
 * 
 * */

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo del arreglo:', juegos.length);

let primero = juegos[0];

/**
 * PODEMOS HACER CALCULOS DENTRO DE LOS CORCHETES [2-2];
 */
// juegos =[2 - 2];
// console.log(juegos);

 /**
  * Como podemos hacer calculos diretos .....
  * PODEMOS ACCEDER AL ULTIMO ELEMENTO CON EL METODO .length restandole 1 [.lengt-1]
  */
let ultimo = juegos[juegos.length -1 ];
console.log({ primero, ultimo });

/**
 * BARRIDO DE TODOS LOS ELEMENTOS DEL ARREGLO
 * Va a ejecutar una instruccion por cada elemento del arreglo.
 * METODOS:
 */

/* forEach: Por cada elemento*/
juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

/* push: Ponemos nuevo elemento al final del arreglo y devuelve un nuevo arreglo con una nueva longitud */
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });

/* unShift: Ponemos un nuevo elemento al principio del arreglo. Devuelve un número de indice */
juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

/* pop: Borra el último elmento del arreglo  */
let juegoborrado = juegos.pop();
console.log({ juegoborrado, juegos });

/* splice: Borrar un elemnto específico del arreglo. Devuelve un nuevo arreglo */
let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos});

/**
 * juegos(5) ['Fire Emblem', 'Zelda', 'Mario', 'Metroid', 'Chrono']
 * 
 * 0: "Fire Emblem"
 * 1: "Metroid"
 * 2: "Chrono"
 * length: 3
 * 
 * EL ARREGLO ES DE 5 ELEMENTOS PERO SOLO APARECEN 3,
 * Eso ocurre porque se le han pasado los valores por referencia a una dirección de memoria donde esta el arrglo, pero no el valor de lso elementos del arreglo como tales.
 * 
 * {juegosBorrados: Array(2), juegos: Array(3)}
    juegos: Array(3)
 *   0: "Fire Emblem"
     1: "Metroid"
     2: "Chrono"
    length: 3
[[Prototype]]: 
Array(0)
juegosBorrados: Array(2)
    0: "Zelda"
    1: "Mario"
    length: 2
[[Prototype]]
: 
Array(0)
 */



/**
 * indexOf: Para saber la posición de un elemnto o objeto.
 *  
 */

let metroidIndex = juegos.indexOf('Metroid');  
console.log({ metroidIndex });// CaseSensitive

// TODO: Pasar valores por Referencia o Valor