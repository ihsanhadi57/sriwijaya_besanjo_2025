"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';


const Navbar = () => {
    return (
        <div className="navbar bg-navbar w-full z-30 flex items-center justify-between px-4 py-2">
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
            <div className="flex items-center space-x-4 ml-16">
                <img src="/images/logo himaja 2.png" alt="Logo Himaja" className="h-8 w-8 md:h-10 md:w-10" />
                <img src="/images/aruna.png" alt="Logo Himaja" className="h-8 w-8 md:h-10 md:w-10" />
                <img src="/images/Logo SB 3.png" alt="Logo SB" className="h-8 w-8 md:h-10 md:w-10" />
                <img src="/images/Salinan LOGO PRAKASA PARAMA FINAL 2.png" alt="Logo prakasa parama" className="h-8 w-8 md:h-10 md:w-10" />
            </div>

            {/* Menu Navigasi Desktop */}
            <div className="hidden lg:block">
                <ul className="menu menu-horizontal text-white space-x-0 mr-16 font-poppins">
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
export default Navbar;