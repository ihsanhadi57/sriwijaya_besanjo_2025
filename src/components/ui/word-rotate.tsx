"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface ImageRotateProps {
  images: string[]; // Array of image URLs
  duration?: number;
  framerProps?: HTMLMotionProps<"img">;
  className?: string;
  imgAlt?: string; // Alt text for accessibility
}

export default function ImageRotate({
  images,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
  imgAlt = "Rotating Image",
}: ImageRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [images, duration]);

  return (
    <div className="overflow-hidden py-2 w-96 lg:w-svw ">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={imgAlt}
          className={cn(className)}
          {...framerProps}
        />
      </AnimatePresence>
    </div>
  );
}
