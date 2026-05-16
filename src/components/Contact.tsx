/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section from './Section';
import { Mail, Github, Linkedin, Send, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" subtitle="07 // CONNECT" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Let's build something <span className="neon-text">intelligent</span>.</h3>
            <p className="text-white/60 leading-relaxed max-w-md">
              Available for collaborations on AI projects, backend architecture, and scalable system design.
            </p>
          </div>

          <div className="space-y-4">
            <div 
              onClick={copyEmail}
              className="group glass-card flex items-center justify-between cursor-pointer hover:border-neon-blue/50 transition-all py-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-neon-blue" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-white/40 uppercase font-mono tracking-widest leading-none mb-1">Email</p>
                  <p className="text-sm font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-white/20 group-hover:text-neon-blue transition-colors" />}
            </div>

            <div className="flex gap-4">
              <a href="#" className="flex-1 glass-card flex items-center gap-4 hover:border-neon-purple/50 transition-all py-4">
                <Github className="w-5 h-5 text-white/50" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href="#" className="flex-1 glass-card flex items-center gap-4 hover:border-neon-blue/50 transition-all py-4">
                <Linkedin className="w-5 h-5 text-white/50" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card border-white/5"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest pl-1">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-neon-blue/50 transition-all text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest pl-1">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-neon-blue/50 transition-all text-sm" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 uppercase tracking-widest pl-1">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-neon-blue/50 transition-all text-sm resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-neon-blue text-deep-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(0,242,255,0.2)]">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
