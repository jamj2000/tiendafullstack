// https://awstip.com/how-to-create-a-svelte-kit-and-mongodb-app-63de01c6ff71
import { MongoClient, ServerApiVersion  } from "mongodb"
import { DB_URI } from '$env/static/private';
const dbName = 'tienda'; // Database Name
const client = new MongoClient(DB_URI);

// async function main() {
//     try {
//         await client.connect();
//         console.log(`Conectado a ${DB_URI}`)
//     } catch (e) {
//         console.error(e);
//     }
//     finally {
//         await client.close();
//     }
// }

// await main().catch(console.error);

await client.connect()
console.log(`Conectado a BD ${DB_URI}/${dbName}`)
export default client.db(dbName) // return database
