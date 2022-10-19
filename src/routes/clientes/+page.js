/** @type {import('./$types').PageLoad} */
export async function load (event) {
    const response = await fetch(event.url.origin + '/api/clientes');
    return response.json();
}
