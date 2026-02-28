"use client";
import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButtun";

const Hero = () => {
  return (
    <div className='bg-transparent' id="home">
      <div className="container mx-auto flex flex-col pb-10 md:pb-40 items-center justify-center h-screen px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl md:text-6xl text-white mb-6 mt-24 text-center font-bold'
        >
          HA11O
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 text-center max-w-2xl'
        >
          🔐 Кибер ертөнцийн туйл руу тавтай морил.        </motion.p>

        <MagneticButton>
          <a href="/trama">
            <button className="relative  rounded-3xl px-10 py-4 bg-transparent border border-purple-500 text-purple-400 font-mono text-sm uppercase tracking-[0.3em] overflow-hidden group transition-all hover:text-white hover:border-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <span className="relative z-10 font-black italic">Start scan </span>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-purple-600 to-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
            </button>
          </a>
        </MagneticButton>
      </div>
    </div>
  );
};

export default Hero;