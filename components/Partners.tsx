import { motion } from "framer-motion";
import hoaqLogo from "figma:asset/0341bcd4160adcbfbd899afaf642fc8cec8b2c4f.png";
import chanzoLogo from "figma:asset/78b57108c9f0d89b512afb17074d39ece1b6dc3e.png";
import cloudPlexoLogo from "figma:asset/272e7009a4d2c3fec74265ac83a0e71becf7efd8.png";

export function Partners() {
  // Mix of logo components and text partners
  const partnerLogos = [
    { type: "image", src: hoaqLogo, alt: "Hoaq", name: "Hoaq" },
    { type: "image", src: chanzoLogo, alt: "Chanzo Capital", name: "Chanzo Capital" },
    { type: "image", src: cloudPlexoLogo, alt: "CloudPlexo", name: "CloudPlexo" },
  ];

  const textPartners = [
    "TechStars", "Y Combinator", "500 Startups", "Partech", "CcHUB", "Ventures Platform",
    "Africa Capital", "TLcom", "4DX Ventures", "Rising Tide Africa", "Kepple Africa", "Savannah Fund"
  ];

  const secondRowPartners = [
    "Plug and Play", "Founder Factory", "Seedcamp", "APO Group", "GSMA", "Microsoft", 
    "Google for Startups", "Amazon Web Services"
  ];

  // Combine logos and text for first row
  const firstRowItems = [
    ...partnerLogos,
    ...textPartners.slice(0, 9).map(name => ({ type: "text", name }))
  ];

  const secondRowItems = secondRowPartners.map(name => ({ type: "text", name }));

  const renderPartnerItem = (item: any, index: number, keyPrefix: string) => {
    const baseClasses = "flex-shrink-0 flex items-center justify-center h-12 sm:h-14 md:h-16 w-32 sm:w-36 md:w-40 bg-gray-800/50 hover:bg-gray-700/70 rounded-lg border border-white/20 hover:border-purple-400/50 transition-all";
    
    if (item.type === "image") {
      return (
        <motion.div 
          key={`${keyPrefix}-${index}`}
          className={`${baseClasses} p-2 sm:p-3`}
          whileHover={{ 
            scale: 1.05,
            y: -5,
            backgroundColor: "rgba(147, 51, 234, 0.2)",
            borderColor: "rgba(147, 51, 234, 0.6)"
          }}
        >
          <img 
            src={item.src} 
            alt={item.alt}
            className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all"
          />
        </motion.div>
      );
    }

    return (
      <motion.div 
        key={`${keyPrefix}-${index}`}
        className={baseClasses}
        whileHover={{ 
          scale: 1.05,
          y: -5,
          backgroundColor: "rgba(147, 51, 234, 0.2)",
          borderColor: "rgba(147, 51, 234, 0.6)"
        }}
      >
        <span className="text-gray-300 hover:text-white font-medium text-xs sm:text-sm transition-colors">{item.name}</span>
      </motion.div>
    );
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative section-divider">
      <div className="max-w-7xl mx-auto">
        {/* Partner logos rotating carousel */}
        <div className="border-t border-white/20 pt-12 sm:pt-16">
          <motion.h3 
            className="font-space-grotesk text-center text-xl sm:text-2xl font-bold mb-12 sm:mb-16 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Partner Network
          </motion.h3>
          
          {/* Rotating partner carousel - First Row */}
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex space-x-4 sm:space-x-6 md:space-x-8 py-4"
              animate={{ 
                x: [0, -100 * firstRowItems.length] // Move by the width of all items
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ width: "200%" }}
            >
              {/* First set of partners */}
              {firstRowItems.map((item, index) => renderPartnerItem(item, index, "first"))}
              
              {/* Duplicate set for seamless loop */}
              {firstRowItems.map((item, index) => renderPartnerItem(item, index, "second"))}
            </motion.div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
          </div>
          
          {/* Secondary rotating row in opposite direction */}
          <div className="relative overflow-hidden mt-4 sm:mt-6">
            <motion.div 
              className="flex space-x-4 sm:space-x-6 md:space-x-8 py-4"
              animate={{ 
                x: [-100 * secondRowItems.length, 0] // Move in opposite direction
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ width: "200%" }}
            >
              {/* Additional partners for second row */}
              {secondRowItems.map((item, index) => (
                <motion.div 
                  key={`third-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-12 sm:h-14 md:h-16 w-32 sm:w-36 md:w-40 bg-gray-800/40 hover:bg-gray-700/60 rounded-lg border border-white/15 hover:border-cyan-400/50 transition-all"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    backgroundColor: "rgba(34, 197, 94, 0.2)",
                    borderColor: "rgba(34, 197, 94, 0.6)"
                  }}
                >
                  <span className="text-gray-400 hover:text-gray-200 font-medium text-xs sm:text-sm transition-colors">{item.name}</span>
                </motion.div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {secondRowItems.map((item, index) => (
                <motion.div 
                  key={`fourth-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-12 sm:h-14 md:h-16 w-32 sm:w-36 md:w-40 bg-gray-800/40 hover:bg-gray-700/60 rounded-lg border border-white/15 hover:border-cyan-400/50 transition-all"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    backgroundColor: "rgba(34, 197, 94, 0.2)",
                    borderColor: "rgba(34, 197, 94, 0.6)"
                  }}
                >
                  <span className="text-gray-400 hover:text-gray-200 font-medium text-xs sm:text-sm transition-colors">{item.name}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}