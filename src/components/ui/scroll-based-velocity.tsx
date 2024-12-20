"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { cn } from "@/lib/utils";

interface VelocityScrollProps {
  children: React.ReactNode; // Mendukung gambar, teks, atau kombinasi keduanya
  default_velocity?: number;
  className?: string;
}

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScroll({
  children,
  default_velocity = 5,
  className,
}: VelocityScrollProps) {
  function ParallaxText({ children, baseVelocity = 100, className }: ParallaxProps) {
    const baseX = useMotionValue(0);
  
    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && itemRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const itemWidth = itemRef.current.offsetWidth;
          const newRepetitions = Math.ceil(containerWidth / itemWidth) + 2;
          setRepetitions(newRepetitions);
        }
      };
  
      calculateRepetitions();
  
      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [children]);
  
    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
  
    useAnimationFrame((t, delta) => {
      const moveBy = baseVelocity * (delta / 1000); // Kecepatan tetap
      baseX.set(baseX.get() + moveBy);
    });
  
    return (
      <div className="w-full overflow-hidden whitespace-nowrap" ref={containerRef}>
        <motion.div className={cn("inline-block", className)} style={{ x }}>
          {Array.from({ length: repetitions }).map((_, i) => (
            <div key={i} ref={i === 0 ? itemRef : null} className="inline-block">
              {children}
            </div>
          ))}
        </motion.div>
      </div>
    );
  }
  

  return (
    <section className="relative w-full">
      <ParallaxText baseVelocity={default_velocity} className={className}>
        {children}
      </ParallaxText>
    </section>
  );
}
