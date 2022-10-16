import { ObjectId } from 'mongodb';
import db from "$lib/db"
const articulos = db.collection("articulos");


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
  
   