/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S= Two of Spades (Picas)
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector('#btnDetener');
const btnNuevoJuego = document.querySelector('#btnNuevo');
// console.log(btnDetener);
const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");
const puntosHTML = document.querySelectorAll("small"); // pedimos las 2 etiquetas


// Esta función crea el mazo
const crearDeck = () => {
  // CREAMOS LAS CARTAS DEL 2 AL 10 DE CADA PALO
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  // CREAMOS LAS CARTAS ESPECIALES
  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  // console.log( deck );

  deck = _.shuffle(deck); // Libreria underscore con el método shuffle para barajar cartas de forma totalmente aleatoria.
  // console.log(deck);
  return deck;

  /* for( let i = 2; i <= 10; i++ ) {
        deck.push( i + 'C' );
    }

    console.log( deck );


    for( let i = 2; i <= 10; i++ ) {
        deck.push( i + 'C' );
    }

    console.log( deck );


    for( let i = 2; i <= 10; i++ ) {
        deck.push( i + 'C' );
    }

    console.log( deck );


    for( let i = 2; i <= 10; i++ ) {
        deck.push( i + 'C' );
    }

    console.log( deck ); */
};

// PEDIR CARTA
// Esta función me permite tomar una carta y esta debe desaparecer del arreglo de cartas.
const pedirCarta = () => {
  // const carta = (deck.length !== 0)? deck.pop() : 'No hay cartas en el deck'
  const carta = deck.pop();

  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  console.log(deck);
  console.log(carta);
  return carta;

  /* let min = Math.ceil(52),
        max = Math.floor(0),
        IndexOfRandomCard = Math.floor(Math.random() * ( max - min + 1 ) + min );
    //return IndexOfRandomCard;
 
    let randomCard = deck[IndexOfRandomCard] 
    deck.splice(IndexOfRandomCard)
    console.log(deck);
    console.log(randomCard);
    
    return randomCard
 */
};

crearDeck();
// deck = [];
// pedirCarta();

/* const valorCarta = ( carta ) => {

    // const valor = carta[0];
    const valor = carta.substring(0, carta.length - 1);
    // console.log({ valor });
    // let puntos = 0;
    // 2 = 2, 10 = 10, 3 = 3
    if( isNaN( valor ) ) {
        // console.log('No es un número');
        puntos = (valor === 'A') ? 11 : 10;
    } else {
        // console.log('Es un número');
        puntos = valor * 1; // Transformamos puntos( string ) ->  a valor númerico y de esta foram podemos operar matemáticamente.
    }

    // console.log( puntos + 5); // ESta concatenando strings
    console.log( puntos ); 
} */

// EJERCICIO REDUCIR y SIMPLIFICAR LA LA FUNCION valorCarta()

const valorCarta = (carta) => {
  // let puntos = 0;
  const valor = carta.substring(0, carta.length - 1);

  return (puntos = isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1);
};

// console.log( valorCarta('kD') );

// Podemos llamar la función perdirCarta como argumento de la función valorCarta, la cual nos da la puntuación de la carta que cogemos del deck.

/* const valor = valorCarta( pedirCarta() );
console.log( valor ); */

// COMPUTADORA

// TURNO COMPUTADORA

const turnoComputadora = (puntosMinimos) => {
  // AUTOMATIZAR L APETICION DE CARTAS
  do {
    const carta = pedirCarta();
    console.log(carta);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;

    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

  setTimeout(() => {

    if( puntosComputadora === puntosMinimos ) {
        alert( 'Nadie Gana :(' );
    } else if( puntosMinimos > 21 ) {
        alert( 'Computadora Gana ;()' );
    } else if( puntosComputadora > 21 ) {
        alert( ' Jugador Gana :)) ');
    } else {
        alert( 'Computadora Gana ;()' )
    }
  }, 10 );
};

// EVENTOS
// Callback es una funcion que se envia como argumento dentro de otra funcion
btnPedir.addEventListener("click", () => {
  // CallBack

  // console.log('click');
  const carta = pedirCarta();
  console.log(carta);

  puntosJugador = puntosJugador + valorCarta(carta);

  console.log(puntosJugador);
  // No es buena práctica llamar a las referencia HTML en la funcion
  // document.querySelector('small').innerText = puntosJugador;
  puntosHTML[0].innerText = puntosJugador;

  // TURNO JUGADOR
  // CREAR CARTAS EN HTML

  // <img class="carta" src="./assets/cartas/10C.png" alt="carta de poker">
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  // AÑADIMOS LA CLASE '.carta'
  imgCarta.classList.add("carta"); // 3H, JD, no se pone el selector e punto, porque con classList se entiene que nos referimos a una clase.

  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    console.warn("lo siento mucho, perdiste");
    btnPedir.disabled = true;
    btnDetener.disabled = true; // Cuando el jugador pasa de los 21 puntos 
    turnoComputadora(puntosJugador);
    
  } else if (puntosJugador === 21) {
    console.warn("21, genial !!");
    btnPedir.disabled = true;
    btnDetener.disabled = true;// Cuando el jugador llega a los 21 puntos
    turnoComputadora(puntosJugador);
    
  }
  

  //puntosJugador = puntosJugador + valorCarta(carta);
});

