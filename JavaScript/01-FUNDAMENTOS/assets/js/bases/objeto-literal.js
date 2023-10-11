

let personaje = {
    nombre: 'Tony Strak',
    codeName: 'Ironman',
    vivo: 'false',
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};
console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);

console.log('Edad:', personaje.edad);

console.log('Coors:', personaje.coords );
console.log('Lat:', personaje.coords.lat );

/**
 * EJERCICIO ACCEDER I MOSTRAR EL NUMERO DE TRAJES DE IRONMAN
 */

console.log('Num. Trajes:', personaje.trajes.length);
console.log('Último traje:', personaje.trajes[personaje.trajes.length - 1] );

/* Asignamos una varaibles un variable del objeto */
const x = 'vivo'; 
console.log('Vivo', personaje[x] );

console.log('Útima película:', personaje['ultima-pelicula']);


// MAS DETALLES METODOS DE OBJETOS

/**
 * BORRAR UN PROPIEDAD INCORRECTAMENTE
 * ESTO NO FUNCIONA, lo único que hace es asignar el valor de null a la propiedad pero no la borra
 */
// personaje.edad = null;
// console.log(personaje);

/**
 * METODO PARA BORRAR UNA PROPIEDAD  
 *
*/

delete personaje.edad;
console.log(personaje);

/**
 * TRABAJAR UN OBJETO COMO UN ARRGLO
 */
const entriesPares = Object.entries( personaje );
console.log(entriesPares);

/**
 * CREAR PROPIEADES SEN EL MOMENTO DE EJECUCION
 * 
 */

personaje.casado = true;

const entriesPares1 = Object.entries( personaje );
console.log(entriesPares1);
console.log(personaje);

/* Hemos añadido la propiedad casasado al objeto pepersonaje */

/**
 * 
 * BLOQUEO DE PROPIEDADES O MODIFICACIONES
 */

/* METODO freeze: Impide modificar propiedades y caracteriticas del objeto */ 
// personaje = true;

Object.freeze( personaje );

personaje.dinero = 10000000000;
console.log({ personaje });

personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica'
console.log({ personaje });

const propiedades = Object.getOwnPropertyNames( personaje );
console.log({ propiedades });

// const propiedades = Object.getOwnPropertyNames( personaje );
// console.log( propiedades );

const valores = Object.values( personaje );
console.log({ propiedades, valores });
