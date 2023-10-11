import { Todo } from "../todos/models/todo.model";

// Utilizar propiedades de mi objeto para apuntar a Strings
const Filters = {
  All: "all",
  Completed: "Completed",
  Pending: "Pending",
};

// QUE INFORMACION QUIERO PRORCIONAR DE MANERA GLOBAL EN LA APLICACION VER LOS ESTADOS (STATES)
const state = {
  todos: [
    new Todo("Piedra del alma"),
    new Todo("Piedra del infinito"),
    new Todo("Piedra del tiempo"),
    new Todo("Piedra del poder"),
    new Todo("Piedra de la realidad"),
  ],
  filter: Filters.All, // Fiter que queremos aplicar
};

const initStore = () => {
  console.log(state);
  console.log("InitStore 🥑");
};

const loadStore = () => {
  throw new Error("Not implemented");
};

const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
    // return state.todos // Estamos regresando la referencia al objeto Todo.
    // Si usamos el operador Spread podremos regresar un nuevo arreglo con cada uno de los valores del objeto al que accedemos por referencia.
    return [...state.todos];

    case Filters.Completed:
        return state.todos.filter( todo => todo.done );

    case Filters.Pending:
        return state.todos.filter( todo => todo.done === false ); //-> !todo.done
    
    default:
        throw new Error (` option ${ filter } is not vàlid`);
  }
  
};

/**
 *
 * @param {String} description
 */
const addTdo = (description) => {
  //throw new Error("Not implemented");
  if ( !description ) throw new Error ('Description is required');

  state.todos.push( new Todo(description));
};

/**
 *
 * @param {Number} todoId
 */
const toggleTodo = ( todoId ) => {
  state.todos = state.todos.map( todo => {
    if( todo.id === todoId ) {
      todo.done = !todo.done;
    }
    return todo;
  });
};

/**
 *
 * @param {Number} todoId
 */
const deleteTodo = (todoId) => {
  state.todos = state.todos.filter( todo => todo.id !== todoId );
};

const deleteCompleted = () => {
  state.todos = state.todos.filter( todo => todo.done );
};

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => { // Podemos implementar un validador
  state.filter = newFilter;;
};

const getCurrentFilter = () => {
  // return state.filter.toString();
  return state.filter;
};

// Si no exportamos los modulos, seran privados en este archivo.

export default {
  addTdo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
