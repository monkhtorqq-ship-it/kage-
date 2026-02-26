"use client";
import { useState, useEffect } from 'react';

const NetworkMonitor = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const startSniffing = () => {
    setIsScanning(true);
    setLogs([]);
    const messages = [
      "[!] Шинэ төхөөрөмж илэрлээ: iPhone 15 Pro",
      "[?] Нээлттэй порт олдлоо: Port 80 (HTTP)",
      "[*] Хэрэглэгчийн IP: 192.168.1.45",
      "[!] СЭРЭМЖЛҮҮЛЭГ: Нууцлалгүй WiFi ашиглаж байна",
      "[!] Юүлэгдэж буй дата: Facebook Login Packet...",
      "[*] Байршил илэрлээ: Ulaanbaatar, Mongolia",
      "[DONE] Халдлага хийх 3 боломжит цэг олдлоо."
    ];

    messages.forEach((msg, i) => {
      setTimeout(() => {
        setLogs(prev => [...prev, msg]);
        if (i === messages.length - 1) setIsScanning(false);
      }, i * 800);
    });
  };

  return (
    <div className="w-full max-w-sm p-6 border border-yellow-500/30 bg-black rounded-xl font-mono text-[10px] shadow-[0_0_20px_rgba(234,179,8,0.05)]">
      <h3 className="text-yellow-500 mb-4 font-black uppercase tracking-widest flex items-center gap-2">
        <span className="animate-pulse">●</span> Public WiFi Sniffer
      </h3>
      
      <div className="bg-gray-950 border border-gray-900 p-4 rounded-lg mb-4 h-40 overflow-y-auto space-y-2 scrollbar-hide">
        {logs.length === 0 && !isScanning && (
          <p className="text-gray-600 italic text-center mt-10">
            Нийтийн WiFi-д холбогдсон үед таны мэдээлэл яаж харагддагийг үзэх үү?
          </p>
        )}
        {logs.map((log, i) => (
          <p key={i} className={`${log.includes('[!]') ? 'text-red-500' : 'text-yellow-500/80'} leading-tight`}>
            {log}
          </p>
        ))}
        {isScanning && <span className="inline-block w-2 h-4 bg-yellow-500 animate-bounce ml-1" />}
      </div>

      <button 
        onClick={startSniffing}
        disabled={isScanning}
        className={`w-full py-3 border transition-all font-bold uppercase tracking-tighter ${
          isScanning 
          ? "border-gray-700 text-gray-700 cursor-not-allowed" 
          : "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black shadow-[0_0_15px_rgba(234,179,8,0.2)]"
        }`}
      >
        {isScanning ? "SNIFFING PACKETS..." : "SCAN PUBLIC NETWORK"}
      </button>

      <p className="mt-4 text-gray-500 text-center leading-tight">
        <span className="text-red-500 font-bold">СЭРЭМЖЛҮҮЛЭГ:</span> VPN-гүйгээр нийтийн WiFi ашиглах нь таны нууц үг, байршлыг хакеруудад шууд бэлэглэж буй хэрэг юм.
      </p>
    </div>
  );
};

export default NetworkMonitor;