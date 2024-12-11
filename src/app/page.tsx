"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';
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

        {/* main content */}
        <div
          className="relative bg-cover sm:bg-cover bg-contain bg-repeat-y -mb-2 bg-bottom lg:bg-bottom bg-center sm:bg-top min-h-screen w-full"
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
        <ul className="menu bg-white min-h-full mt-14 w-64 md:w-80 font-poppins font-semibold p-4">
          {/* Tambahkan menu mobile lengkap */}
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Ticket</a></li>
          <li><a>Galery</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

    </div>
  );
}