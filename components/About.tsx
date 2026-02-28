"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-40  relative overflow-hidden" id="about">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase tracking-tighter">
                THE <span className="text-cyan-500">MISSION</span>
              </h2>
              <div className="h-1 w-20 bg-cyan-600 rounded-full" />
            </div>

            <div className="space-y-6 text-gray-300 font-mono text-base md:text-lg leading-relaxed italic">
              <p>
                "Бидний зорилго бол технологийн хөгжлийг дагаад ирж буй <span className="text-white font-bold">цахим аюул заналыг</span> хэрэглэгчдэд хамгийн энгийнээр ойлгуулах юм."
              </p>
              <p className="not-italic text-gray-400 text-sm md:text-base border-l-2 border-gray-800 pl-6">
                <span className="text-white font-bold">KAGE SYSTEM</span> бол зүгээр нэг вэбсайт биш. Энэ бол хэрэглэгчдэд кибер халдлагын бодит эрсдэлийг интерактив хэлбэрээр харуулж, тэднийг хохирогч болохоос сэргийлэх зорилготой боловсролын платформ юм.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { 
                title: "Data Verification", 
                desc: "Таны и-мэйл болон хувийн мэдээлэл хакеруудын гарт очсон эсэхийг бодит өгөгдөл дээр тулгуурлан шалгах.", 
                icon: "🔍",
                color: "border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.05)]" 
              },
              { 
                title: "Live Simulations", 
                desc: "Хамгийн түгээмэл халдлагуудыг өөрийн биеэр туршиж үзсэнээр цахим орчинд сонор сэрэмжтэй болох.", 
                icon: "⚡",
                color: "border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.05)]" 
              },
              { 
                title: "Security Toolkit", 
                desc: "Мэдээллийг нууцлах болон сүлжээний аюулгүй байдлыг хангах анхан шатны багаж хэрэгслүүд.", 
                icon: "🛡️",
                color: "border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.05)]" 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`p-7 border ${item.color} bg-gray-900/10 rounded-2xl backdrop-blur-sm group hover:bg-gray-900/30 hover:-translate-y-2 transition-all duration-500`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase mb-2 tracking-widest group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[12px] text-gray-500 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;