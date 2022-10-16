// https://awstip.com/how-to-create-a-svelte-kit-and-mongodb-app-63de01c6ff71
import db from "$lib/db"
const articulos = db.collection("articulos");

// import { RequestHandler } from '@sveltejs/kit';

export async function GET(event) {
  const docs = await articulos.find().toArray()
  return new Response(JSON.stringify(docs));
}

export async function POST( event) {
  const data = await event.request.text();
  const result = await articulos.insertOne(JSON.parse(data));
  return new Response(result.insertedId)
}

