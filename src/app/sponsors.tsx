"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';

const Sponsor = () => {
    return (
        <div>
            <div className="flex justify-center items-start">
                <img src="/images/texts/sponsors.png" alt="get to know" className='md:w-80 md:ml-3 w-48' />
            </div>
            <VelocityScroll default_velocity={3} className='mt-10'>
                <div className="flex gap-10">
                    <img src="/images/sponsors/inten.png" alt="INTEN" className="md:w-48 md:h-32 ml-5 md:ml-5 w-48 h-24" />
                    <img src="/images/sponsors/butuh-HT.png" alt="INTEN" className="md:w-32 md:h-32 md:ml-5 w-24 h-24" />
                </div>
            </VelocityScroll>

        </div>
    );
}

export default Sponsor;