"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';
import Link from "next/link";



const Navbar = () => {
    return (
        <div className="navbar sticky top-0 bg-navbar w-full z-30 items-center justify-between px-4 py-2">
            {/* Tombol Hamburger untuk Mobile */}
            <div className="lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current text-white">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
            </div>


            {/* Container Logo */}
            <div className="flex items-center space-x-2 ml-16">
                <img src="/images/logos/logo-himaja.png" alt="Logo Himaja" className="h-8 w-8 md:h-10 md:w-10" />
                <img src="/images/logos/logo-aruna.png" alt="Logo Aruna" className="h-12 w-12 md:h-10 md:w-10" />
                <img src="/images/logos/logo-SB.png" alt="Logo SB" className="h-8 w-8 md:h-10 md:w-10" />
                <img src="/images/logos/logo-prakasa.png" alt="Logo Prakasa" className="h-8 w-8 md:h-10 md:w-10" />
            </div>

            {/* Menu Navigasi Desktop */}
            <div className="hidden lg:block">
                <ul className="menu menu-horizontal text-white space-x-0 mr-16 font-poppins">
                    <li>
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
                                            href="#getknow"
                                            className=""
                                        >
                                            Gallery
                                        </Link>
                                    </li>
                </ul>
            </div>
        </div>

    );
}
export default Navbar;