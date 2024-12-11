"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';

const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-top justify-center p-8 md:p-16 lg:-mt-36 lg:ml-24 lg:mr-24">
            <div className="w-full md:w-1/2 mr-0 md:mr-8">
                <h2 className="md:text-6xl text-5xl md:mb-6 mb-3 font-hancoke text-[#385B03]">HIMAJA UNSRI</h2>
                <p className="text-sm md:text-xl text-justify mb-10 font-poppins text-[#385B03]">
                    HIMAJA UNSRI adalah sebagai wadah yang menaungi mahasiswa dari Provinsi Jambi
                    yang melanjutkan pendidikannya di Universitas Sriwijaya. HIMAJA UNSRI pernah
                    mengadakan kegiatan seperti, Sriwijaya Besanjo, Himaja Cup, Himaja Fest, Donor Darah,
                    Galang Dana, dan masih banyak kegiatan lainnya sebagai bentuk konstribusi untuk Jambi.
                    Kegiatan ini juga menjadi ajang untuk membentuk persaudaraan yang kuat antar anggota
                    HIMAJA UNSRI, serta menjadi tempat untuk mengembangkan minat dan bakat para anggotanya.
                </p>
            </div>
            <div className="w-full md:w-1/2 ml-0 md:ml-8">
                <h2 className="md:text-6xl text-5xl md:mb-6 mb-3 text-right font-hancoke text-[#385B03]">SRIWIJAYA BESANJO</h2>
                <p className="text-sm md:text-xl text-justify mb-10 font-poppins text-[#385B03]">
                    Sriwijaya Besanjo adalah agenda tahunan yang selalu diadakan oleh Himpunan Mahasiswa
                    Jambi di Universitas Sriwijaya. Sriwijaya Besanjo adalah salah satu kegiatan dari HIMAJA
                    untuk memberi informasi, motivasi, serta aspirasi dalam rangka meningkatkan mutu pendidikan
                    khususnya dalam tingkat pendidikan perguruan tinggi. Sriwijaya Besanjo juga dipersiapkan
                    untuk menyambut para civitas akademik di Provinsi Jambi agar lebih semangat dalam melanjutkan
                    pendidikan di perguruan tinggi.
                </p>
            </div>
        </div>
    )
}

export default About;