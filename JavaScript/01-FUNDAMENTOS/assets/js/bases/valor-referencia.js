// PASO por VALOR Vs REFERENCIA y como ROMPER LA REFERENCIA

// PASO POR VALOR
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// PASO POR REFERENCIA
let juan = { nombre: 'Juan' }; // Objeto literal por que lo declaramos y lo inicializamos desde cero, como cualquier variable, por ello se llama literal.
let ana = juan;
console.log({ juan, ana });
/**
 * ana : {nombre: 'Ana'}
 * juan : {nombre: 'Juan'} 
 */
// Aqui tenemos que el valor de nombre ha pasado por valor al asignar el objeto juan a la variable Ana. Pero......

// Si asignamos el valor a la propiedad del objeto, este valor cambiará wl valor de la propiedad en todos los objetos que tengan esa propiedad.
ana.nombre = 'Ana';
console.log({ juan, ana });
/**
 * ana : {nombre: 'Ana'}
 * juan : {nombre: 'Ana'} 
 */
// ¿ Porque cambió el nombre de Juan si yo solo cambié el nombre de Ana ??
// En el objeto juan { nombre: 'Juan' }, Se ha cambiado el valor de nombre: 'Ana' por que en JS todos los objetos són pasados por referencia. 

// ¿ COMO PODEMOS SABER CUANDO SE PASA POR VALOR Y CUANDO POR REFERENCIA ?
// Paso por VALOR: Cuando sean DATOS PRIMITIVOS

// Paso por REFERENCIA: Cuando sean OBJETOS, Es decir para todo el resto de estructuras, ya que en JS todo son objetos, excepto l@s primitivos;

// Resolvamos el problema .....

const cambiaNombre = ( persona ) => {

    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log({ peter, tony });

// Si cambiamos el valor por referencia, al enviarlo como argumento, en el momento que lo retornemos cambiará el valor de la proiedad en todos los objetos.

// Podemos asignar asignar a la varaible ana el objeto juan:
// NO ES LA SOLUCION:
juan = { nombre: 'Juan'};
ana = { juan } // Esto es una rareza ana contiene el objeto juan que tiene una propiedad nombre = juan.
console.log({ juan, ana});

// La solucion seria........

/**
 * ROMPER LA REFERENCIA
 * OPERADOR SPREAD (...): 
 * Permite separar todas las propiedades y valores de un objeto. nos permitira cambiar el valor de la propiedad ya que romperá la referencia.
 * Si lo usamos fuera de los parentesis de la función en cualquier objeto, designará un espacio en memorio exclusivo para esa propiedad del objeto y pordremos asignarle un valor independiente.
 * 
 * DIERENCIAS ENTRE PARAMETROS REST (...args) y OPERDOR SPREAD (...propertie)
 * PARAMETRO REST:
 * Cuando usamos ... y en el parentesis delante de los args de uan funcion(...args).UNE TODOS LOS ARGUMENTOS EN UNA SOLA VARIABLE Y TRANSFORMALO EN UN ARREGLO:
 * 
 * OPERADOR SPREAD:
 * Cuando usamos ... en cualquier otro lugar (...). SEPARA LOS ELEMENTOS Y ROMPE SU REFERENCIA EN MEMORIA. Podemos trabajar objetos y hacer igualaciones / asignaciones,  que apunten a diferentes espacios en memoria.
 * En el ejemplo, cuando creamos la variable juan esta queda almacenada en algun espacio de memoria de la computer y cuando hacemos la asignación estamos apuntando al mismo lugar en memoria, por eso cuando cambiamos ana, también cambiamos juan.
 * 
 */

// AQUÍ, SI:
ana = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });

