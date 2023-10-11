/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

/* PATRONES DE DISEÑO */

// PATRON MODULO

// FUNCIONES ANONIMAS AUTOINVOCADAS

//MISMA FUNCION, DIFERENTE SINTAXIS

/* ( function () {

})() */

// PATRÓN DE DISEÑO: PATRON MODULO
(() => {
  // Se crea un nuevo scope aquí, el cual no tiene una referéncia por nombre, por ello no va a ser posible llamar el objeto directamente.

  "use strict"; // Se estricto en la evaluación del código:

  /*
    personajes = [ 'Ana', 'Mercy', 'Mei' ]; // -> personajes is not defined.
    console.log(personajes);
    */

  const personajes = ["Ana", "Mercy", "Mei"];
  console.log(personajes);
})();

// El programa va a ver que he creado esta función y immediatamente la estoy llamando/ejecutando ( patrón módulo)
/**
 * Si llamo la variable personajes......
 *   VM75:1 Uncaught ReferenceError: personajes is not defined
 *   at <anonymous>:1:1
 * Eso pasa por que esta ubicada en algun lugar de la memoria sin        *referencia a un identificador por nombre.
 */




// ESTA ES LA FORMA DE OCULTAR NUESTRO CODIGO A APPS O USUARIOS
/**
 * Ahora no se puede acceder a los elementos del objeto window desde fuera.7
 * 
 * 
 */
const miModulo = (() => {
  'use strict' 

  
  let deck         = [];
  const tipos      = ["C", "D", "H", "S"],
        especiales = ["A", "J", "Q", "K"];

  /* let puntosJugador     = 0,
      puntosComputadora = 0; */
  // let puntosJugadores = [0,0];   // 2 jugadores     
  let puntosJugadores = []; // 2 jugadores     

  // Referencias del HTML
  const btnPedir   = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        btnNuevo   = document.querySelector("#btnNuevo");

  const divCartasJugadores = document.querySelectorAll(".divCartas"),
        puntosHTML         = document.querySelectorAll("small");
        // divCartasComputadora = document.querySelector (".divCartas"),


  // Esta función inicializa el juego        
  const inicializarJuego = (numJugadores = 2) =>  {
    deck = crearDeck();

    puntosJugadores = [];
    for( let i = 0; i < numJugadores; i++ ) {
        puntosJugadores.push(0);
    }

    puntosHTML.forEach( elem => elem.innerText = 0 );
    divCartasJugadores.forEach( elem => elem.innerHTML = '' );

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

  }
  

  // Esta función crea un nuevo deck
  const crearDeck = () => {

    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }

    for (let tipo of tipos) {
      for (let esp of especiales) {
        deck.push(esp + tipo);
      }
    }
    
    return _.shuffle(deck);
  };

  
  // Esta función me permite tomar una carta
  // var pedirCarta = () => { // Forma insegura hackeable
  const pedirCarta = () => {
    // Forma SEGURA  NO hackeable ( si usamos const nunca va a poder ser modificada)

    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    return deck.pop();
  };

  // Esta parte sirve para obtener el valor de la carta separando la parte numerica de la parte de letra, valores numericos del 1 al 9, valores d valores de las carts de figura ( J,Q,K,A) A = 11, el resto 10. pedirCarta();
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ?
                (valor === "A") ? 11 : 10
                : valor * 1;
  };


  // Turno: 0 = primer jugador y último será la computadora
  const acumularPuntos = ( carta, turno ) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno]; // Puntos acumulados
  }


  const crearCarta = ( carta, turno ) => {

    const imgCarta = document.createElement("img");
      imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
      imgCarta.classList.add("carta");
      divCartasJugadores[turno].append( imgCarta );
      /* divCartasComputadora.append(imgCarta); */

  }

  // THE WINNER IS......
  const determinarGanador = () => {

    const [ puntosMinimos, puntosComputadora ] = puntosJugadores; // DESESTRUCTURAMOS EL ARREGLO

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert("Nadie gana :(");
        } else if (puntosMinimos > 21) {
            alert("Computadora gana");
        } else if (puntosComputadora > 21) {
            alert("Jugador Gana");
        } else {
            alert("Computadora Gana");
        }
      }, 100);

  }


  // turno de la computadora
  const turnoComputadora = (puntosMinimos) => {

    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();
      puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1 ); // para obiar el 0

      /* puntosComputadora = puntosComputadora + valorCarta(carta);
      puntosHTML[1].innerText = puntosComputadora; */

      // <img class="carta" src="assets/cartas/2C.png">

      crearCarta( carta, puntosJugadores.length - 1 );

    //   const imgCarta = document.createElement("img");
    //   imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    //   imgCarta.classList.add("carta");
    //   divCartasComputadora.append(imgCarta);

    //   if (puntosMinimos > 21) { // Esta evaluada debajo en el while
    //     break;
    //   }

    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
    // setTimeout(() => {
    //   if (puntosComputadora === puntosMinimos) {
    //       alert("Nadie gana :(");
    //   } else if (puntosMinimos > 21) {
    //       alert("Computadora gana");
    //   } else if (puntosComputadora > 21) {
    //       alert("Jugador Gana");
    //   } else {
    //       alert("Computadora Gana");
    //   }
    // }, 100);
  };

  // Eventos
  btnPedir.addEventListener("click", () => {

    const carta = pedirCarta();
    const puntosJugador = acumularPuntos( carta, 0 ); // jugador 1
    /* puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador; */

    // <img class="carta" src="assets/cartas/2C.png">

    crearCarta( carta, 0 ); // Se encarga de colocarlo en el lugar correcto
    // const imgCarta = document.createElement("img");
    // imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    // imgCarta.classList.add("carta");
    // divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
      console.warn("Lo siento mucho, perdiste");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("21, genial!");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugadores[0]);
  });

//   btnNuevo.addEventListener("click", () => {
      
//     inicializarJuego( );

//     // console.clear();
//     /* deck = [];
//     deck = crearDeck(); */

//     /* puntosJugador = 0;
//     puntosComputadora = 0; */

//     // puntosHTML[0].innerText = 0;
//     // puntosHTML[1].innerText = 0; 

//     // divCartasComputadora.innerHTML = "";
//     // divCartasJugador.innerHTML = "";

//     // btnPedir.disabled = false;
//     // btnDetener.disabled = false;
//   });

    // return 'Hola Mundo'; // Siempre hay que regresar algo al final

    // ESTO ES LO QUE VA A SER PUBLICO , NADA MAS 
    return {

        nuevoJuego: inicializarJuego

    };
    // Unicamente será visible fuera del módulo, lo que retornemos en el return.

})();
