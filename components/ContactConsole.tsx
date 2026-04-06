"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButtun";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactConsole() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const onChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("success");
    setForm(initialForm);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden min-h-screen">
      <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-gray-500 mb-4">
            Secure Channel
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Contact <span className="text-cyan-500">KAGE</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-cyan-500/20 bg-gray-900/10 rounded-2xl backdrop-blur-sm shadow-[0_0_25px_rgba(6,182,212,0.08)]"
          >
            <h2 className="text-white font-black uppercase tracking-widest text-lg mb-6">
              Node Info
            </h2>
            <div className="space-y-5 text-sm font-mono">
              <div>
                <p className="text-gray-500 text-[11px] uppercase tracking-wider">
                  Email
                </p>
                <a
                  href="mailto:EdwardSnowden666@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  EdwardSnowden666@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-[11px] uppercase tracking-wider">
                  Location
                </p>
                <p className="text-gray-300">Bogdiin Muzein Ard, Ulaanbaatar</p>
              </div>
              <div>
                <p className="text-gray-500 text-[11px] uppercase tracking-wider">
                  Response Time
                </p>
                <p className="text-gray-300">Usually within 24 hours</p>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-purple-500/20 bg-gray-900/10 rounded-2xl backdrop-blur-sm shadow-[0_0_25px_rgba(168,85,247,0.08)]"
          >
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={onChange("name")}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-gray-200 outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-gray-200 outline-none focus:border-cyan-500 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={onChange("message")}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-gray-200 outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Type your message..."
                />
              </div>

              <MagneticButton>
                <button
                  type="submit"
                  className="relative rounded-3xl px-8 py-3 bg-transparent border border-purple-500 text-purple-400 font-mono text-xs uppercase tracking-[0.25em] overflow-hidden group transition-all hover:text-white hover:border-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                >
                  <span className="relative z-10 font-black italic">Send message</span>
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-purple-600 to-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
                </button>
              </MagneticButton>
            </form>

            {status === "success" && (
              <div className="mt-5 border border-cyan-500/30 bg-cyan-500/10 rounded-xl p-3 text-cyan-300 text-xs font-mono uppercase tracking-wider">
                Message queued successfully. We will contact you soon.
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
