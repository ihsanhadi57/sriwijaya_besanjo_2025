"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import WordRotate from '@/components/ui/word-rotate';
import { GlareCard } from '@/components/ui/glare-card';
import ShinyButton from '@/components/ui/shiny-button';
import { LayoutGridDemo } from './layoutGridPic';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';
import Footer from "@/app/footer";
import Timer from "@/app/countdown"
import { TiEdit } from 'react-icons/ti';

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

export default function Home() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
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
        {/* Page content here */}

        {/* HERO */}
        <div className="mt-24 ml-6 mr-6 md:ml-28 md:mr-36 lg:mr-0 flex flex-col-reverse md:flex-row items-center justify-between 
      space-y-8 md:space-y-0 md:space-x-8">
          {/* Mobile: Text Section (bottom in mobile, left in desktop) */}
          <div className="w-full md:w-1/2 -mt-24 text-center md:text-left order-2 md:order-1 flex flex-col md:flex-none items-center md:items-start">
            <TextGenerateEffect
              words="Come"
              duration={1}
              className="text-textHeader font-hancoke text-stroke-black"
            />
            <TextGenerateEffect
              words="Join Us In"
              duration={1}
              className="text-textHeader font-hancoke"
            />
            <WordRotate
              images={[
                "/images/prakasa.png",
                "/images/sb25.png",
              ]}
              duration={3000}
              imgAlt="Prakasa Pratama"
              className="p-5"
            />
          </div>
          {/* Mobile: Image Section (top in mobile, right in desktop) */}
          <div className="w-full md:w-1/2 flex justify-center items-center z-10 order-1 md:order-2">
            <GlareCard className="flex justify-center items-center">
              <img
                src="/images/maskot.png"
                alt="Glare Card Content"
                className="w-36 md:w-72 object-cover rounded-sm"
              />
            </GlareCard>
          </div>
        </div>
        {/* HERO */}

        <Timer />

        {/* divider gunung */}
        <img
          src="/images/gunung.png"
          alt="Mountain Divider"
          className='w-full -mt-16 sm:-mt-24 md:-mt-32 mt-2 lg:-mt-36 xl:-mt-40 z-10 object-cover'
        />
        {/* divider gunung */}

        {/* about */}
        <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 lg:-mt-36 lg:ml-24 lg:mr-24">
          <div className="w-full md:w-1/2 mr-0 md:mr-8">
            <h2 className="md:text-6xl text-5xl md:mb-6 mb-3 font-hancoke">HIMAJA UNSRI</h2>
            <p className="text-sm md:text-xl text-justify mb-10 font-poppins">
              HIMAJA UNSRI adalah sebagai wadah yang menaungi mahasiswa dari Provinsi Jambi yang melanjutkan pendidikannya di Universitas Sriwijaya. HIMAJA UNSRI pernah mengadakan kegiatan seperti, Sriwijaya Besanjo, Himaja Cup, Himaja Fest, Donor Darah, Galang Dana, dan masih banyak kegiatan lainnya sebagai bentuk konstribusi untuk Jambi. Kegiatan ini juga menjadi ajang untuk membentuk persaudaraan yang kuat antar anggota HIMAJA UNSRI, serta menjadi tempat untuk mengembangkan minat dan bakat para anggotanya.
            </p>
          </div>
          <div className="w-full md:w-1/2 ml-0 md:ml-8">
            <h2 className="md:text-6xl text-5xl md:mb-6 mb-3 text-right font-hancoke ">SRIWIJAYA BESANJO</h2>
            <p className="text-sm md:text-xl text-justify mb-10 font-poppins">
              Sriwijaya Besanjo adalah agenda tahunan yang selalu diadakan oleh Himpunan Mahasiswa Jambi di Universitas Sriwijaya. Sriwijaya Besanjo adalah salah satu kegiatan dari HIMAJA untuk memberi informasi, motivasi, serta aspirasi dalam rangka meningkatkan mutu pendidikan khususnya dalam tingkat pendidikan perguruan tinggi. Sriwijaya Besanjo juga dipersiapkan untuk menyambut para civitas akademik di Provinsi Jambi agar lebih semangat dalam melanjutkan pendidikan di perguruan tinggi.
            </p>
          </div>
        </div>
        {/* about */}
        <div className="flex justify-center items-center mt-10 md:mt-32">
          <img src="/images/our guest star.png" alt="our guest star" className="w-3/6 md:w-96" />
        </div>
        {/* main content */}
        <div
          className="relative bg-cover bg-no-repeat bg-center min-h-screen w-full"
          style={{
            backgroundImage: "url('/images/bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'top'
          }}
        >

          {/* gs */}
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:gap-10 md:mt-20 md:px-16 mt-10">
            <div className='bg-bgGlare flex items-center justify-center h-auto rounded-lg'>
              <img src="/images/owen.png" alt="owen" className='w-[250px] md:w-[350px] md:max-h-[420px] object-contain' />
            </div>

            <div className="flex flex-col gap-5 mt-5 md:mt-0">
              <div className="card bg-transparent border-2 border-borderGlare lg:max-w-md max-w-72 h-full  shadow-xl">
                <div className="card-body md:p-6 p-3">
                  <h2 className="card-title md:text-xl text-lg font-montserrat">JERHEMY OWEN</h2>
                  <p className='md:text-base text-sm font-poppins'>Youtube & TikTok Content Creator <br /> Environment Enthusiast </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>

              <div className="card bg-borderGlare lg:max-w-md max-w-72 h-full shadow-xl">
                <div className="card-body md:p-6 p-3">
                  <h2 className="card-title text-white md:text-xl text-lg font-montserrat">SUMMARY</h2>
                  <p className="text-white md:text-sm text-xs text-justify font-poppins">

                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
          </div>
          {/* gs */}

          {/* ticket */}
          <div className="flex justify-center items-center md:mt-60 mt-20 ml-8">
            <div className='relative'>
              <img src="/images/ticket.png" alt="ticket" className='md:w-64 md:ml-4 w-44 ' />
              <img src="/images/kepala maskot.png" alt="maskot" className='md:w-64 w-40 absolute -top-7 transform z-10' />
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center md:mt-12 mt-0 md:gap-10 gap-2'>
            <div>
              <div className="card bg-borderGlare md:max-w-xs max-w-72 h-full shadow-xl mt-5 rounded-3xl ">
                <div className="card-body md:p-7 md:py-3 py-3">
                  <h2 className="card-title text-white justify-center text-4xl font-hancoke">EKA</h2>
                  <div className="flex flex-col items-center justify-center  p-5 border-2 rounded-2xl ">
                    <img src="/images/prakasa.png" alt="maskot" className='w-64' />
                    <p className='text-white text-3xl mt-3 font-hancoke'>Solo Ticket</p>
                    <div className="divider divider-warning p-2"></div>
                    <p className='text-white text-3xl mb-3 font-hancoke'>RP50.000</p>
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
                  <h2 className="card-title text-white justify-center text-4xl font-hancoke">TRI</h2>
                  <div className="flex flex-col items-center justify-center p-5 border-2 rounded-2xl ">
                    <img src="/images/prakasa.png" alt="maskot" className='w-60' />
                    <p className='text-white text-3xl mt-3 font-hancoke'>Bundle 3 Ticket</p>
                    <div className="divider divider-warning p-2"></div>
                    <p className='text-white text-3xl mb-3 font-hancoke'>RP50.000</p>
                    <ShinyButton
                      href="https://bit.ly/PrakasaParamaGettiketTri"
                      className="bg-bgGlare w-full text-center font-black"
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
                  <h2 className="card-title text-white justify-center text-4xl font-hancoke">PANCA</h2>
                  <div className="flex flex-col items-center justify-center p-5 border-2 rounded-2xl ">
                    <img src="/images/prakasa.png" alt="maskot" className='w-60' />
                    <p className='text-white text-3xl mt-3 font-hancoke'>Bundle 5 Ticket</p>
                    <div className="divider divider-warning p-2"></div>
                    <p className='text-white text-3xl mb-3 font-hancoke'>RP50.000</p>
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
          {/* ticket */}

          {/* gallery */}
          <div className='md:mt-60 mt-20'>
            <div className="flex justify-center items-center">
              <img src="/images/get to know.png" alt="get to know" className='md:w-96 md:ml-3 w-64' />
            </div>
            <div className="h-full md:-mt-16 -mt-24 md:mb-52 ">
              <LayoutGridDemo />
            </div>
          </div>
          {/* gallery */}

          {/* FAQ */}
          <div className='md:mt-96 mt-[650px]'>
            <div className="flex justify-center items-center">
              <img src="/images/faq.png" alt="FAQ" className='md:w-44 w-32' />
            </div>
            <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden -mt-52">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="fast"
                className='font-montserrat'
              />
            </div>
          </div>
          {/* FAQ */}

          {/* sponsorship */}
          <div>
            <div className="flex justify-start items-start md:ml-32 ml-14">
              <img src="/images/sponsorship.png" alt="get to know" className='md:w-80 md:ml-3 w-56' />
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
          {/* sponsorship */}

          {/* medpart */}
          <div className='mt-10 mb-60'>
            <div className="flex justify-end items-end md:mr-32 mr-14">
              <img src="/images/media partner 2.png" alt="get to know" className='md:w-80 md:ml-3 w-56' />
            </div>
            <VelocityScroll default_velocity={2} className='mt-10'>
              <div className="flex gap-10">
                <img src="/images/Logo-dtpeduli.png" alt="Image 1" className="md:w-48 md:h-32 w-36 md:ml-5 ml-5" />
                <img src="/images/Logo ukm kreasistik .JPG" alt="Image 2" className="md:w-32 md:h-32 w-20" />
                <img src="/images/logo-jambi_info.jpg" alt="Image 3" className="md:w-32 md:h-32 w-20" />
                <img src="/images/Logo-jambihits_id.jpg" alt="Image 4" className="md:w-32 md:h-32 w-20" />
                <img src="/images/Logo-rpsjambi.jpg" alt="Image 5" className="md:w-32 md:h-32 w-20" />
              </div>
            </VelocityScroll>
          </div>
          {/* medpart */}
        </div>

        <Footer />

      </div>

      {/* Sidebar */}
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-white min-h-full mt-14 w-64 md:w-80 p-4">
          {/* Tambahkan menu mobile lengkap */}
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