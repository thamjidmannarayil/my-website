import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function DynamicBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" style={{ backgroundColor: 'var(--theme-primary)' }}>
      {/* Base gradient based on theme */}
      <div 
        className="absolute inset-0 opacity-90 transition-colors duration-500"
        style={{ background: 'linear-gradient(to bottom right, var(--theme-primary), var(--theme-tertiary))' }}
      ></div>
      
      {/* Mesh Gradients with Framer Motion for smooth, slow movement */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 50, -50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] rounded-full filter blur-[120px]"
          style={{ background: 'radial-gradient(circle, var(--theme-accent) 0%, transparent 60%)' }}
        />
        <motion.div 
          animate={{
            x: [0, -60, 40, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full filter blur-[140px]"
          style={{ background: 'radial-gradient(circle, var(--theme-secondary) 0%, transparent 60%)' }}
        />
        <motion.div 
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -60, 40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-[20%] left-[10%] w-[80vw] h-[80vw] rounded-full filter blur-[150px]"
          style={{ background: 'radial-gradient(circle, var(--theme-text-muted) 0%, transparent 60%)' }}
        />
      </div>
      
      {/* Dotted Grid Texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'radial-gradient(var(--theme-text-muted) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.15
        }}>
      </div>
    </div>
  );
}
