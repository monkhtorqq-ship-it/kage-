"use client";
import React, { useState } from "react";
import { IconFlame, IconBolt, IconShield } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import DarkWebFeed from "./DarkWebFeed";
import DdosDemo from "./WIfi";
import EncryptionTool from "./Morz";

const Features = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const featureData = [
    {
      title: "Dark Web Access",
      icon: <IconFlame size={60} stroke={1.5} />,
      style: "border-red-500/50 bg-red-500/10",
      iconColor: "text-red-500",
      component: <DarkWebFeed />
    },
    {
      title: "Lightning Attack",
      icon: <IconBolt size={60} stroke={1.5} />,
      style: "border-cyan-500/50 bg-cyan-500/10",
      iconColor: "text-cyan-400",
      component: <DdosDemo />
    },
    {
      title: "Secure Matrix",
      icon: <IconShield size={60} stroke={1.5} />,
      style: "border-purple-500/50 bg-purple-500/10",
      iconColor: "text-purple-500",
      component: <EncryptionTool />
    }
  ];

  return (
    <section className="py-20 relative z-10" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16 uppercase tracking-[0.2em]">
          CORE <span className="text-cyan-500">SYSTEMS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featureData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(activeTab === index ? null : index)}
              className={`flex flex-col items-center p-10 rounded-2xl border cursor-pointer transition-all duration-300 ${item.style} ${
                activeTab === index ? 'ring-2 ring-white shadow-[0_0_20px_rgba(255,255,255,0.4)]' : ''
              }`}
            >
              <div className={`mb-6 ${item.iconColor}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter text-center">
                {item.title}
              </h3>
              <p className="text-[10px] text-gray-400 text-center opacity-70 uppercase">
                {activeTab === index ? "System Active" : "Click to Initialize"}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Энэ хэсэгт нөгөө Хакерын багажнууд чинь гарч ирнэ */}
        <AnimatePresence mode="wait">
          {activeTab !== null && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="flex justify-center w-full"
            >
              <div className="w-full max-w-2xl bg-slate-950/80 p-8 rounded-3xl border border-white/10 backdrop-blur-2xl relative shadow-2xl">
                <button
                  onClick={() => setActiveTab(null)}
                  className="absolute top-4 right-6 text-gray-500 hover:text-white font-mono text-[10px] border border-gray-800 px-2 py-1 rounded hover:border-red-500 transition-colors"
                >
                  [ CLEAR ]
                </button>
                <div className="mt-4">
                  {featureData[activeTab].component}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Features;