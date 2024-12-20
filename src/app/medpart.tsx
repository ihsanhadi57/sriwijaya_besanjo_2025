"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';


const Medpart = () => {
    return (
        <div className='mt-10 mb-10'>
            <div className="flex justify-center items-end">
                <img src="../images/texts/medpart-text.png" alt="media partners" className='md:w-80 md:ml-3 w-[248px]' />
            </div>
            <VelocityScroll default_velocity={2} className='mt-10'>
                <div className="flex gap-10">
                    <img src="/images/medparts/dt-peduli.png" alt="DT PEDULI" className="md:w-48 md:h-32 md:ml-5 ml-5 w-36 h-24"/>
                    <img src="/images/medparts/info-event-jambi.png" alt="INFO EVENT JAMBI" className="md:w-32 md:h-32 w-24 h-24"/>
                    <img src="/images/medparts/info-jambi.jpg" alt="INFO JAMBI" className="md:w-48 md:h-32 w-24 h-24"/>
                    <img src="/images/medparts/jambi-hits.jpg" alt="JAMBI HITS" className="md:w-32 md:h-32 w-24 h-24" />
                    <img src="/images//medparts/jambi-info.png" alt="JAMBI INFO" className="md:w-32 md:h-32 w-36 h-24" />
                    
                    <img src="/images/medparts/jambi-update.jpg" alt="JAMBI UPDATE" className="md:w-48 md:h-32 w-24 h-24"/>
                    <img src="/images/medparts/rpsj-jambi.jpg" alt="RPSJ JAMBI" className="md:w-32 md:h-32 w-24 h-24" />
                    <img src="/images//medparts/runas.jpg" alt="RUNAS" className="md:w-32 md:h-32 w-24 h-24" />
                    <img src="/images//medparts/ukm-kreasistik.jpg" alt="UKM KREASISTIK" className="md:w-32 md:h-32 w-24 h-24" />
                    <img src="/images//medparts/n3-entertainment.jpg" alt="N3 ENTERTAINMENT" className="md:w-32 md:h-32 w-24 h-24" />

                    <img src="/images//medparts/sma1.png" alt="SMA 1" className="md:w-32 md:h-32 w-24 h-24" />
                    <img src="/images//medparts/sma2.jpg" alt="SMA 2" className="md:w-32 md:h-32 w-24 h-24" />
                    <img src="/images//medparts/sma3.png" alt="SMA 3" className="md:w-32 md:h-32 w-24 h-24" />
                    <img src="/images//medparts/sma4.jpg" alt="SMA 4" className="md:w-32 md:h-32 w-24 h-24" />
                    <img src="/images//medparts/sma5.jpg" alt="SMA 5" className="md:w-32 md:h-32 w-24 h-24" />

                    <img src="/images//medparts/sma6.png" alt="SMA 6" className="md:w-32 md:h-32 w-24 h-24" />
                    <img src="/images//medparts/sma8.png" alt="SMA 8" className="md:w-32 md:h-32 w-24 h-24" />
                    <img src="/images//medparts/sma9.png" alt="SMA 9" className="md:w-32 md:h-32 w-24 h-24" />
                    <img src="/images//medparts/sma14.jpg" alt="SMA 14" className="md:w-32 md:h-32 w-24 h-24" />
                    <img src="/images//medparts/man2.jpeg" alt="MAN 2" className="md:w-32 md:h-32 w-24 h-24" />

                    <img src="/images//medparts/ghazi.png" alt="ROHIS GHAZI" className="md:w-32 md:h-32 w-24 h-24" />
                    <img src="/images//medparts/bes-nuril.png" alt="BES NURIL" className="md:w-32 md:h-32 w-24 h-24" />

                </div>
            </VelocityScroll>
        </div>
    );
}

export default Medpart;