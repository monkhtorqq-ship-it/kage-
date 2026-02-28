"use client";
import { useState } from 'react';

const morseCodeMap: { [key: string]: string } = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', '0': '-----', ' ': '/'
};

const reverseMorseMap = Object.fromEntries(
  Object.entries(morseCodeMap).map(([key, value]) => [value, key])
);

const SecureEncryptor = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const encodeToMorse = () => {
    const encoded = input.toUpperCase().split('')
      .map(char => morseCodeMap[char] || char)
      .join(' ');
    setResult(encoded);
  };

  const decodeFromMorse = () => {
    const decoded = input.trim().split(' ')
      .map(code => reverseMorseMap[code] || '?')
      .join('');
    setResult(decoded);
  };

  return (
    <div className="w-full max-w-sm p-6 border border-purple-500/30 bg-black rounded-xl font-mono shadow-[0_0_15px_rgba(168,85,247,0.1)]">
      <h3 className="text-purple-500 mb-4 font-black uppercase text-xs tracking-widest">
        [ MORSE_CODE_PROTOCOL ]
      </h3>
      
      <textarea 
        onChange={(e) => setInput(e.target.value)}
        className="w-full bg-gray-900 border border-gray-800 p-3 text-purple-200 text-[11px] outline-none h-24 mb-4 rounded focus:border-purple-500 transition-all"
        placeholder="ТЕКСТ ЭСВЭЛ МОРЗ КОДОО ЭНД БИЧ..."
      />

      <div className="grid grid-cols-2 gap-3 mb-4">
        <button 
          onClick={encodeToMorse}
          className="py-2 bg-purple-900/20 border border-purple-500 text-purple-400 text-[10px] font-bold uppercase hover:bg-purple-500 hover:text-white transition-all"
        >
          To Morse (..-.)
        </button>
        <button 
          onClick={decodeFromMorse}
          className="py-2 bg-gray-800 border border-gray-700 text-gray-400 text-[10px] font-bold uppercase hover:bg-gray-400 hover:text-black transition-all"
        >
          From Morse (TEXT)
        </button>
      </div>

      {result && (
        <div className="p-3 bg-black/80 border border-dashed border-purple-900 rounded overflow-hidden">
          <p className="text-[9px] text-gray-600 mb-2 uppercase tracking-tighter italic">Converted Output:</p>
          <p className="text-purple-400 text-sm break-all font-bold tracking-widest leading-relaxed">
            {result}
          </p>
        </div>
      )}

      <p className="text-[8px] text-gray-600 mt-4 text-center italic uppercase leading-tight">
        * Морз кодыг тайлахдаа тэмдэгт хооронд нэг зай авна уу.
      </p>
    </div>
  );
};

export default SecureEncryptor;