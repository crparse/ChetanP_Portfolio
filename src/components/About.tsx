/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { Brain, Cpu, Database, Rocket } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Database, label: "Backend Architecture", color: "text-blue-400" },
    { icon: Brain, label: "Generative AI", color: "text-purple-400" },
    { icon: Cpu, label: "System Design", color: "text-cyan-400" },
    { icon: Rocket, label: "Full Stack MERN", color: "text-orange-400" },
  ];

  return (
    <Section id="about" subtitle="01 // INTRO" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="prose prose-invert prose-lg">
            <p className="text-white/80 leading-relaxed whitespace-pre-line">
              {PERSONAL_INFO.about}
            </p>
            <div className="mt-8 p-6 glass-card border-neon-blue/20">
              <h4 className="flex items-center gap-2 text-neon-blue font-bold mb-2">
                <Rocket className="w-5 h-5" /> Currently Building
              </h4>
              <p className="text-white/60 font-mono text-sm italic">
                "{PERSONAL_INFO.building}"
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col items-center justify-center p-8 text-center group cursor-default"
            >
              <div className={`p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all ${item.color}`}>
                <item.icon className="w-8 h-8" />
              </div>
              <p className="text-sm font-semibold text-white/70 uppercase tracking-wider">
                {item.label}
              </p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 glass-card border-neon-purple/20 bg-neon-purple/5 mt-4 text-center py-8"
          >
            <h3 className="text-2xl font-bold mb-2 neon-text">Always Learning</h3>
            <p className="text-white/60 text-sm">
              Deeply interested in Scalable Systems, AI Engineering, and Developer Productivity Tools.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
