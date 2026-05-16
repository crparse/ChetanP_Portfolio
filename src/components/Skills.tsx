/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';

export default function Skills() {
  return (
    <Section id="skills" subtitle="02 // EXPERTISE" title="Technical Arsenal">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center">
                <category.icon className="w-6 h-6 text-neon-blue" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-white/50 hover:bg-neon-blue/10 hover:text-neon-blue hover:border-neon-blue/30 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Background design element */}
            <div className="absolute top-4 right-4 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity">
              <category.icon className="w-24 h-24" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
