

const heroes = ['Batman', 'Superman', 'Wonder Woman', 'Aquaman'];

// FORMA SINTAXIS TRADICIONAL
console.warn('For tradicional');

for( let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
//console.log(i); // undefined


console.warn('For usando var')
for( var i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
console.log(i); // undefined

// FORMA DE SINTAXIS FOR IN 
console.warn('For in')


for( let i in heroes ){
    console.log(heroes[i]);
}

// FORMA SINTAXIS FOR OF
console.warn('For of')

for( let i of heroes ){
    console.log(i);
}
// Se pone el nombre del arreglo en singular como i
for( let heroe of heroes ){
    console.log(heroe);// heroe = i
}


// CICLOS FOR ANIDADOS FOR IN A NOMENCLATURA ES i o j 

for( let i in heroes ){
    console.log(heroes[i] );
    for( let j  in heroes ){
        console.log(heroes[j]);
    }
}

