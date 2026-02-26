"use client";
import React from "react";
import { IconFlame, IconBolt, IconShield } from "@tabler/icons-react";

const featureData = [
    { 
        title: "Dark Web Access", 
        icon: <IconFlame size={60} stroke={1.5} />, 
        style: "border-red-500/50 bg-red-500/10", 
        iconColor: "text-red-500" 
    },
    { 
        title: "Lightning Fast", 
        icon: <IconBolt size={60} stroke={1.5} />, 
        style: "border-cyan-500/50 bg-cyan-500/10 ", 
        iconColor: "text-cyan-400" 
    },
    { 
        title: "Secure Matrix", 
        icon: <IconShield size={60} stroke={1.5} />, 
        style: "border-purple-500/50 bg-purple-500/10", 
        iconColor: "text-purple-500" 
    }
];

const Features = () => {
    return (
        <section className="py-20 relative z-10" id="features">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16 uppercase tracking-[0.2em]">
                    Core <span className="text-cyan-500">Systems</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featureData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center p-10 rounded-2xl border transition-all duration-300 hover:scale-105 ${item.style}`}
                        >
                            <div className={`mb-6 ${item.iconColor}`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-center text-xs leading-relaxed opacity-70">
                                System protocols initialized. Ensuring maximum stability and performance for {item.title.toLowerCase()}.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;