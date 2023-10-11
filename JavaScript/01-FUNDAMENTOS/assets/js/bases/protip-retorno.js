/**
 * PRO-TIPS
 * FUNCIONES ARGUMENTOS Y DESESTRUCTURACION DE OBJETOS
 * 
 */

/* function crearPersona(nombre, apellido) {
    /* return {
        nombre: nombre, 
        apellido: apellido, */
        // Si el nombre de la propiedad tiene el mismo nombre que el de la varaible se puede omitir el nombre de la variable.
        
    /* QUEDARIA ASÍ */
    /* return {
        nombre,
        apellido,
    } */

    /* RESUMIENDOLO AUN MAS... */
    // return { nombre, apellido } 
// } 


/* FORMATO FUNCION FLECHA */

const crearPersona = (nombre, apellido) => {
    return { nombre, apellido };
}

/* FORMATO FUNCION FLECH EN 1 LINEA */
// Si una función de flecha solo tiene un return y no tiene otras instucciones en el cuerpo (bloque), podemos escribirla en 1 sola linea sin llaves ni parentesis

const crearPersona1 = (nombre, apellido) => ({nombre,apellido }); 

const persona = crearPersona1('Fernando', 'Herrera')
console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
}

/* const imprimeArgumentos2 = () => {
    console.log( arguments );
}

imprimeArgumentos2(10, true, false, 'Fernando', 'Hola'); */

/* ERROR */
/* Uncaught ReferenceError: arguments is not defined
    at imprimeArgumentos2 (protip-retorno.js:43:18)
arguments: soloes valido para funciones tradicionales. Pero si queremos cargar arguments en una función flecha debemos hacerlo de otro modo */

const imprimeArgumentos3 = (args) => {
    console.log( args );
}

imprimeArgumentos3(10, true, false, 'Fernando', 'Hola');

// Solo nos da el valor del primer argumento.
// Pero si necesitamos enviar todos los argumentos que queremos al llamar la función debemos usar el operador REST ...
// Todos los argumentos que he enviado como parametro a la función: Create un arreglo usando como elementos del arreglo, cada uno de los parámetros .

const imprimeArgumentos4 = ( ...args) => {
    console.log( args );
}

imprimeArgumentos4(10, true, false, 'Fernando', 'Hola');

/* COSIDERACIONES DEL PARAMETRO REST */
// 1.- Después del parámetro REST, puede venir ningun otro argumento.

/* const imprimeArgumentos5 = ( ...args, ) => { // Rest parameter must be last formal parameter
    console.log( args );
} */

// 2.- Si necesitamos extraer una varaible antes del parámetro REST entonces esta variable va a tener su propio valor independiente. El argumento tendrá su valor independiente. 

const imprimeArgumentos5 = ( edad, ...args) => {
    console.log({ edad, args });
}

imprimeArgumentos5(10, true, false, 'Fernando', 'Hola');


/**
 * NUEVO TEMA 
 */

const imprimeArgumentos6 = ( edad, ...args) => {
    // console.log( edad, args );
    return args;
}

imprimeArgumentos6(10, true, false, 'Fernando', 'Hola');
const argumentos = imprimeArgumentos6(10, true, false, 'Fernando', 'Hola');
/* EXPRESION NORMAL */
console.log({ argumentos });

/* EXPRESIONES PARA SEPARAR CADA UNO DE LOS ARGUMENTOS COMO VARIABLES INDEPENDIENTES */
/* METODO 1 */
console.log( argumentos[0], argumentos[1], argumentos[2], argumentos[3] );

/* METODO 2 */
/* const vivo = argumentos[0];
const casado = argumentos[1];
const nombre = argumentos[2];
const saludo = argumentos[3]; */

/* METODO 3 (MEJOR METODO MAS RAPIDO)*/

const [ casado, vivo, nombre, saludo] = imprimeArgumentos6(10, true, false, 'Fernando', 'Hola');
console.log( {casado, vivo, nombre, saludo} );

const persona2 = crearPersona('Fernando', 'Herrera');
const { apellido } = crearPersona('Fernando', 'Herrera');
console.log({ apellido });

/* Podemos cambiar el nombre a la variable que consta como propiedad del objeto y REASIGNARLA: */

const { apellido: nuevoApellido } = crearPersona('Fernando', 'Herrera');
console.log({ nuevoApellido });


/* DESESTRUCTURACION OBJETOS */
// Objeto
const tony = {
    nombre: 'Tony Strak',
    codeName: 'Ironman',
    vivo: 'false',
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

// Funciones para el objeto

// const imprimePropiedades = ( personaje ) => {

//     console.log('nombre', personaje.nombre);
//     console.log('codeName', personaje.codeName);
//     console.log('vivo', personaje.vivo);
//     console.log('edad', personaje.edad);
//     console.log('nombre', personaje.trajes);

// }

// imprimePropiedades( tony );

// DESESTRUCTURAMOS Aqui viene la desestructuración de argumentos
const imprimePropiedades = ({ nombre, codeName, vivo, edad, trajes }) => {
    console.log({ nombre }); 
    console.log({ codeName });
    console.log({ vivo }); 
    console.log({ edad }); 
    console.log({ trajes });
}

imprimePropiedades( tony );


// Si ahora no tenemos la edad .....


const tony1 = {
    nombre: 'Tony Strak',
    codeName: 'Ironman',
    vivo: 'false',
    // edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

// Lo mejor seria poner una condición para evaluar si falta el parametro edad que debe hacer el programa
const imprimePropiedades1 = ({ nombre, codeName, vivo, edad, trajes }) => {
    
    edad = edad || 0; // CONDICIONAL PARA LA EDAD

    console.log({ nombre }); 
    console.log({ codeName });
    console.log({ vivo }); 
    console.log({ edad }); 
    console.log({ trajes });
}

imprimePropiedades1( tony1 );

// Podriamos escribirlo de forma mas limpia ya que si empezamos a escribir condiciones para el resto de parámetros, este código quedará muy cargado. Por lo que tambien podemos escribirlo así: De esta forma ya le asignamos un valor a edad o a cualquiera de las porpiedades vacais del objeto.

const tony2 = {
    nombre: 'Tony Strak',
    codeName: 'Ironman',
    vivo: 'false',
    // edad: 40,
    edad: 40, // P alecerá el valor asiganado en la declaración del obje   to, pero si este no existe, entonces se asignará el que se usa en los argumentos del método del objeto.
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

const imprimePropiedades2 = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
        
    console.log({ nombre }); 
    console.log({ codeName });
    console.log({ vivo }); 
    console.log({ edad }); 
    console.log({ trajes });
}

imprimePropiedades2( tony2 );