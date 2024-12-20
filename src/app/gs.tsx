"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';
import { GlareCard } from '@/components/ui/glare-card';

const Guest = () => {
    return (
        <div id='gs'>
            <div className="flex justify-center items-center md:mt-32">
                <img src="/images//texts/our guest star.png" alt="our guest star" className="w-[248px] md:w-96" />
            </div>
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:gap-10 md:mt-20 md:px-16 mt-10">
                <div className='bg-bgGlare flex items-center justify-center h-auto rounded-[64px]'>
                    <GlareCard className="flex justify-center items-center">
                        <img
                            src="/images/owen.png"
                            alt="Jerhemy Owen"
                            className='w-[250px] md:w-[350px] md:max-h-[420px] object-contain' />
                    </GlareCard>

                </div>
                <div className="flex flex-col gap-5 mt-5 md:mt-0">
                    <div className="card bg-transparent border-2 border-borderGlare lg:max-w-md max-w-72 h-full  shadow-xl">
                        <div className="card-body md:p-6 p-3">
                            <h2 className="card-title md:text-xl text-lg text-[#274B22] font-montserrat">JERHEMY OWEN</h2>
                            <p className='md:text-base text-sm font-poppins text-[#274B22]'>Youtube & TikTok Content Creator <br /> Environment Enthusiast </p>
                            <div className="card-actions justify-end"></div>
                        </div>
                    </div>

                    <div className="card bg-borderGlare lg:max-w-md max-w-72 h-full shadow-xl">
                        <div className="card-body md:p-6 p-3">
                            <h2 className="card-title text-white md:text-xl text-lg font-montserrat">SUMMARY</h2>
                            <p className="text-white md:text-sm text-xs text-justify font-poppins">
                                Jerhemy Owen, atau dikenal sebagai Owen, lahir 29 April 2002 merupakan seorang content
                                creator asal Indonesia. Dengan latar belakang jurusan Teknologi Lingkungan dan Energi Terbarukan
                                di Avans University of Applied Sciences, Breda, Belanda. Owen vokal memberikan edukasi tentang
                                lingkungan dan energi terbarukan melalui platform media sosial miliknya. Ia juga kerap membagikan
                                pengalamannya sebagai mahasiswa perantau asal Indonesia di Belanda.
                            </p>
                            <div className="card-actions justify-end"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Guest;