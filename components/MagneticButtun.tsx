"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x: x * 0.4, y: y * 0.4 });
    }
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <div className="relative group">
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="absolute inset-0 bg-purple-600/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="relative z-10"
      >
        <div className="cursor-pointer">
          {children}
        </div>
      </motion.div>
    </div>
  );
}