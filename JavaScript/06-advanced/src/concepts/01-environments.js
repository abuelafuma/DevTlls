/**
 * 
 * @param { HTMLDivElement } element 
 */
export const environmentsComponent = ( element ) => {
    // Variables de entorno en Node:
    // console.log( process.env ); // este serai el metodo sin vite para las variables de entorno

    // Vite la sintaxis es:
    console.log( import.meta.env.VITE_API_KEY );
    console.log( import.meta.env.BASE_URL );

    const html = `
        Dev: ${ import.meta.env.DEV } <br/>>  
    `;
    element.innerHTML = html;

}  