/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, FileText, ChevronRight, Terminal as TerminalIcon } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = PERSONAL_INFO.role;
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden grid-bg">
      {/* Animated Glowing Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-neon-blue/30 text-neon-blue text-xs font-mono mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
            </span>
            SYSTEM_STATUS: OPTIMIZED
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 leading-none">
            {PERSONAL_INFO.name.split(' ')[0]} <br />
            <span className="neon-text">{PERSONAL_INFO.name.split(' ')[1]}</span>
          </h1>
          
          <div className="h-12 flex items-center gap-2 mb-6">
            <TerminalIcon className="w-6 h-6 text-neon-blue" />
            <p className="text-xl md:text-2xl font-mono text-white/80">
              {text}<span className="animate-bounce inline-block w-2 h-8 bg-neon-blue ml-1" />
            </p>
          </div>

          <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neon-blue text-deep-bg font-bold rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_40px_rgba(0,242,255,0.5)] transition-all"
            >
              View Projects <ChevronRight className="w-5 h-5" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass border border-white/10 font-bold rounded-xl hover:bg-white/5 transition-all text-white/90"
            >
              Contact Me
            </motion.button>
          </div>

          <div className="mt-12 flex gap-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
              { icon: FileText, href: "#", label: "Resume" }
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center group hover:border-neon-blue/50 transition-all"
                title={social.label}
              >
                <social.icon className="w-5 h-5 text-white/50 group-hover:text-neon-blue transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          {/* Futuristic Terminal Window */}
          <div className="glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 text-center font-mono text-[10px] text-white/30 tracking-widest px-8">
                CHETAN_WORKSPACE_V3.0
              </div>
            </div>
            <div className="p-6 font-mono text-sm space-y-4">
              <div className="flex gap-3">
                <span className="text-neon-purple">&gt;</span>
                <span className="text-white/80">initializing portfolio...</span>
              </div>
              <div className="flex gap-3">
                <span className="text-neon-blue">√</span>
                <span className="text-white/80">Stack: MERN + GenAI loaded</span>
              </div>
              <div className="flex gap-3">
                <span className="text-neon-purple">&gt;</span>
                <span className="text-neon-blue">cat skills.json</span>
              </div>
              <div className="pl-6 text-white/40 leading-relaxed">
                {'{'} <br />
                &nbsp;&nbsp;"backend": ["Node.js", "Express", "Python"],<br />
                &nbsp;&nbsp;"ai": ["LLMs", "RAG", "LangChain"],<br />
                &nbsp;&nbsp;"status": "Building the future"<br />
                {'}'}
              </div>
              <div className="flex gap-3 animate-pulse">
                <span className="text-neon-purple">&gt;</span>
                <span className="w-2 h-5 bg-neon-blue" />
              </div>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-24 h-24 glass rounded-full border border-neon-purple/30 flex items-center justify-center p-4"
          >
            <TerminalIcon className="w-full h-full text-neon-purple opacity-50" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-8 px-4 py-2 glass rounded-lg border border-neon-blue/30 text-[10px] font-mono text-neon-blue"
          >
            ACTIVE_SESSIONS: 450+ DAYS
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
