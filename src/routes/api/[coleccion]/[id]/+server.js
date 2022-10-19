import { ObjectId } from 'mongodb';
import db from "$lib/server/db"


export async function GET(event) {
  const docs = await db.collection(event.params.coleccion)
                       .findOne({_id: ObjectId(event.params.id)})
  console.log(event)
  return new Response(JSON.stringify(docs));
}

export async function PUT(event) {
    console.log(event.params.id)
    const data = await event.request.text();
    const result = await db.collection(event.params.coleccion)
                           .updateOne({_id: ObjectId(event.params.id)}, {$set: JSON.parse(data)});
    return new Response(result.modifiedCount)
}
  
export async function DELETE(event) {
    const result = await db.collection(event.params.coleccion)
                           .deleteOne({_id:  ObjectId(event.params.id)});
    console.log(event)
    return new Response(result.deletedCount)  
}
  
   