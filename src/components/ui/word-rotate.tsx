"use client";

import { useEffect, useState } from "react";

interface ImageRotateProps {
  images: string[]; // Array URL gambar
  duration?: number; // Durasi tiap gambar dalam milidetik
  className?: string; // Kelas tambahan opsional
  imgAlt?: string; // Alt text untuk aksesibilitas
}

export default function ImageRotate({
  images,
  duration = 2500,
  className = "",
  imgAlt = "Rotating Image",
}: ImageRotateProps) {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Mulai fade out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length); // Ganti gambar
        setFadeIn(true); // Mulai fade in
      }, 300); // Durasi fade out
    }, duration);

    return () => clearInterval(interval);
  }, [images, duration]);

  return (
    <div className={`relative overflow-hidden w-96 h-auto ${className}`}>
      <img
        src={images[index]}
        alt={imgAlt}
        className={`w-full h-auto transition-opacity duration-300 ease-in-out ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
