import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const shorturl = (await params).shorturl

    const client = await clientPromise;
    const db = client.db("quicklinks");
    const collection = db.collection("url");

    // Check if the short url exists
    const doc = await collection.findOne({shortUrl: shorturl})

    if(doc) {
        redirect(`${doc.url}`)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return <div>My Post: {shorturl}</div>
  }