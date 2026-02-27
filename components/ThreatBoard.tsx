"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThreatBoard = () => {
  const [attacks, setAttacks] = useState<any[]>([]);

  // Халдлагын төрлүүд болон хотууд (Simulation)
  const attackTypes = ["DDoS Attack", "SQL Injection", "Brute Force", "Malware Spread", "Phishing"];
  const locations = ["New York, US", "Beijing, CN", "Moscow, RU", "London, UK", "Ulaanbaatar, MN", "Tokyo, JP", "Berlin, DE"];

  useEffect(() => {
    const interval = setInterval(() => {
      const newAttack = {
        id: Date.now(),
        type: attackTypes[Math.floor(Math.random() * attackTypes.length)],
        from: locations[Math.floor(Math.random() * locations.length)],
        to: locations[Math.floor(Math.random() * locations.length)],
        severity: Math.random() > 0.7 ? "HIGH" : "MEDIUM",
        time: new Date().toLocaleTimeString()
      };

      setAttacks(prev => [newAttack, ...prev].slice(0, 6)); // Сүүлийн 6-г харуулна
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 overflow-hidden border-y border-gray-900" id="threats">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          
          {/* Зүүн тал: Маш том тоо болон гарчиг */}
          <div className="w-full md:w-1/3">
            <h2 className="text-red-600 font-black text-xs tracking-[0.5em] uppercase mb-4 animate-pulse">
              ● Live Threat Map
            </h2>
            <h3 className="text-4xl font-black text-white leading-tight uppercase mb-6">
              Global Cyber <br /> <span className="text-gray-700 underline decoration-red-600">Warfare</span>
            </h3>
            <div className="p-4 bg-red-950/10 border border-red-900/30 rounded-lg">
              <p className="text-[10px] text-gray-500 uppercase font-mono">Total Threats Today:</p>
              <p className="text-3xl font-black text-red-500 font-mono tracking-widest">
                {Math.floor(Math.random() * 100000) + 500000}+
              </p>
            </div>
          </div>

          {/* Баруун тал: Урсаж буй халдлагын мэдээлэл */}
          <div className="w-full md:w-2/3 bg-gray-900/10 border border-white/5 rounded-2xl p-6 font-mono overflow-hidden">
            <div className="flex justify-between text-[10px] text-gray-600 border-b border-gray-800 pb-2 mb-4 uppercase font-bold">
              <span>Source</span>
              <span>Target</span>
              <span>Type</span>
              <span>Severity</span>
            </div>

            <div className="space-y-4">
              {attacks.map((attack) => (
                <motion.div
                  key={attack.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-between items-center text-[11px] border-b border-gray-900/50 pb-2"
                >
                  <span className="text-white w-24 truncate">{attack.from}</span>
                  <span className="text-cyan-500 italic">➔</span>
                  <span className="text-white w-24 truncate">{attack.to}</span>
                  <span className="text-yellow-500 uppercase">{attack.type}</span>
                  <span className={`font-bold ${attack.severity === 'HIGH' ? 'text-red-500' : 'text-orange-400'}`}>
                    [{attack.severity}]
                  </span>
                </motion.div>
              ))}
              {attacks.length === 0 && <p className="text-center py-10 text-gray-800 animate-pulse">CONNECTING TO NODES...</p>}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ThreatBoard;