"use client";

import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {

  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {

    if(!session){
      router.push("/login");
    }
  
  }, [router, session])
  
  // useEffect(() => {
    
  //   if(session){
  //      toast.success("Welcome, " + session.user.name);
  //   }
    
  // }, [])
  

  return (
    <main className="bg-purple-100">
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
      <section className="grid grid-cols-2 h-[91vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the market
          </p>
          <p className="px-24 text-center">
            We are the most trusted URL shortener in the world. We understand your needs and hence we have created this URL shortener.
          </p>
          <div className='flex gap-3'>
            <Link href={"/shorten"}><button className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 text-white'>Try Now</button></Link>
            <Link href={"/github"} target="_blank"><button className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 text-white'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" src={"/vector.jpg"} fill={true} alt="an Image of a vector" />
        </div>
      </section>
    </main>
  );
}
