"use client";
import React, { useState } from 'react'
import Link from 'next/link';

const Shorten = () => {

    const [url, seturl] = useState("");
    const [shortUrl, setshortUrl] = useState("");
    const [generated, setGenerated] = useState("");

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shortUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/shorten", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
                seturl("");
                setshortUrl("");
                console.log(result)
                alert(result.message);
            })
            .catch((error) => console.error(error));
    }


    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input onChange={(e) => seturl(e.target.value)} type="text" className='px-4 py-2 focus:outline-purple-600 rounded-md' value={url} placeholder="Enter your URL" />
                <input onChange={(e) => setshortUrl(e.target.value)} type="text" className='px-4 py-2 focus:outline-purple-600 rounded-md' value={shortUrl} placeholder="Enter your preferred short URL text" />
                <button onClick={generate} className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 text-white my-3'>Click to Shorten</button>
            </div>

            {generated && <>
                <span className='font-bold text-lg'>Your Link</span><code><Link target="_blank" href={generated}>{generated}</Link>
                </code>
            </>}
        </div>
    )
}

export default Shorten
