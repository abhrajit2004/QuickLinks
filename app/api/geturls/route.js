import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("quicklinks");
    const collection = db.collection("url");
    
    const result = await collection.find({email: body.email}).toArray();

    return Response.json({ message: 'Hello World', result: result })
}