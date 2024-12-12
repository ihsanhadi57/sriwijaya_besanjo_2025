"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';
import ShinyButton from '@/components/ui/shiny-button';

const Ticket = () => {
    return (
        <div id='ticket'>
            <div className="flex justify-center items-center md:mt-60 mt-10 ml-8">
                <div className='relative'>
                    <img src="/images/texts/ticket.png" alt="ticket" className='md:w-64 md:ml-4 w-44 ' />
                    <img src="/images/kepala maskot.png" alt="maskot" className='md:w-64 w-40 absolute -top-7 transform z-10' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center md:mt-12 mt-0 md:gap-10 gap-2'>
                <div>
                    <div className="card bg-borderGlare md:max-w-xs max-w-72 h-full shadow-xl mt-5 rounded-3xl ">
                        <div className="card-body md:p-7 md:py-3 py-3">
                            <h2 className="card-title text-white tracking-widest justify-center text-4xl font-hancoke">EKA</h2>
                            <div className="flex flex-col items-center justify-center  p-5 border-2 border-[#D7DECD] rounded-2xl ">
                                <img src="/images/texts/prakasa.png" alt="maskot" className='w-64' />
                                <p className='text-white text-3xl mt-3 font-hancoke'>Solo Ticket</p>
                                <div className="divider bg-[#D7DECD] h-0.5"></div>
                                <p className='text-white text-3xl mb-3 font-hancoke'>Rp 50.000,-</p>
                                <ShinyButton
                                    href="https://bit.ly/PrakasaParamaGettiketEka"
                                    className="bg-bgGlare w-full text-center font-black"
                                >
                                    Get Ticket
                                </ShinyButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-cardTri md:max-w-xs max-w-72 h-full shadow-xl mt-5 rounded-3xl">
                        <div className="card-body md:p-7 md:py-3 py-3">
                            <h2 className="card-title text-white tracking-widest justify-center text-4xl font-hancoke">TRI</h2>
                            <div className="flex flex-col items-center justify-center p-5 border-2 rounded-2xl border-[#D7DECD]">
                                <img src="/images/texts/prakasa.png" alt="maskot" className='w-60' />
                                <p className='text-white text-3xl mt-3 font-hancoke'>Bundle 3 Ticket</p>
                                <div className="divider bg-[#D7DECD] h-0.5"></div>
                                <p className='text-white text-3xl mb-3 font-hancoke'>Rp 135.000,-</p>
                                <ShinyButton
                                    href="https://bit.ly/PrakasaParamaGettiketTri"
                                    className="bg-bgGlare w-full text-center font-black transform transition-transform duration-200 hover:scale-105"
                                >
                                    Get Ticket
                                </ShinyButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-cardPanca  md:max-w-xs max-w-72 h-full shadow-xl mt-5 rounded-3xl">
                        <div className="card-body md:p-7 md:py-3 py-3">
                            <h2 className="card-title text-white tracking-widest justify-center text-4xl font-hancoke">PANCA</h2>
                            <div className="flex flex-col items-center justify-center p-5 border-2 rounded-2xl border-[#D7DECD]">
                                <img src="/images/texts/prakasa.png" alt="maskot" className='w-60' />
                                <p className='text-white text-3xl mt-3 font-hancoke'>Bundle 5 Ticket</p>
                                <div className="divider bg-[#D7DECD] h-0.5"></div>
                                <p className='text-white text-3xl mb-3 font-hancoke'>Rp 215.000,-</p>
                                <ShinyButton
                                    href="https://bit.ly/PrakasaParamaGettiketPanca"
                                    className="bg-bgGlare w-full text-center font-black"
                                >
                                    Get Ticket
                                </ShinyButton>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Ticket;