const URL = {
    articulos :  "/api/articulos/",
    clientes :   "/api/clientes/"
  };


/** @type {import('./$types').PageLoad} */
export async function load (event) {
    const response = await fetch('http://localhost:5173/api/articulos');
    return response.json();
    // const data = await response.json();
    // return data;
}
