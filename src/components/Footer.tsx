/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 relative bg-deep-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center">
            <Terminal className="w-5 h-5 text-neon-blue" />
          </div>
          <span className="font-mono font-bold tracking-tighter text-sm">
            CHETAN<span className="text-neon-blue">_</span>PARSE
          </span>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/40 text-xs font-mono tracking-widest uppercase flex items-center gap-2">
            Build with <Heart className="w-3 h-3 text-red-500 animate-pulse" /> & AI by Chetan Parse
          </p>
          <p className="text-white/20 text-[10px] font-mono whitespace-pre italic">
            © 2026 INTERNAL_VERSION_4.2.0
          </p>
        </div>

        <div className="flex gap-6">
          <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase tracking-widest text-white/40 hover:text-neon-blue transition-colors">GitHub</a>
          <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase tracking-widest text-white/40 hover:text-neon-blue transition-colors">LinkedIn</a>
          <a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase tracking-widest text-white/40 hover:text-neon-blue transition-colors">Instagram</a>
        </div>
      </div>
      
      {/* Decorative pulse at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-neon-blue/30 blur-sm" />
    </footer>
  );
}
