import { ObjectId } from 'mongodb';
import db from "$lib/db"
const articulos = db.collection("articulos");


// 634fe082eaf6c20f65928ae2

export async function GET(event) {
  const docs = await articulos.findOne({_id: ObjectId(event.params.id)})
  return new Response(JSON.stringify(docs));
}

export async function PUT(event) {
    console.log(event.params.id)
    const data = await event.request.text();
    const result = await articulos.updateOne({_id: ObjectId(event.params.id)}, {$set: JSON.parse(data)});
    return new Response(result.modifiedCount)
}
  
export async function DELETE(event) {
    // const data = await event.request.text();
    const result = await articulos.deleteOne({_id:  ObjectId(event.params.id)});
    return new Response(result.deletedCount)  
}
  
   