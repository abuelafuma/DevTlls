/**
 * Días de semana abrimos a las 11
 * pero los fins de semana abrimos a las 9 
 */

// Entra a un sitio web, para consultar si está abierto hoy ....

/* const dia = 0; // 0: domigo ..... 1: lunes......
const horaActual = 10; */
/* const dia = 1; // 0: domigo ..... 1: lunes......
const horaActual = 10;

let horaApertura;
let mensaje;  */// Está abierto, Está cerrado, hoy abrimos a las XX

/* if ( dia === 0 && dia === 6) {
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Día de semana');
    horaApertura = 11;
}

if ( horaActual >= horaApertura ) {
    mensaje = 'Está abierto'
} else {
    // mensaje = 'Está cerrado, hoy abrimos a las ' + horaApertura;
    mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`;
}
console.log({ horaApertura, mensaje }); */

// PODEMOS RESUMIRLO Y REDUCIRLO APLICANDO INCLUDES EN UN ARREGLO [0,6].includes(dia)

/* if ( [0,6].includes( dia ) ) { // METODO DE ARRAY QUE RECORRE EL ARREGLO Y SI ENCUENTRA LOS ELEMENTOS y dia es = a uno de esos valores DEVUELVE TRUE
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Día de semana');
    horaApertura = 11;
} */

/* if ( horaActual >= horaApertura ) {
    mensaje = 'Está abierto'
} else {
    // mensaje = 'Está cerrado, hoy abrimos a las ' + horaApertura;
    mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`;
}
console.log({ horaApertura, mensaje }); */


// PERO AúN PODEMOS REDUCIRLO MAS, USANDO EL OPERADOR TERNARIO
// OPERADOR TERANRIO:  variable = ( condición )? true : false;

const dia = 1; // 0: domigo ..... 1: lunes......
const horaActual = 10;

let horaApertura;
let mensaje; 

horaApertura = ( [0,6].includes( dia ) )? 9 : 11;

/* if ( horaActual >= horaApertura ) {
    mensaje = 'Está abierto'
} else {
    // mensaje = 'Está cerrado, hoy abrimos a las ' + horaApertura;
    mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`;
} */

// EJERCICIO:
// Aplicar el operador ternario para que arroje el mensaje segun la hora actual 

mensaje = ( horaActual >= horaApertura )? `Esta abiero` : `Está cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({ horaApertura, mensaje });