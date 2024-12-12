import React from "react";
import { motion, type AnimationProps } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.9 }, // Tombol mengecil lebih sedikit saat diklik
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 30, // Tambahkan kekakuan agar animasi lebih "tegas"
    damping: 10, // Kurangi redaman untuk mempercepat akhir animasi
    mass: 1.5,
  },
} as AnimationProps;


interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const ShinyButton = React.forwardRef<HTMLAnchorElement, ShinyButtonProps>(
  ({ children, className, href, ...props }, ref) => {
    return (
      <motion.a
        ref={ref}
        href={href}
        {...animationProps}
        {...props}
        className={cn(
          "relative rounded-lg px-6 py-2 font-medium transform transition-transform duration-200 hover:scale-105",
          className,
        )}
      >
        <span
          className="relative block size-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]"
          style={{
            maskImage:
              "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
          }}
        >
          {children}
        </span>
        <span
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            maskComposite: "exclude",
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
        ></span>
      </motion.a>
    );
  },
);

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;
