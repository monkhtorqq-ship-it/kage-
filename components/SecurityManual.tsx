"use client";
import React from 'react';
import { motion } from 'framer-motion';

const SecurityManual = () => {
    const guides = [
        {
            title: "Password Hygiene",
            tips: ["12-оос дээш тэмдэгт ашиглах", "Тусгай тэмдэгт ($, #, @) оруулах", "Password Manager ашиглах"],
            icon: "🔑"
        },
        {
            title: "Network Safety",
            tips: ["Нийтийн WiFi-д VPN ашиглах", "Гэрийн чиглүүлэгчийн нууц үгийг солих", "HTTPS-гүй сайт руу орохгүй байх"],
            icon: "🌐"
        },
        {
            title: "Account Privacy",
            tips: ["2FA (Хоёр шатлалт баталгаажуулалт) идэвхжүүлэх", "Сэжигтэй линк дээр дарахгүй байх", "Ашигладаггүй аккаунтаа устгах"],
            icon: "🛡️"
        }
    ];

    return (
        <section className="py-20 pb-34 relative overflow-hidden" id="manual">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-black text-white uppercase tracking-[0.3em] mb-4">
                        Security <span className="text-purple-500 underline decoration-pink-500">Manual</span>
                    </h2>
                    <p className="text-purple-700 font-mono text-xs uppercase tracking-tighter">
                        Таныг болон таны датаг хамгаалах анхан шатны зааварчилгаа
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {guides.map((guide, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 border border-purple-900/30 bg-[#1a012a]/60  rounded-[30px] hover:border-pink-500/50 transition-all group shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        >
                            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300">
                                {guide.icon}
                            </div>
                            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-widest border-b border-purple-900/30 pb-2">
                                {guide.title}
                            </h3>
                            <ul className="space-y-3">
                                {guide.tips.map((tip, index) => (
                                    <li key={index} className="flex items-start gap-2 text-[11px] text-purple-300/80 font-mono">
                                        <span className="text-pink-500 mt-1">▹</span>
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 p-8 border border-red-500/20 bg-red-950/20  rounded-[25px] text-center"
                >
                    <h4 className="text-red-500 font-bold text-xs uppercase mb-2 animate-pulse tracking-[0.2em]">Emergency Notice</h4>
                    <p className="text-[10px] text-gray-400 font-mono max-w-2xl mx-auto italic leading-relaxed">
                        Хэрэв таны мэдээлэл алдагдсан бол нэн даруй бүх чухал аккаунтын нууц үгээ сольж, банкны гүйлгээгээ хянахыг зөвлөж байна.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default SecurityManual;