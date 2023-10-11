let a = 10;
if ( a >= 10 ) { // undefines, null, una asignación
    console.log('A es mayor a 10');
} else {
    console.log('A es menor a 10');
}

console.log('Fin de programa');

const hoy = new Date(); // {}

console.log( hoy );

let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes .....

console.log({ dia });

if ( dia === '3' ) {
    console.log('domingo');
} else {
    console.log('No es domingo');
}


if ( dia === '0' ) {
    console.log('domingo');
} else {
    //console.log('No es domingo');
    if ( dia === 1) {
        console.log('lunes');
    } else {
        console.log('No es lunes ni domingo');
    }
}

if (dia  === 0) {
    console.log('Domingo');

} else if( dia === 1) {
    console.log('Lunes');
} else if( dia === 2){
    console.log('Martes');
} else {
    console.log('No es ni Domingo , ni lunes, ni martes');
}

// EJERCICIO
// SIN USAR If Else o Switch, únicamente objetos
dia = 3; // 0: domingo, 1: lunes .....
// RESOLUCION CON OBJETO

const diasLetras = {
   0: 'domingo',
   1: 'lunes',
   2: 'martes',
   3: 'miercoles',
   4: 'jueves',
   5: 'viernes',
   6: 'sabado',
}

// dias de la semana
console.log( diasLetras[dia] || 'Dia no definido');


const diasLetras1 = {
    0: ()=> 'domingo',
    1: ()=> 'lunes',
    2: ()=> 'martes',
    3: ()=> 'miercoles',
    4: ()=> 'jueves',
    5: ()=> 'viernes',
    6: ()=> 'sabado',
 }
 
 // dias de la semana
 console.log( diasLetras1[dia] || 'Dia no definido');
 

const diasLetras2 = ['domingo','lunes','martes', 'miercoles', 'jueves', 'viernes','sabado',
]
 
 // dias de la semana
 console.log( diasLetras2[dia] );