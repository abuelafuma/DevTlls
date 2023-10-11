
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}


const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true

console.log( !regresaFalse() ); // true

console.warn('And') // true si todos los valores son verdaderos
console.log( true && true ) // true 
console.log( true && !false ) // true

console.log('=========='); // Separación
console.log( regresaFalse() && regresaTrue() ); // false
// Cuando llamamos este operador si la primera instrucción empezando por la izquierda ya devuelve falso ignora cualquier cosa que venga después. 

console.log( regresaTrue() && regresaFalse() ); // false

console.log('======== && ========');
regresaFalse() && regresaTrue(); 
console.log('4 condiciones', true && true && true && false);


console.warn('OR'); //true
console.log( true || false );
console.log( false || false );

console.log( regresaTrue() || regresaFalse() );
console.log( '4 condiciones', true || true || true || false );


console.warn( 'Asignaciones con operadores' )

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
const a1 = true && 'Hola Mundo' && 150; // 150
const a1_1 = false && 'Hola Mundo' && 150; // false
const a2 = 'Hola' && ' Mundo' && soyFalso && true; // false es porque soyFalso = false y ya no continua evaluando mas allà de esta condición por que es falsa. hola = true, mndo = true; soyFalso = false (true + true ) + false  
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; // Evalua todas las condicones de izquierda a derecha hasta recorrerla toda la sentencia ya que esta evaluando un OR y en caso de haver un true seria TRUE por que en un OR si todas las anteriores son FALSE solo es necesario un TRUE para ser TRUE.

const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; 

console.log({ a1, a2, a3, a4, a5  });

if ( true || true || true || false ) { // NO TENER MAS DE 3 CONDICIONES
    console.log( 'Hacer algo' );
} else {
    console.log( 'Hacer otra cosa' );
}


if ( regresaFalse() && regresaTrue() && (true || false || true ) ) { // NO DEBERIA TENER MAS DE 3 CONDICIONES, YA QUE SI NO SE HACE MUY ENREDADO DE ENTENDER
    console.log( 'Hacer algo' );
} else {
    console.log( 'Hacer otra cosa' );
}

