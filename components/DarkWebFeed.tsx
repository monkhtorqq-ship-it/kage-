"use client";
import { useState } from 'react';

const DarkWebDemo = () => {
  const [isFake, setIsFake] = useState(false);
  return (
    <div className="w-full max-w-md p-6 border border-purple-500/30 bg-gray-900/40 rounded-xl backdrop-blur-sm mx-auto">
      <h3 className="text-purple-500 mb-2 font-black uppercase text-sm">Dark Web Phishing Link</h3>
      <div className="bg-black p-4 rounded border border-gray-800 mb-4">
        <p className="text-[10px] text-blue-400 underline mb-2 cursor-pointer">https://facebook-secure-login.kage.site</p>
        <p className="text-[9px] text-gray-500 italic">Энэ линк бол хуурамч! Хэрэв та энд нууц үгээ бичвэл хакерын "Dark Bible" мэдээллийн санд шууд очно.</p>
      </div>
      <button onClick={() => setIsFake(!isFake)} className="w-full py-2 bg-purple-900/20 border border-purple-500 text-purple-400 text-[10px] hover:bg-purple-500 hover:text-white transition-all uppercase">
        {isFake ? "Hide Hacker's Database" : "View Hacker's Database"}
      </button>
      {isFake && (
        <div className="mt-4 p-2 bg-black border-l-2 border-purple-500 font-mono text-[9px] text-purple-300">
          <p>[RECEIVED] New credentials:</p>
          <p className="text-white">Email: user_test@gmail.com</p>
          <p className="text-white">Pass: password123 (Pwned!)</p>
        </div>
      )}
    </div>
  );
};
export default DarkWebDemo;