// https://awstip.com/how-to-create-a-svelte-kit-and-mongodb-app-63de01c6ff71
import db from "$lib/server/db"

// import { RequestHandler } from '@sveltejs/kit';

export async function GET( event ) {
  const docs = await db.collection(event.params.coleccion)
                       .find().toArray()
  console.log(event)
  return new Response(JSON.stringify(docs));
}

export async function POST( event) {
  const data = await event.request.text();
  const result = await db.collection(event.params.coleccion)
                         .insertOne(JSON.parse(data));
  console.log(event)
  return new Response(result.insertedId)
}

