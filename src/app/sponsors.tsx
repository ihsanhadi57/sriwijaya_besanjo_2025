"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';

const Sponsor = () => {
    return (
        <div>
            <div className="flex justify-start ml-8 items-start md:ml-32 ml-14">
                <img src="/images/sponsorship.png" alt="get to know" className='md:w-80 md:ml-3 w-48' />
            </div>
            <VelocityScroll default_velocity={2} className='mt-10'>
                <div className="flex gap-10">
                    <img src="/images/Logo-dtpeduli.png" alt="Image 1" className="md:w-48 md:h-32 w-36 ml-5 md:ml-5 " />
                    <img src="/images/Logo ukm kreasistik .JPG" alt="Image 2" className="md:w-32 md:h-32 w-20" />
                    <img src="/images/logo-jambi_info.jpg" alt="Image 3" className="md:w-32 md:h-32 w-20" />
                    <img src="/images/Logo-jambihits_id.jpg" alt="Image 4" className="md:w-32 md:h-32 w-20" />
                    <img src="/images/Logo-rpsjambi.jpg" alt="Image 5" className="md:w-32 md:h-32 w-20" />
                </div>
            </VelocityScroll>

        </div>
    );
}

export default Sponsor;