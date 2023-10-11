
// import html from './app.html' // Sin usar comandos vite da error
import todoStore from '../store/todo.store';
import html from './app.html?raw'; // USANDO comandos VITE como ? raw FUNCIONA
import { renderTodos } from './use-cases';
// import todoStore from '../store/todo.store';

const ElementIDs = {
    Todolist: '.todo-list',
}

/**
 * 
 * @param {String} elmentId 
 */
export const App = ( elmentId ) => { // Donde Renderizaremos la aplicacion

    // const todos = [];

    // Cada vez que quiera redibujar mis TODOS esta es la función que voy a llamar
    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter()); // Son los TODOS que voy a querer esplegar y como los obtenemos. Mandaremos el filtro seleccionado.
        // console.log(todos);
        renderTodos( ElementIDs.Todolist , todos);
    }

    // Cuando la funcion App() se llama
    (() => {

        const app = document.createElement('div');
        // app.innerHTML = '<h1>Hola Mundo</h1>'
        app.innerHTML = html; // Asignamos la variable del archivo importado para que lo renderize. -> {{ variable }}
        document.querySelector(elmentId).append( app );
        displayTodos();
    })();

}


