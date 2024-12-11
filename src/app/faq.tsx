"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const testimonials = [
    {
        quote: "Q: Apa materi yang akan di bawakan?",
        name: "A: Pemateri akan membawakan seminar dengan tema persiapan ke dunia perkuliahan",
        title: "",
    },
    {
        quote: "Q: Pembayaran via apa saja?  ",
        name: "A: Pembayaran bisa dilakukan via Dana, Bni, Bca, dan bisa dilakukan secara langsung (onsite) serta saat kegiatan HGTS berlangsung",
        title: "",
    },
    {
        quote: "Q: Cara pemesanan tiket Sriwijaya Besanjo? ",
        name: "A: Pilih jenis tiket yang ingin anda beli, lalu melakukan pembayaran, selanjutnya tiket akan dikirimkan melalui email",
        title: "",
    },
];

const FaQ = () => {
    return (
        < div className='md:mt-96 mt-[650px]' >
            <div className="flex justify-center items-center">
                <img src="/images/faq.png" alt="FAQ" className='md:w-44 w-32' />
            </div>
            <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden -mt-52">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="normal"
                    className='font-poppins'
                />
            </div>
        </div >
    );
}

export default FaQ;