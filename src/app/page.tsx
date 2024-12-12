"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';
import Link from "next/link";
import Navbar from '@/app/navbar';
import Hero from '@/app/hero';
import Timer from "@/app/countdown";
import About from '@/app/about';
import Guest from '@/app/gs';
import Ticket from './ticket';
import GetKnow from "@/app/getknow";
import FaQ from "@/app/faq";
import Sponsor from "@/app/sponsors";
import Medpart from '@/app/medpart';
import Footer from "@/app/footer";


export default function Home() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        <Navbar />
        <Hero />
        <Timer />

        {/* divider gunung */}
        <img
          src="/images/gunung.png"
          alt="Mountain Divider"
          className='w-full -mt-16 sm:-mt-24 md:-mt-32 mt-2 lg:-mt-36 xl:-mt-40 z-10 object-cover'
        />
        {/* divider gunung */}

        <About />

        <div
          className="relative bg-cover sm:bg-cover bg-contain bg-repeat-y bg-bottom -my-2 bg-center min-h-screen w-full"
          style={{
            backgroundImage: "url('/images/bg.png')",
          }}
        >
          <Guest />
          <Ticket />
          <GetKnow />
          <FaQ />
          {/* <Sponsor /> */}
          {/* <Medpart /> */}
        </div>

        <Footer />

      </div>

      {/* Sidebar */}
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-white min-h-full w-64 md:w-80 font-poppins p-4 z-20">
          {/* Tambahkan menu mobile lengkap */}
          <li className='mt-14'>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Beranda
            </button>
          </li>
          <li>
            <Link
              href="#about"
              className=""
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#gs"
              className=""
            >
              Guest Star
            </Link>
          </li>
          <li>
            <Link
              href="#ticket"
              className=""
            >
              Get Ticket
            </Link>
          </li>
          <li>
            <Link
              href="#getknow"
              className=""
            >
              Gallery
            </Link>
          </li>
        </ul>
        <img
          src="/images/gunung.png"
          alt="Mountain Divider"
          className='min-h-full w-64 bottom-0 object-contain z-10'
        />
      </div>

    </div>
  );
}