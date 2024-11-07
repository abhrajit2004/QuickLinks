"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shorten = () => {

    const [url, seturl] = useState("");
    const [shortUrl, setshortUrl] = useState("");
    const [generated, setGenerated] = useState("");
    const [urlList, setUrlList] = useState([]);
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        document.title = "QuickLinks - Shorten URL"
    }, [])


    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shortUrl,
            "email": session.user.email,
            "name": session.user.name
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
                if (result.success) {
                    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
                    toast.success(result.message);
                }
                else{
                    toast.warning(result.message);
                }
                seturl("");
                setshortUrl("");
            })
            .catch((error) => console.error(error));
    }

    const getURLs = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": session.user.email
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/geturls", requestOptions)
            .then((response) => response.json())
            .then((result) =>
                setUrlList(result.result)
            )
            .catch((error) => console.error(error));
    }


    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
             <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input onChange={(e) => seturl(e.target.value)} type="text" className='px-4 py-2 focus:outline-purple-600 rounded-md' value={url} placeholder="Enter your URL" />
                <input onChange={(e) => setshortUrl(e.target.value)} type="text" className='px-4 py-2 focus:outline-purple-600 rounded-md' value={shortUrl} placeholder="Enter your preferred short URL text" />
                <button onClick={generate} className='bg-purple-500 shadow-lg hover:bg-purple-700 transition p-3 rounded-lg font-bold py-1 text-white my-3 disabled:bg-violet-300' disabled={url.length < 5 || shortUrl.length === 0}>Click to Shorten</button>
                <button onClick={getURLs} className='bg-purple-500 shadow-lg hover:bg-purple-700 transition p-3 rounded-lg font-bold py-1 text-white'>See Your Previously Generated Links</button>
            </div>

            {!session && <div className='text-center'>Please login to generate short URLs and get your previous URLs</div>}

            {generated.length > 0 && <>
                <span className='font-bold text-lg'>Your Link</span><code><Link target="_blank" href={generated}>{generated}</Link>
                </code>
            </>}

            {urlList.length > 0 && urlList.map((url, index) => {
                return (
                    <div key={index} className='flex flex-col gap-2'>
                        <span className='font-bold text-lg'>Your Link</span><code><Link target="_blank" href={`${url.url}`}>{`${process.env.NEXT_PUBLIC_HOST}/${url.shortUrl}`}</Link>
                        </code>
                    </div>
                )
            })}
        </div>
    )
}

export default Shorten
