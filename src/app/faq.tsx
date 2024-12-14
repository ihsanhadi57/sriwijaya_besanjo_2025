"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const testimonials = [
    {
        quote: "Q: Apa saja materi yang akan di bawakan?",
        name: "A: Pemateri akan membawakan seminar dengan tema persiapan ke dunia perkuliahan",
        title: "",
    },
    {
        quote: "Q: Pembelian tiket dengan metode apa saja?",
        name: "A: Pembayaran bisa dilakukan via Dana, BNI, BCA, dan bisa dilakukan secara langsung (onsite) saat kegiatan HGTS berlangsung",
        title: "",
    },
    {
        quote: "Q: Bagaimana cara pemesanan tiket Sriwijaya Besanjo? ",
        name: "A: Pilih jenis tiket yang ingin anda beli, lalu melakukan pembayaran, selanjutnya tiket akan dikirimkan melalui email",
        title: "",
    },
];

const FaQ = () => {
    return (
        < div className='md:mt-0 mt-[0px]' >
            <div className="flex justify-center items-center">
                <img src="/images/texts/faq.png" alt="FAQ" className='md:w-44 w-32' />
            </div>
            <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden -mt-52">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="fast"
                    className='font-poppins text-justify'
                />
            </div>
        </div >
    );
}

export default FaQ;