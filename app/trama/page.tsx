"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

  // Backend-тэй холбогдох функц
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
      
      // Эффект харуулахын тулд 2 секунд хүлээлгэнэ
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
    <div className="min-h-screen bg-black text-red-500 font-mono p-10 flex flex-col items-center justify-center">
      <div className={`w-full max-w-3xl border ${isPwned && status === 'result' ? 'border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.3)]' : 'border-cyan-900 shadow-[0_0_30px_rgba(6,182,212,0.1)]'} bg-gray-900/20 p-6 rounded-lg transition-all duration-500`}>
          
        <div className="flex gap-2 mb-4 border-b border-gray-800 pb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-[10px] ml-2 text-gray-600 uppercase tracking-widest italic">Kage-OS v1.0.2 - Security Module</span>
        </div>

        <div className="space-y-6">
          {!access ? (

            <>
              <p className="text-sm leading-relaxed text-cyan-400">{text}<span className="animate-pulse">_</span></p>
              {text.length >= fullText.length && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4">
                  <button 
                    onClick={() => setAccess(true)}
                    className="px-8 py-2 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all font-bold uppercase text-xs"
                  >
                    Authorize Scanner
                  </button>
                </motion.div>
              )}
            </>
          ) : (

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              {status === 'idle' && (
                <div className="flex flex-col gap-4">
                  <p className="text-xs text-gray-400 uppercase tracking-tighter">Enter target email to check for data breaches:</p>
                  <input 
                    type="email" 
                    placeholder="USER@INTERNAL_MAIL.COM"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border-b border-cyan-500 outline-none text-cyan-300 text-xl py-2"
                  />
                  <button 
                    onClick={handleScan}
                    className="py-3 bg-cyan-900/30 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-black transition-all"
                  >
                    RUN ANALYSIS
                  </button>
                </div>
              )}

              {status === 'scanning' && (
                <div className="py-10 text-center space-y-4">
                  <div className="inline-block w-10 h-10 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-cyan-500 animate-pulse tracking-[0.2em] text-xs">QUERYING GLOBAL DATA BREACH REPOSITORIES...</p>
                </div>
              )}

              {status === 'result' && (
                <motion.div initial={{ y: 20 }} animate={{ y: 0 }} className="text-center space-y-4">
                  {isPwned ? (
                    <>
                      <h2 className="text-4xl font-black text-red-600 animate-pulse uppercase">BREACH DETECTED</h2>
                      <div className="bg-red-950/20 border border-red-900 p-4 rounded text-left">
                        <p className="text-xs text-red-400 mb-2 underline font-bold">KNOWN LEAKS FOUND IN:</p>
                        <ul className="text-[10px] text-red-500/80 list-disc pl-4 uppercase">
                          {breaches.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-4xl font-black text-green-500 uppercase">ENCRYPTED & SAFE</h2>
                      <p className="text-xs text-green-800">NO KNOWN LEAKS DETECTED FOR THIS ENTITY IN PUBLIC DATABASES.</p>
                    </>
                  )}
                  <button onClick={() => setStatus('idle')} className="text-[10px] text-gray-500 hover:text-white underline">NEW SCAN</button>
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