"use client";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Foto bersama kegiatan Main Event Sriwijaya Besanjo 2024: Thalassa Agate
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Kegiatan main event berupa seminar bersama guest star Sadam Permana
        dilangsungkan pada 6 Januari 2024 lalu. Acara ini dihadiri dengan penuh
        antusiasme yang tinggi oleh 538 orang peserta siswa/i di Kota Jambi.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Dokumentasi para panitia pelaksana Sriwijaya Besanjo 2024: Thalassa Agate
        bersama dengan Keluarga Besar HIMAJA UNSRI.
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Dokumentasi para panitia pelaksana Sriwijaya Besanjo 2024: Thalassa Agate
        bersama dengan Keluarga Besar HIMAJA UNSRI.
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Kunci keberhasilan acara Sriwijaya Besanjo dari tahun ke tahun pastinya
        berkat kerja keras seluruh panitia pelaksana dan diinisiasi langsung
        oleh Keluarga Besar HIMAJA UNSRI.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Suasana tampak dari atas kegiatan Main Event
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perasaan senang dan antusias menyelimuti acara Seminar Main Event
        Sriwijaya Besanjo 2024: Thalassa Agate terutama dalam menyambut kehadiran
        Guest Star.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Penyerahan penghargaan kepada guest star
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Dokumentasi para pimpinan pelaksana bersama Guest Star Sriwijaya Besanjo 2024:
        Thalassa Agate serta Host.
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "row-span-1 h-48",
    thumbnail: "/images/dokum4.png"
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "row-span-2 h-90",
    thumbnail: "/images/dokum7.png"
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "row-span-1 h-48",
    thumbnail: "/images/dokum5.png"
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "row-span-1 h-48",
    thumbnail: "/images/dokum1.jpg"
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "row-span-1 h-48",
    thumbnail: "/images/sb-4.png"
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1 lg:h-48",
    thumbnail: "/images/dokum6.png"
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "col-span-2 lg:h-48",
    thumbnail: "/images/dokum3.jpg"
  },
];