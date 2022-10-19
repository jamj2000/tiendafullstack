const URL = {
    articulos :  "/api/articulos/",
    clientes :   "/api/clientes/"
  };


/** @type {import('./$types').PageLoad} */
export async function load (event) {
    console.log(event)
    const response = await fetch('https://tiendafullstack.vercel.app/api/clientes');
    // const response = await fetch('http://localhost:5173/api/clientes');
    // const response = await fetch(event.url.href);

    return response.json();
}
