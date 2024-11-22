import clientPromise from "@/lib/mongodb"

export async function PUT(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("quicklinks");
    const collection = db.collection("url");


    let doc = await collection.findOne({ url: body.url });

    if(!doc){
        return Response.json({ success: false, error: true, message: "Link not found" })
    }

    const newDoc = {};

    if(body.url){
        newDoc.url = body.url;
    }

    if(body.shortUrl){
        newDoc.shortUrl = body.shortUrl;
    }

    doc = await collection.findOneAndUpdate({ url: body.url }, { $set: newDoc });


    return Response.json({ success: true, error: false, message: 'URL updated successfully' })
}