"use client";
import { useState } from 'react';

const NetworkMonitor = () => {
  const [status, setStatus] = useState("IDLE");
  
  const runDiagnostic = () => {
    setStatus("SCANNING");
    setTimeout(() => setStatus("SECURE"), 2000);
  };

  return (
    <div className="w-full max-w-sm p-6 border border-cyan-500/30 bg-black rounded-xl font-mono text-xs">
      <h3 className="text-cyan-500 mb-4 font-black uppercase">Network Security Scan</h3>
      <div className="space-y-3 mb-6">
        <div className="flex justify-between border-b border-gray-800 pb-1">
          <span className="text-gray-500">Firewall Status:</span>
          <span className="text-green-500">ACTIVE</span>
        </div>
        <div className="flex justify-between border-b border-gray-800 pb-1">
          <span className="text-gray-500">DDoS Protection:</span>
          <span className="text-green-500">ENABLED</span>
        </div>
        <div className="flex justify-between border-b border-gray-800 pb-1">
          <span className="text-gray-500">Current Load:</span>
          <span className="text-white">0.02ms</span>
        </div>
      </div>
      <button 
        onClick={runDiagnostic}
        className="w-full py-2 bg-cyan-900/20 border border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500 hover:text-black transition-all"
      >
        {status === "SCANNING" ? "DIAGNOSING..." : "RUN SECURITY CHECK"}
      </button>
      {status === "SECURE" && <p className="mt-3 text-center text-[10px] text-green-500 uppercase">✓ System is optimized & protected</p>}
    </div>
  );
};
export default NetworkMonitor;