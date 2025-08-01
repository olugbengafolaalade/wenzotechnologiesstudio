"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black"></div>
      
      {/* Subtle floating particles throughout the page */}
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={`page-particle-${i}`}
          className="absolute w-0.5 h-0.5 bg-white/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 200}%`, // Extend beyond viewport height
          }}
          animate={{
            y: [0, -200, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 12,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Large flowing orbs that span the page */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"
        style={{
          left: "10%",
          top: "20%",
        }}
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] bg-pink-500/8 rounded-full blur-3xl"
        style={{
          right: "10%",
          top: "60%",
        }}
        animate={{
          x: [0, -150, 80, 0],
          y: [0, 120, -60, 0],
          scale: [1, 0.7, 1.2, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />

      {/* Geometric grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Subtle scanning lines */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
        animate={{
          y: ['-100vh', '200vh'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}