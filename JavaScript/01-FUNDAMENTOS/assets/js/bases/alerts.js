// console.log(miNombre);

/**
 * PROMPT, CONFIRM, ALERT
 * 
 * Son instrucciones bloqueantes hasta que no reciba una interacción del usuario.
 * SON METODOS DEL OBJETO WINDOW (objeto padre root)
 */

// alert('Hola mundo');

// let nombre = prompt('Cual es tu nombre', 'sin nombre');

// console.log('****' + nombre + '****'); // '' Cadena Vacia 

// confirm('Está seguro de borrar esto');
// const selection = confirm('Está seguro de borrar esto');
// console.log(selection);

/**
 * Al ejecutar el archivo en nod epor terminal aparece este error: ReferenceError: confirm is not defined
    at Object.<anonymous> (/Users/Arlet/Desktop/Cursos Fernando Herrera DevTalles/JavaScript/01-FUNDAMENTOS/assets/js/alerts.js:16:1)
 * Esto es debdio a que al ejecutarlo en terminal no hay acceso al objeto window por lo que no puede ejecutar el confirm. Pero el código en el navegador, SI QUE FUNCIONARIA

 */
/*
 * OBJETO GLOBAL
 *
 */

console.log( global );
/**
 * Pero al lanzar la instrucción anterior en el navegador, aparece este ERROR: ncaught ReferenceError: global is not defined
    at alerts.js:27:14. 
 * Esto es debido a que en el objeto window no existe global. 
 * Pero al ejecutarlo en la terminal, El Objeto GLOBAL SI EXISTE en  NODE JS. 
 * Trae información parecida al objeto window.
 * 
 * COMO SABER QUE USAR EN NAVEGADOR O EN NODE ?
 */