// DETENER TURNO ( PLANTARSE )

btnDetener.addEventListener ('click', ()  => {

    console.log('click');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
    
});

// NUEVO JUEGO ( RESETEAR TODO )

btnNuevoJuego.addEventListener ( 'click', () => {

  console.clear();

  deck = crearDeck()
  puntosJugador     = 0;
  puntosComputadora = 0;

puntosHTML[0].innerText = 0;
  puntosHTML[1].innerText = 0;

  divCartasComputadora.innerHTML = '';
  divCartasJugador.innerHTML = '';

  btnPedir.disabled = true;
  btnDetener.disabled = true;
});

/* const condicionVictoria = () => {
  const mensajeFinalPartida = (puntosJugador <= 21 && puntosJugador > puntosComputadora) ?
  alert('Jugador GANA ') :
  (puntosComputadora <= 21 && puntosComputadora > puntosJugador) ?
  alert('Computadora GANA') : alert('Nadie Gana, EMPATE');
  return mensajeFinalPartida;
} */
// condicionVictoria();
// TODO: Borrar
// console.log( 30 );
// turnoComputadora( 30 );

/**
 * Si la computadora empata a jugador
 * Si la computadora
 */

// console.log(pedirCarta());
/* Podriamos hacer un copiar pegar del ciclo for cambiando el deck.push por cada letra de las cartas, pero no seria eficiente porque repetiriamos 4 o 5 veces el mismo código. En vez de eso vamos a usar un ciclo for anidado en el que en el segundo for (for-of):  tipo será la variable de bucle y iteraremos sobre el arreglo tipos = ['C', 'D', 'H', 'S'] que hemos creado como array global al igual que el array vacio deck[]. 
 
 Incorporamos las cartas especiales a la baraja, con dos nuevos ciclos for-of anidados en los que vamos a iterar tanto los tipos como las cartas especiales de figuras. 
 */

// MANIPULACION DEL DOM - PARTE-1

// EJERCICIO PONER EL NOMBRE EN EL HEADER MEDIANTE EL DOM JS

// POR TAG name
// document.querySelector('header').innerHTML = 'Fernando';
// document.querySelector('header').innerText = 'Herrera';

// POR CLASS name
// document.querySelector('.titulo').innerText = 'Fernando';

/**
 * No se debe abusar de las llamadas a querySelector ya que JS salata aa HTML recorre todo  el documento hasta encontrar el elemento seleccionado.
 * Si tenemos que hacer esto muchas veces, es mejor crear una variable
 */

/* 
// MANIPULACION DEL DOM GENRAL

//const titulo = document.querySelector('.titulo');
undefined
//titulo.innerText = 'Hola Mundo'
'Hola Mundo'



// MANIPULACION DEL DOM - PARTE-2

// CREAR BOTONES MEDIANTE VARIABLE
//const divBotones = document.querySelector('#divbotones');
undefined
//divBotones
null
divBotones
//<div id=​"divBotones" class=​"col text-center">​…​</div>​
document.createElement('button');
//<button>​</button>​
const botonNuevo = document.createElement('button');
undefined
botonNuevo
//<button>​</button>​
divBotones.append(botonNuevo);
undefined


// CAMBIAR ASPECTO DEL BOTON IMPORTANDO CLASSES DE CSS O BOOTSTRAP
botonNuevo.innerText = 'Destruir el Mundo'
'Destruir el Mundo'
botonNuevo
//<button>​Destruir el Mundo​</button>​
botonNuevo.classList.add('btn');
undefined
botonNuevo.classList.add('btn-succes');
undefined
botonNuevo.classList.add('btn-success');
undefined

// VAMOS A CREAR UN INPUT AL FINAL DEL BODY
const input = document.createElement('input'); // Aqui solo está en memoria pero no se visualiza.
undefined
// Lo ponemos en el body
document.body.append( input );
undefined
// Le añadimos estilos añadiendo classes boostrap
input.classList.add('form-control');
undefined
input.placeholder = 'Hola Mundo';
'Hola Mundo' */
