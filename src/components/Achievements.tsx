/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section from './Section';
import { ACHIEVEMENTS } from '../constants';

export default function Achievements() {
  return (
    <Section id="achievements" className="bg-white/2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {ACHIEVEMENTS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card text-center group py-10"
          >
            <div className="w-16 h-16 rounded-full bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-neon-blue/20 transition-all duration-500">
              <stat.icon className="w-8 h-8 text-neon-blue" />
            </div>
            <h3 className="text-4xl font-extrabold mb-2 tracking-tighter neon-text">{stat.value}</h3>
            <p className="text-white/50 text-sm font-mono uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
