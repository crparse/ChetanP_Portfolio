/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  return (
    <Section id="projects" subtitle="03 // PORTFOLIO" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative glass-card p-0 overflow-hidden border-white/5"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-bg to-transparent opacity-80" />
              
              <div className="absolute top-4 right-4 flex gap-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center hover:bg-white hover:text-deep-bg transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center hover:bg-neon-blue hover:text-deep-bg transition-all hover:border-neon-blue">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-neon-blue/10 border border-neon-blue/20">
                  <Code2 className="w-4 h-4 text-neon-blue" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-white/60 mb-6 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono font-bold tracking-widest text-neon-blue uppercase px-2 py-1 rounded bg-neon-blue/5 border border-neon-blue/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                {project.features.slice(0, 2).map((feat, idx) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-white/40">
                    <span className="w-1 h-1 rounded-full bg-neon-blue" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 text-center"
      >
        <button className="px-8 py-4 rounded-xl glass border border-white/10 text-white/60 hover:text-neon-blue hover:border-neon-blue/30 transition-all font-mono text-sm tracking-tighter uppercase">
          [ LOAD_MORE_PROJECTS ]
        </button>
      </motion.div>
    </Section>
  );
}
