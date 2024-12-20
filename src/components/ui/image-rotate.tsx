"use client";

import { useEffect, useState } from "react";

interface ImageRotateProps {
    images: string[]; // Array URL gambar
    duration?: number; // Durasi dalam milidetik
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

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, duration);

        return () => clearInterval(interval);
    }, [images, duration]);

    return (
        <div className={`relative overflow-hidden w-96 h-auto ${className}`}>
            {images.map((image, i) => (
                <img
                    key={i}
                    src={image}
                    alt={imgAlt}
                    className={`absolute top-0 left-0 w-full h-auto transition-opacity duration-1000 ease-in-out ${i === index ? "opacity-100" : "opacity-0"
                        }`}
                    width={384} // Set lebar eksplisit (misalnya 384px untuk w-96)
                    height={200} // Set tinggi eksplisit sesuai kebutuhan
                />

            ))}
        </div>
    );
}
