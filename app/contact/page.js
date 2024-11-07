"use client";

import React from 'react'
import localFont from 'next/font/local'
import Link from 'next/link';
import { useEffect } from 'react';

const poppins = localFont({
    src: "../fonts/Poppins-ExtraBold.ttf",
    variable: "--font-poppins",
    weight: "100 900",
});

const Contact = () => {

    useEffect(() => {
        document.title = "QuickLinks - Contact"
    }, [])

    return (
        <section className='max-w-lg mx-auto flex flex-col justify-center items-center gap-10 my-10'>
            <h1 className={`text-3xl ${poppins.className}`}>Connect with me on</h1>
            <div className='iconslist flex gap-2 justify-center items-center'>

                <Link href={"https://x.com/abhrajit_gupta"} target='_blank' className="button">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-6 h-6 text-gray-800 dark:text-white"
                    >
                        <path
                            clipRule="evenodd"
                            d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </Link>

                <Link href={"https://github.com/abhrajit2004"} target='_blank' className="button">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-6 h-6 text-gray-800 dark:text-white"
                    >
                        <path
                            clipRule="evenodd"
                            d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </Link>

                <Link href={"https://www.linkedin.com/in/abhrajit-gupta/"} target='_blank' className="button">

                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-6 h-6 text-gray-800 dark:text-white"
                    >
                        <path
                            clipRule="evenodd"
                            d="M20.447 20.452h-3.754v-5.568c0-1.327-.026-3.035-1.852-3.035-1.855 0-2.141 1.45-2.141 2.949v5.654H8.947V9.5h3.604v1.497h.05c.502-.953 1.729-1.954 3.56-1.954 3.805 0 4.507 2.504 4.507 5.762v5.647h-.001zM5.337 8.007c-1.207 0-2.188-.982-2.188-2.188s.982-2.188 2.188-2.188a2.188 2.188 0 1 1 0 4.376zM6.86 20.452H3.814V9.5h3.047v10.952zm17.14-19H0v24h24V1.452z"
                            fillRule="evenodd"
                        ></path>
                    </svg>


                </Link>

            </div>
        </section>
    )
}

export default Contact