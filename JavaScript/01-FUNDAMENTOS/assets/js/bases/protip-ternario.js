/* const elMayor = (a, b) => {
    return ( a > b )? a : b;
}      
*/

// const elMayor = (a, b) => ( a > b)? a : b;
const elMayor = (a, b) => a > b? a : b;
    
    


console.log( elMayor( 20, 15 ) );

const tieneMembresia = ( miembro ) => ( miembro )? '2 Dólares' : '10 Dólares';

console.log(tieneMembresia(false) );

const amigo = false //true;
const amigoArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki', // si amigo es true envia a 'Thor' si amigo es false; envia a 'Loki'

    /* PODEMOS COLOCAR CUALQUIER INSTRUCCION O SENTENCIA AQUÍ como:... */ 

    // Defininir y declarar un Función flecha:
    (() => 'Nick Fury')(), // FUNCIÓN ANÓNIMA AUTOINVOCADA
    // La Llamada a una función:
    elMayor(10, 15),
];

console.log(amigoArr);


/* CONDICONAL TERNARIO CON MAS DE UNA CONDICION */

// const nota = 65; // A+ A B+
// const nota = 100; // A+ A B+
const nota = 82.5; // A+ A B+
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';
              
console.log({ nota, grado });