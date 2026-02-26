"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton";

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
          Welcome to the ultimate hacking experience. Dive into the matrix and unleash your inner hacker!
        </motion.p>
        <CustomButton text="Get Started" link="features" />
      </div>
    </div>
  );
};

export default Hero;