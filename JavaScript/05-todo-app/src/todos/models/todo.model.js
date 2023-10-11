import { v4 as uuid } from 'uuid'; // Importacion de la libreria npm uuid

export class Todo {

    /**
     * 
     * @param {String} description 
     */
    constructor( description ) {
        this.id = uuid(); // Lo puede crear el backend
        this.description = description; // Podriamos añadir una validación en caso de no ser valida que lanze un error
        this.done = false; // Esta la tarea finalizada ? Terminado = true, Pendiente = false
        this.creratedAt = new Date();
        
    }


}