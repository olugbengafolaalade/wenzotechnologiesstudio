import { motion } from "framer-motion";
import { AnimatedBackground } from "./AnimatedBackground";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20">
      {/* Animated stars background */}
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div 
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-3 sm:px-4 py-2 mt-8 sm:mt-10 bg-purple-500/20 text-purple-300 rounded-full text-xs sm:text-sm mb-4 sm:mb-6 border border-purple-400/30"
            whileHover={{ scale: 1.05, glowIntensity: 1.2 }}
          >
            Africa's Venture Studio for the World
          </motion.span>
        </motion.div>
        
        <motion.h1 
          className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 sm:mb-12 leading-tight px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We build world-class
          <br />
          <motion.span 
            className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            digital ventures
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We partner with founders and enterprises to build future-ready tech ventures that compete globally while driving African innovation forward.
        </motion.p>

        {/* Statistics */}
        <motion.div 
          className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: "15+", label: "Ventures Built" },
            { value: "8", label: "Countries" },
            { value: "$5M+", label: "Raised by Clients" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2"
                whileHover={{
                  textShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                {stat.value}
              </motion.div>
              <motion.div 
                className="text-gray-400 text-xs sm:text-sm"
                whileHover={{
                  y: -2,
                  transition: { 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }
                }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="flex justify-center pb-8 sm:pb-10 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.a 
            href="https://tally.so/r/wbQ1Y1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-space-grotesk font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25 max-w-xs sm:max-w-none text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Studio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}