

import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({ children, delay = 0, y = 28, className, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}>
      
      {children}
    </motion.div>);

}

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

// Word-by-word text reveal for headings
export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const words = text.split(' ');
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) =>
      <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
          className="inline-block"
          initial={{ y: '110%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.85,
            delay: delay + i * 0.07,
            ease: [0.16, 1, 0.3, 1]
          }}>
          
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      )}
    </span>);

}