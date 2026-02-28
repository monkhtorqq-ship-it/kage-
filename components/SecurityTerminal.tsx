"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SecurityTerminal = () => {
  const [status, setStatus] = useState("SECURE");
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      // Системийн ажиллагааг санамсаргүйгээр өөрчилж харуулна
      const randomThreat = Math.random() > 0.8;
      if (randomThreat) {
        setStatus("UNDER ATTACK");
        setProgress(Math.floor(Math.random() * 40) + 30);
        setTimeout(() => {
          setStatus("MITIGATING");
          setProgress(90);
          setTimeout(() => { setStatus("SECURE"); setProgress(100); }, 2000);
        }, 3000);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-4 border border-cyan-900/50 bg-black/80 rounded-lg font-mono text-[10px] relative overflow-hidden">
      {/* Background-д нь бүдэг Grid өгье */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
      
      <div className="flex justify-between items-center mb-4 relative z-10">
        <div className="flex gap-2 items-center">
          <div className={`w-2 h-2 rounded-full animate-ping ${status === "SECURE" ? "bg-green-500" : "bg-red-500"}`} />
          <span className="text-gray-400 uppercase tracking-tighter">System Integrity:</span>
          <span className={status === "SECURE" ? "text-green-500" : "text-red-500"}>{status}</span>
        </div>
        <span className="text-cyan-500">{progress}%</span>
      </div>

      <div className="grid grid-cols-2 gap-4 relative z-10">
        <div className="space-y-2">
          <p className="text-gray-500">[ ACTIVE PROTOCOLS ]</p>
          <div className="flex items-center gap-2">
            <div className="w-full bg-gray-900 h-1 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: `${progress}%` }}
                className={`h-full ${status === "SECURE" ? "bg-cyan-500" : "bg-red-600"}`} 
              />
            </div>
          </div>
          <p className="text-[8px] text-cyan-800">Firewall V.4.02 Active...</p>
        </div>

        <div className="border-l border-cyan-900/30 pl-4">
          <p className="text-gray-500">[ ENCRYPTION ]</p>
          <p className="text-white text-[8px] truncate">AES-256-GCM_KAGE_SYSTEM</p>
          <p className="text-cyan-400 text-[8px] animate-pulse">KEY_HASH: 0x82...F21</p>
        </div>
      </div>
    </div>
  );
};

export default SecurityTerminal;