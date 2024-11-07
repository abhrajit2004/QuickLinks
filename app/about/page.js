"use client";

import React from 'react'
import localFont from "next/font/local";
import { useEffect } from 'react';

const poppins = localFont({
    src: "../fonts/Poppins-ExtraBold.ttf",
    variable: "--font-poppins",
    weight: "100 900",
});


const About = () => {

    useEffect(() => {
      document.title = "QuickLinks - About"
    }, [])
    

    return (
        <section className='max-w-lg mx-auto my-10 flex flex-col gap-7 justify-center items-center'>
            {/* Create an about page for me in nextjs using tailwindcss */}
            <h1 className={`${poppins.className} text-3xl`}>About QuickLinks</h1>
            <p className='text-center'>Welcome to QuickLinks, your one-stop solution for simplified and effective URL management. In today’s fast-paced digital world, lengthy URLs can clutter your communications and negatively impact user experience. Our mission at QuickLinks is to transform how you share, track, and manage links, offering a reliable, user-friendly URL shortener that simplifies your online interactions. Whether you’re a business professional, marketer, or everyday internet user, QuickLinks provides an efficient way to make your links memorable and manageable.</p>
        </section>
    )
}

export default About
