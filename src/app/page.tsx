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
        <div className="navbar bg-navbar w-full flex items-center justify-between px-4 py-2">
          {/* Tombol Hamburger untuk Mobile */}
          <div className="lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current">
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
              className="text-textHeader font-hancoke"
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
              className=""
            />
          </div>
          {/* Mobile: Image Section (top in mobile, right in desktop) */}
          <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
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


        {/* divider gunung */}
        <img
          src="/images/gunung.png"
          alt="Mountain Divider"
          className='w-full -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-36 xl:-mt-40 z-30 object-cover'
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
                  <h2 className="card-title md:text-xl text-lg font-montserrat">JEREHMY OWEN</h2>
                  <p className='md:text-base text-sm font-poppins'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum minima alias nobis? Sequi provident neque quia consectetur autem? Libero, doloremque!</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>

              <div className="card bg-borderGlare lg:max-w-md max-w-72 h-full shadow-xl">
                <div className="card-body md:p-6 p-3">
                  <h2 className="card-title text-white md:text-xl text-lg font-montserrat">SUMMARY</h2>
                  <p className="text-white md:text-sm text-xs text-justify font-poppins">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex culpa et harum blanditiis architecto minus, quibusdam ipsum voluptatum ipsa,
                    nesciunt excepturi dicta explicabo quae quaerat, qui voluptas labore iusto fugit consectetur? Ad a culpa, qui odit vero repellendus at?
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

        {/* footer */}
        {/* <footer className="footer bg-borderGlare text-base-content p-10 text-white font-poppins">
          <aside>
            <img src="/images/prakasa.png" alt="prakasa" className='w-96' />
          </aside>
          <nav>
            <h6 className="footer-title text-2xl">Address</h6>
            <a className="link link-hover">
              Sekretariat : Jalan Tamyiz, Kec. Indralaya Utara, <br />
              Kabupaten Ogan Indralaya Ilir, 30862</a>

          </nav>
          <nav>
            <h6 className="footer-title text-2xl">Contact</h6>
            <a className="link link-hover" href=''>Whatsapp <br />
              +62 877 9385 5926 (Florenzi) <br />
              +62 895 2973 3304 (Qayla)</a>
            <a className="link link-hover" href='mailto:sriwijayabesanjo@gmail.com'>Email <br />
              sriwijayabesanjo@gmail.com
            </a>

          </nav>
          <nav>
            <h6 className="footer-title text-2xl">Social</h6>

            <div className='flex items-center space-x-2'>
              <a className="link link-hover flex items-center" href='https://www.tiktok.com/@sriwijayabesanjo?lang=id-ID'>
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
                <span className="ml-2 text-white">Sriwijaya Besanjo</span>
              </a>
            </div>

            <div className='flex items-center space-x-2'>
              <a className="link link-hover flex items-center" href='https://www.instagram.com/sriwijayabesanjo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.281.059-2.563.334-3.637 1.408-1.074 1.074-1.349 2.356-1.408 3.637-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.059 1.281.334 2.563 1.408 3.637 1.074 1.074 2.356 1.349 3.637 1.408 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.281-.059 2.563-.334 3.637-1.408 1.074-1.074 1.349-2.356 1.408-3.637.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.059-1.281-.334-2.563-1.408-3.637-1.074-1.074-2.356-1.349-3.637-1.408-1.28-.058-1.688-.07-4.947-.07zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.297 0-4.162-1.865-4.162-4.162s1.865-4.162 4.162-4.162 4.162 1.865 4.162 4.162-1.865 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
                <span className="ml-2 text-white">Sriwijaya Besanjo</span>
              </a>
            </div>

            <div className='flex items-center space-x-2'>
              <a className="link link-hover flex items-center" href='https://www.linkedin.com/company/himajaunsri'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5.5h-3v-10h3v1.5c.878-1.314 2.356-2.5 4-2.5 2.485 0 4.5 2.015 4.5 4.5v6.5z" />
                </svg>
                <span className="ml-2 text-white">HIMAJA UNSRI</span>
              </a>
            </div>

          </nav>
        </footer> */}
        {/* footer */}
        
        
        <Footer />

      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-64 md:w-80 p-4">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
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