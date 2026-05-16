/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section from './Section';
import { Mail, Github, Linkedin, Instagram, Send, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { useState, useRef, FormEvent } from 'react';
import { AnimatePresence } from 'motion/react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call to send message
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real scenario, you'd call an API like:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      setIsSuccess(true);
      formRef.current?.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsSubmitting(false);
    }
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

            <div className="flex flex-wrap gap-4">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px] glass-card flex items-center gap-4 hover:border-neon-purple/50 transition-all py-4">
                <Github className="w-5 h-5 text-white/50" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px] glass-card flex items-center gap-4 hover:border-neon-blue/50 transition-all py-4">
                <Linkedin className="w-5 h-5 text-white/50" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px] glass-card flex items-center gap-4 hover:border-neon-purple/50 transition-all py-4">
                <Instagram className="w-5 h-5 text-white/50" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card border-white/5 relative overflow-hidden"
        >
          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-deep-bg/95 backdrop-blur-md p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-neon-blue/20 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(0,242,255,0.2)]">
                  <Check className="w-8 h-8 text-neon-blue" />
                </div>
                <h4 className="text-xl font-bold mb-2 tracking-tight">TRANSMISSION SUCCESSFUL</h4>
                <p className="text-white/60 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
                  Encryption complete. Your message has been routed to <span className="text-neon-blue font-mono">{PERSONAL_INFO.email}</span>.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 bg-neon-blue text-deep-bg font-bold rounded-lg hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all text-sm uppercase tracking-wider"
                >
                  Return to Terminal
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest pl-1">Name</label>
                <input 
                  required
                  name="user_name"
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-neon-blue/50 transition-all text-sm" 
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest pl-1">Email</label>
                <input 
                  required
                  name="user_email"
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-neon-blue/50 transition-all text-sm" 
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 uppercase tracking-widest pl-1">Message</label>
              <textarea 
                required
                name="message"
                rows={4} 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-neon-blue/50 transition-all text-sm resize-none"
                placeholder="How can I help you today?"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-neon-blue text-deep-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(0,242,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-deep-bg/30 border-t-deep-bg rounded-full animate-spin"></div>
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
