"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const AttackDemo = () => {
  const [input, setInput] = useState("");
  const [isHacked, setIsHacked] = useState(false);

  const checkAttack = () => {
    // Хакеруудын ашигладаг үндсэн SQL injection код
    if (input.includes("' OR 1=1")) {
      setIsHacked(true);
    } else {
      alert("САНАМЖ: Нууц үг буруу байна. (Зөвлөгөө: ' OR 1=1 -- гэж бичээд үз)");
    }
  };

  return (
    <div className="w-full max-w-md p-6 border border-red-500/30 bg-gray-900/40 rounded-xl backdrop-blur-sm">
      <h3 className="text-red-500 mb-4 font-black uppercase tracking-widest text-sm">SQL Injection Simulator</h3>
      <p className="text-[10px] text-gray-500 mb-4 leading-tight">
        Нэвтрэх хэсгийн кодыг bypass хийж, өгөгдлийн санд нэвтрэхийг оролдоно уу.
      </p>
      
      
      <input 
        className="w-full bg-black border border-gray-800 p-3 mb-4 text-red-500 font-mono text-sm outline-none focus:border-red-500 transition-all"
        placeholder="ENTER ADMIN PASSWORD..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      
      <button 
        onClick={checkAttack} 
        className="w-full bg-red-950/30 border border-red-500 text-red-500 py-2 font-bold text-xs hover:bg-red-500 hover:text-black transition-all"
      >
        BYPASS SYSTEM
      </button>
      
      {isHacked && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="mt-4 p-3 bg-green-950/20 border border-green-500 text-green-500 text-[10px] font-mono leading-relaxed"
        >
          [SUCCESS] DATABASE OVERRIDE: OK <br/>
          [SUCCESS] ACCESS GRANTED: ADMINISTRATOR <br/>
          [INFO] Та 'OR 1=1' ашиглан логик шүүлтүүрийг хуурлаа.
        </motion.div>
      )}
    </div>
  );
};

export default AttackDemo;