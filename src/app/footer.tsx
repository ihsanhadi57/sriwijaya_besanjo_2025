import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="shadow-2xl bottom-0 left-0 font-poppins">
            <div className="shadow-md pt-10 md:pt-14 lg:pt-2 bg-gradient-to-t from-[#314714] to-[#486B1B] dark:from-[#1AB5E4]/30 dark:to-[#E5AFE5]/[35%]">
                <div className="relative flex flex-col w-full gap-6 px-8 py-6 pb-8 mx-auto sm:w-[95%] md:pb-12 lg:px-0">
                    <div className="h-full">
                    </div>
                    <div className="flex flex-col items-center gap-10 text-sm lg:flex-row md:gap-20">
                        <div className="relative">
                            <img
                                src="/././images/logos/logo-prakasa-invert.png"
                                alt="Logo sriwijayabesanjo"
                                width={310}
                                height={260}
                                className="-mt-20 -mb-20 w-[275px] sm:w-[410px]"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-[#52525B] w-full z-10">
                            <div className="flex flex-col gap-3 md:gap-6 md:w-1/2 lg:w-1/4">
                                <h4 className="text-lg font-bold text-white mt-12 uppercase">
                                    Alamat
                                </h4>
                                <h5 className="text-white font-semibold">Kampus Utama</h5>
                                <p className="w-full leading-relaxed text-justify text-white lg:w-[90%]">
                                    Jl. Raya Palembang-Prabumulih KM. 32, Indralaya Indah,
                                    Kec. Indralaya, Kabupaten Ogan Ilir, Sumatera Selatan (30862)
                                </p>

                                <h5 className="text-white font-bold">Sekretariat</h5>
                                <p className="leading-relaxed text-white text-justify lg:w-[90%]">
                                    Jalan Tamyiz, Kec. Indralaya Utara, Kabupaten Ogan Ilir
                                    (30862)
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-6">
                                <h4 className="text-lg font-bold text-white uppercase">
                                    Kontak
                                </h4>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-1">
                                        <Image
                                            src="/././images/socials/icon-whatsapp.svg"
                                            alt="icon whatsapp"
                                            width={24}
                                            height={24}
                                        />
                                        <p className="font-bold text-transparent bg-[#fff] bg-clip-text">
                                            Whatsapp
                                        </p>
                                    </div>
                                    <ul className="flex flex-col gap-1 text-white">
                                        <li>
                                            <Link
                                                href="https://wa.me/6289529733304"
                                                className="duration-200 hover:text-green-400"
                                            >
                                                +62 895-2973-3304 (Qayla Gina)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="https://wa.me/6287793855926"
                                                className="duration-200 hover:text-green-400"
                                            >
                                                +62 877-9385-5926 (Florenzi Natasya)
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="flex items-center gap-1 mt-2">
                                        <Image
                                            src="/././images/socials/icon-email.svg"
                                            alt="icon email"
                                            width="24"
                                            height="24"
                                            className="logo-email"
                                        />
                                        <p className="font-bold text-transparent bg-[#fff] bg-clip-text">
                                            Email
                                        </p>
                                    </div>
                                    <ul>
                                        <li className="text-white duration-200 hover:text-green-400">
                                            <a href="mailto:sriwijayabesanjo.unsri23@gmail.com">
                                                sriwijayabesanjo@gmail.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-6 lg:ml-6">
                                <h4 className="text-lg font-bold text-white uppercase">
                                    Navigasi
                                </h4>
                                <ul className="flex flex-col gap-3 md:gap-6 text-white">
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
                                            className="duration-200 hover:text-green-400"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#gs"
                                            className="duration-200 hover:text-green-400"
                                        >
                                            Guest Star
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#ticket"
                                            className="duration-200 hover:text-green-400"
                                        >
                                            Get Ticket
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#getknow"
                                            className="duration-200 hover:text-green-400"
                                        >
                                            Gallery
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-6 lg:ml-6">
                                <h4 className="text-lg font-bold text-white uppercase">
                                    Pra-Event
                                </h4>
                                <ul className="flex flex-col gap-3 md:gap-6 text-white">
                                    <li>
                                        <button
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        >
                                            Konser Amal
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        >
                                            Tournament Mobile Legends

                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        >
                                            Vocal Solo Online
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="border-t border-t-[#CDCDCD] mt-6" />
                    <div className="z-10 flex justify-between w-full mt-6">
                        <p className="text-lg font-bold text-transparent uppercase bg-gradient-to-br from-[#fff] to-green-200 bg-clip-text w-fit">
                            © HIMAJA UNSRI
                        </p>
                        <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                            <Link href="https://instagram.com/sriwijayabesanjo">
                                <Image
                                    src={"/././images/socials/icon-instagram.svg"}
                                    alt="icon instagram"
                                    width="24"
                                    height="24"
                                    className="logo-instagram"
                                />
                            </Link>
                            <Link href="https://www.tiktok.com/@sriwijayabesanjo">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 36 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M28.35 7.095C26.8123 5.33894 25.9648 3.08415 25.965 0.75H19.0125V28.65C18.96 30.1602 18.3229 31.5909 17.2357 32.6404C16.1484 33.6898 14.6961 34.2759 13.185 34.275C9.98999 34.275 7.33499 31.665 7.33499 28.425C7.33499 24.555 11.07 21.6525 14.9175 22.845V15.735C7.15499 14.7 0.359985 20.73 0.359985 28.425C0.359985 35.9175 6.56999 41.25 13.1625 41.25C20.2275 41.25 25.965 35.5125 25.965 28.425V14.2725C28.7842 16.2972 32.1691 17.3835 35.64 17.3775V10.425C35.64 10.425 31.41 10.6275 28.35 7.095Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                            <Link href="https://www.linkedin.com/company/himajaunsri">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="#FFF"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5.5h-3v-10h3v1.5c.878-1.314 2.356-2.5 4-2.5 2.485 0 4.5 2.015 4.5 4.5v6.5z" />
                                </svg>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
