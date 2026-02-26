"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

interface CustomButtonProps {
  text: string;
  link: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, link }) => {
  return (
    <motion.button 
      initial={{ opacity: 0, scale : 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="bg-white bg-opacity-20 hover:bg-opacity-80 text-purple-400 hover:text-purple-800 font-semibold py-2 px-8 mx-6 rounded-full shadow-lg transition-all"
    >
      <Link to={link} smooth={true} duration={500} className='cursor-pointer'>
        {text}       
      </Link>
    </motion.button>           
  );
};

export default CustomButton;