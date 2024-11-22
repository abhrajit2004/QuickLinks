import clientPromise from "@/lib/mongodb"

export async function DELETE(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("quicklinks");
    const collection = db.collection("url");

    let doc = await collection.deleteOne({ shortUrl: body.shortUrl });

    if (!doc) {
        return Response.json({ success: false, error: true, message: 'Short URL does not exist' })
    }

    return Response.json({ success: true, error: false, message: 'URL deleted successfully' })
}