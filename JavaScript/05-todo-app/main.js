import './style.css'
import { App } from './src/todos/app'
import todoStore from './src/store/todo.store';



console.log('Hola Mundo');

todoStore.initStore(); // Llamamos al método initStore desde la importacion todoStore.

App('#app');