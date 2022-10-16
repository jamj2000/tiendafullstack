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






// async function main() {
//     // Use connect method to connect to the server
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     // const collection = db.collection('articulos');
  
//     // the following code examples can be pasted here...
  
//     // return 'done.';
//   }
  
//   main()
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => client.close());

// export default client.db('tienda') // select database
