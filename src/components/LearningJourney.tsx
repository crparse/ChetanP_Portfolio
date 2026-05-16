/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section from './Section';
import { LEARNING_PATH } from '../constants';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function LearningJourney() {
  return (
    <Section id="learning" subtitle="06 // EVOLUTION" title="Specialized Learning Path">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {LEARNING_PATH.map((path, i) => (
          <motion.div
            key={path.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <div className="glass-card h-full border-neon-purple/20 bg-neon-purple/5">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-neon-purple" />
                <h3 className="text-xl font-bold">{path.title}</h3>
              </div>
              
              <ul className="space-y-4">
                {path.children.map((item, idx) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-neon-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-white/70 text-sm group-hover:text-white transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
