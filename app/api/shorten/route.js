import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("quicklinks");
    const collection = db.collection("url");
    let visits = 0;
    let region = "";
    let countryname = "";

    const raw = "";

    const requestOptions = {
        method: "POST",
        body: raw,
        redirect: "follow"
    };

    await fetch(`${process.env.IP_API_LINK}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
        countryname = result.countryName;
        region = result.regionName;
    })
    .catch((error) => console.error(error));

    // Check if the short url exists
    const doc = await collection.findOne({shortUrl: body.shortUrl})
    if(doc) {
        return Response.json({ success: false, error: true, message: 'Short URL already exists' })
    }

    const docURL = await collection.findOne({url: body.url})

    if(docURL) {
        return Response.json({ success: false, error: true, message: 'URL already exists' })
    }

    const docvisits = await collection.find({email: body.email}).toArray();

    if(docvisits) {
        visits = docvisits.length + 1;
    }

    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl,
        email: body.email,
        name: body.name,
        visits: visits,
        region: region,
        country: countryname
    })

    return Response.json({ success: true, error: false, message: 'URL generated successfully' })
}