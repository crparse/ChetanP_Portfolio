/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <Section id="experience" subtitle="04 // TIMELINE" title="Career Journey">
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent opacity-30 transform md:-translate-x-1/2" />

        <div className="space-y-16">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative flex items-center justify-between flex-col md:flex-row gap-8 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot on line */}
              <div className="absolute left-0 md:left-1/2 top-2 md:top-8 w-4 h-4 rounded-full bg-deep-bg border-4 border-neon-blue transform -translate-x-1/2 z-10" />

              <div className="w-full md:w-[45%]">
                <div className="glass-card group hover:border-neon-purple/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue text-xs font-mono">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </span>
                    <Briefcase className="w-5 h-5 text-white/20 group-hover:text-neon-blue transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-neon-blue font-mono text-sm mb-4">{exp.company}</p>
                  
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    {exp.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs text-white/50">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neon-purple shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Spacer for MD screens */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
