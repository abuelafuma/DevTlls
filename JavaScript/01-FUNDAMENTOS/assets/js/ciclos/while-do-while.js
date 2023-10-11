
// CICLO WHILE
console.warn('While')
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

/* while( i < carros.length ) {
    console.log(carros[i] );
    // i = i + 1;
    i ++;
} */

// undefined
// null
// false
console.log(carros[10]); // No existe este elemento en el arreglo

while( carros[i] ) {
    if ( i === 1) {
        // break;
        i++; // Si no incrementamos la varaible entrará en un ciclo infinito porque i siempre valdrá 1 
        continue; 
    }
    console.log(carros[i] );
    i++;
}


// CICLO DO WHILE
console.warn('Do While');
let j = 0;

do {
    console.log(carros[j]);
    j++;
} while( carros[j] );