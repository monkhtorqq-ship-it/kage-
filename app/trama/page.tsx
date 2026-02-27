"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; 
import AttackDemo from './AttackDemo';
import DefenseTools from './DefenseTools';

const TramaPage = () => {
  const [text, setText] = useState('');
  const [access, setAccess] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'scanning' | 'result'>('idle');
  const [isPwned, setIsPwned] = useState(false);
  const [breaches, setBreaches] = useState<string[]>([]);

  const fullText = "INITIALIZING KAGE_BREACH_MONITOR... ACCESSING SECURE_DATABASE... READY.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const handleScan = async () => {
    if (!email.includes('@')) return alert("И-мэйл буруу байна!");
    setStatus('scanning');

    try {
      const res = await fetch('/api/check-breach', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();

      setTimeout(() => {
        setIsPwned(data.isPwned);
        setBreaches(data.breaches || []);
        setStatus('result');
      }, 2000);
    } catch (err) {
      console.error("Backend Error:", err);
      setStatus('idle');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-purple-500 font-mono p-6 md:p-10 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="absolute top-8 left-8 z-50">
        <Link href="/">
          <motion.div 
            whileHover={{ x: -5 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="p-2 border border-purple-500/30 rounded-full group-hover:bg-purple-500 group-hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity">Exit Terminal</span>
          </motion.div>
        </Link>
      </div>

      <div className={`w-full max-w-4xl border-2 ${isPwned && status === 'result' ? 'border-red-600 shadow-[0_0_50px_rgba(220,38,38,0.2)]' : 'border-purple-900/50 shadow-[0_0_50px_rgba(168,85,247,0.1)]'} bg-[#120121]/40 backdrop-blur-md p-8 rounded-[40px] transition-all duration-700`}>

        <div className="flex items-center justify-between mb-8 border-b border-purple-900/30 pb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <span className="text-[10px] text-purple-700 uppercase tracking-[0.3em] font-black italic">Kage-OS // Security_Audit</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AttackDemo />
          <DefenseTools />
        </div>

        <div className="space-y-8 bg-black/40 p-8 rounded-[30px] border border-purple-900/20">
          {!access ? (
            <div className="text-center space-y-6">
              <p className="text-sm leading-relaxed text-purple-400 font-bold tracking-widest">
                {text}<span className="animate-pulse">_</span>
              </p>
              {text.length >= fullText.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setAccess(true)}
                  className="px-10 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black transition-all font-black uppercase text-xs rounded-full tracking-widest"
                >
                  Authorize System Scan
                </motion.button>
              )}
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              {status === 'idle' && (
                <div className="flex flex-col gap-6">
                  <div className="space-y-2">
                    <p className="text-[10px] text-purple-700 uppercase tracking-widest ml-2">Deep Web Email Trace</p>
                    <input
                      type="email"
                      placeholder="TARGET@INTERNAL_SERVER.MN"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/50 border border-purple-900/50 rounded-2xl px-6 py-4 outline-none text-purple-400 text-lg focus:border-purple-500 transition-all"
                    />
                  </div>
                  <button
                    onClick={handleScan}
                    className="py-4 bg-purple-900/20 border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-2xl font-black transition-all tracking-[0.3em]"
                  >
                    RUN ANALYSIS
                  </button>
                </div>
              )}

              {status === 'scanning' && (
                <div className="py-12 text-center space-y-6">
                  <div className="relative w-20 h-20 mx-auto">
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-t-2 border-purple-500 rounded-full" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping" />
                    </div>
                  </div>
                  <p className="text-purple-500 animate-pulse tracking-[0.4em] text-[10px] font-black uppercase">Scanning global leak databases...</p>
                </div>
              )}

              {status === 'result' && (
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center space-y-6">
                  {isPwned ? (
                    <div className="space-y-4">
                      <h2 className="text-5xl font-black text-red-600 italic uppercase">Breached</h2>
                      <div className="bg-red-950/20 border border-red-900/40 p-6 rounded-[25px] text-left">
                        <p className="text-[10px] text-red-400 mb-4 underline font-bold tracking-widest uppercase">Data Exposure Sources:</p>
                        <ul className="text-[11px] text-red-500/80 space-y-2">
                          {breaches.map((b, i) => <li key={i} className="flex items-center gap-2"><span>[!]</span> {b}</li>)}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 py-6">
                      <h2 className="text-5xl font-black text-green-500 uppercase italic">Clean</h2>
                      <p className="text-[10px] text-green-800 tracking-widest font-bold">ENCRYPTED // NO TRACES FOUND IN KNOWN REPOSITORIES</p>
                    </div>
                  )}
                  <button onClick={() => setStatus('idle')} className="text-[10px] text-purple-900 hover:text-purple-400 underline transition-colors">INITIATE NEW SESSION</button>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TramaPage;