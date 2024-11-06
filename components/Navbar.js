"use client";

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {

    const { data: session } = useSession()

    return (
        <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white'>
            <Link href={"/"}>
                <div className="logo font-bold text-2xl">
                    QuickLinks
                </div>
            </Link>
            <ul className='flex justify-center gap-4 items-center'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                {session && <>
                    <li><Link href={"/shorten"}>Shorten</Link></li>
                </>}
                <li><Link href={"/contact"}>Contact Us</Link></li>

                <li className='flex gap-3'>
                    {!session && <Link href={"/login"}><button className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1'>Login</button></Link>}

                    {session && <>

                        <Link href={"/shorten"}><button className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1'>Try Now</button></Link>
                        <Link href={"/github"} target="_blank"><button className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1'>GitHub</button></Link>
                        <button onClick={() => signOut()} className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1'>Log Out</button>

                    </>
                    }


                </li>
            </ul>
        </nav>
    )
}

export default Navbar