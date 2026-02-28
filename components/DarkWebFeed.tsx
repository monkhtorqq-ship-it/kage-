"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DarkWebDemo = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isHacked, setIsHacked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsHacked(true);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md p-8 border border-red-500/20 bg-gray-950 rounded-2xl shadow-2xl mx-auto font-sans relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/5 blur-[50px] rounded-full" />
      
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-red-500 font-black uppercase text-xs tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          Live Phishing Lab
        </h3>
        <span className="text-[10px] text-gray-500 font-mono">STATUS: ACTIVE</span>
      </div>

      <div className="bg-white/5 p-5 rounded-xl border border-white/10 mb-6 backdrop-blur-md">
        <p className="text-[10px] text-blue-400 underline mb-4 truncate font-mono">
          https://facebook-secure-login.kage.site/auth
        </p>
        
        <form onSubmit={handleLogin} className="space-y-3">
          <input 
            type="text" 
            placeholder="Email or Phone" 
            className="w-full bg-black/40 border border-gray-700 p-2 text-xs rounded outline-none focus:border-blue-500 transition-all text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full bg-black/40 border border-gray-700 p-2 text-xs rounded outline-none focus:border-blue-500 transition-all text-white"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
          <button 
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded transition-all flex justify-center items-center"
          >
            {loading ? <span className="animate-spin border-2 border-white/30 border-t-white rounded-full w-4 h-4" /> : "Log In"}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {isHacked && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 overflow-hidden"
          >
            <div className="p-4 bg-black border-l-2 border-red-600 font-mono text-[10px] text-red-400">
              <div className="flex justify-between mb-2 border-b border-red-900/30 pb-1">
                <span className="text-red-500 font-bold">[!] DATA INTERCEPTED</span>
                <span className="text-gray-500">IP: 103.11.192.1</span>
              </div>
              <p className="animate-pulse"># Sniffing packets...</p>
              <p className="text-green-400">{`> Decrypted Email: ${email || "unknown"}`}</p>
              <p className="text-green-400">{`> Decrypted Pass: ${pass || "********"}`}</p>
              <p className="mt-2 text-white bg-red-900/50 px-2 py-1 inline-block rounded">
                RESULT: ACCOUNT PWNED!
              </p>
              
              <button 
                onClick={() => {setIsHacked(false); setEmail(''); setPass('');}}
                className="mt-4 block w-full text-center text-gray-500 hover:text-white transition-colors"
              >
                [ Clear Logs ]
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-[9px] text-gray-600 mt-4 italic text-center leading-tight">
        * Анхаар: Энэ бол зөвхөн сургалтын зориулалттай демо юм. <br/> Таны оруулсан мэдээллийг бид хадгалдаггүй.
      </p>
    </div>
  );
};

export default DarkWebDemo;