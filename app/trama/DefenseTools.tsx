"use client";
import { useState } from 'react';

const DefenseTools = () => {
  const [p, setP] = useState("");
  const getTime = (v: string) => {
    if (v.length < 5) return "INSTANTLY (Хэдхэн секунд)";
    if (v.length < 8) return "2 HOURS (Хоёр цаг)";
    return "3,000 YEARS (Мянган жил)";
  };

  return (
    <div className="w-full max-w-md p-6 border border-cyan-500/30 bg-gray-900/40 rounded-xl mx-auto font-mono">
      <h3 className="text-cyan-500 mb-4 font-black uppercase text-sm">Security Analyzer</h3>
      <input 
        type="password"
        onChange={(e) => setP(e.target.value)}
        className="w-full bg-black border border-gray-800 p-3 mb-4 text-cyan-400 text-xs outline-none"
        placeholder="Нууц үгээ шалгаад үз..."
      />
      <div className="text-[10px] uppercase space-y-2">
        <p className="text-gray-500">Тайлах хугацаа: <span className="text-white font-bold">{p ? getTime(p) : "Waiting..."}</span></p>
        <p className={p.length > 8 ? "text-green-500" : "text-red-500"}>{p.length > 8 ? "SAFE: Энэ нууц үг хүчтэй байна." : "DANGER: Хакердуулах магадлал өндөр!"}</p>
      </div>
    </div>
  );
};
export default DefenseTools;