// COMO LO APLICARIAMOS EN ESTE CASO.....:
// Probamos a usar el operador SPREAD en el argumento de la funcion cammbiaNombre1......pero...... 
const cambiaNombre1 = ( ...persona ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter1 = { nombre: 'Peter' };
let tony1 = cambiaNombre1( peter );

console.log({ peter1, tony1 });
// Entonces no se comportará como SPREAD sino como PARAMETRO REST y el resultado será que la variable tony la transforam en un arreglo, en este caso solo tiene una propiedad, or lo que solo tiene el elemento 0 del arreglo:
/**
 *  peter1 : {nombre: 'Peter'}
 *  tony1 : Array(1)
 *  0 : {nombre: 'Tony'} 
 *  nombre : "Tony"
 *  length : 1 
 */
// Esta soución no no sirve, ya que no queremos transformarlo en un arreglo

// ROMPEMOS LA REFERENCIA
// Probamos a poner el arguemnto persona como objeto ({ persona }) y aplicamos el OPERADOR SPREAD AL objeto argumento, NO AL ARGUMENTO COMO TAL es decir  => ({ ...persona }):
const cambiaNombre2 = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter2 = { nombre: 'Peter' };
let tony2 = cambiaNombre2( peter );

console.log({ peter2, tony2 });


// ALPLICACION DEL OPERADOR SPREAD EN ARREGLOS

const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = frutas;

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });
/**
 * 
 * (index)          0           1           2           3
    frutas	    'Manzana'	  'Pera'	  'Piña'	  'Mango'
    otrasFrutas	'Manzana'	  'Pera'	  'Piña'   	  'Mango'

    Aqui podemos observar que los dos arreglos tienen los mismos elementos. Porque aunque otrasFruts es otro arreglo independiente, le hemos asignado los valores del arreglo frutas ya existente, por lo que apunta al mismo espacio de memoria, por ello al hacer push solo en el arreglo otrasFrutas, se añade mango a los dos arreglos.
 */

// Probamos esta sintaxis para otrasFrutas1 sea independiente en memoria de frutas.


const frutas1 = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas1 = [frutas1];

otrasFrutas1.push('Mango');

console.table({ frutas1, otrasFrutas1 });
/**
 * (index)          0           1           2           
    frutas1	    'Manzana'	  'Pera'	  'Piña'
    otrasFrutas1	 Array(3)	  'Pera'	  'Piña'
 * 
    frutas1:Array(3)                    
    0:"Manzana"
    1:"Pera"
    2:"Piña"
    length:3

    otrasFrutas1:Array(2)
    0:(3) ['Manzana', 'Pera', 'Piña']
    1:"Mango"
    length:2
 * 
    En este caso, tampoco logramos lo que pretendiamos, ya que el arreglo otrasFrutas, aunque es una arreglo independiente, colocando [frutas1], este pasa a ser el elemento [0] del array otrasFrutas1.
 * 
 */

// METODO CORRECTO: USAMOS OPERADOR SPREAD [...frutas2]
const frutas2 = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas2 = [...frutas2];

otrasFrutas2.push('Mango');

console.table({ frutas2, otrasFrutas2 });

/**
 * (index)              0           1           2           3
    frutas2	        'Manzana'	  'Pera'	  'Piña'	  
    otrasFrutas2	'Manzana'	  'Pera'	  'Piña'   	  'Mango'
 * 
 * Aplicando el operador SPREAD conseguimos romper la REFERENCIA y que cada elemento sea independiente, ademas de indicar que el array serà de un numero indeterminado de elementos. 
 */

// OTRA METODO DE ROMPER LA RELACION DE REFERENCIA DE MEMORIA
// METODO frutas3.slice() sin argumentos.

const frutas3 = ['Manzana', 'Pera', 'Piña'];

const otrasFrutas3 = frutas3.slice();// SPLICE: Cortame el arreglo y devuelveme  los elementos que yo  (envio como argumento), pero si no hay ningun elemento..., es decir Si yo no mando ningún argumento...: Esto devuelve un nuevo arreglo rompiendo dicha relación. 

otrasFrutas3.push('Mango');

console.table({ frutas3, otrasFrutas3 });

// AHORA VAMOS A EVALUAR CUAL DE LOS DOS METODOS ES MAS EFICIENTE
// EFICIENCIA DE .SLICE():
const frutas4 = ['Manzana', 'Pera', 'Piña'];
console.time('slice')
const otrasFrutas4 = frutas4.slice();
console.timeEnd('slice')

// EFICIENCIA DE ...SPREAD
//const frutas5 = ['Manzana', 'Pera', 'Piña'];
console.time('spread')
const otrasFrutas5 = [...frutas4];
console.timeEnd('spread')

otrasFrutas4.push('Mango');
//console.table({ frutas4, otrasFrutas4 });

/* otrasFrutas5.push('Mango');
console.table({ frutas5, otrasFrutas5 }); */

/**
 * slice: 0.001953125 ms
 * spread: 0.000732421875 ms
 * 
 *
 */
// EFICIENCIA DE ...SPREAD():
const frutas5 = ['Manzana', 'Pera', 'Piña'];
console.time('spread')
const otrasFrutas6= [...frutas5];
console.timeEnd('spread')

// EFICIENCIA DE ...SLICE
console.time('slice')
const otrasFrutas7 = frutas5.slice();
console.timeEnd('slice')

otrasFrutas5.push('Mango');
//console.table({ frutas5, otrasFrutas5 });