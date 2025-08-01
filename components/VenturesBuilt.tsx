import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function VenturesBuilt() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const ventures = [
    {
      name: "Wenzo",
      description: "Digital agency platform connecting African creative talent with global opportunities.",
      category: "Creative Tech",
      status: "Series A",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Domlii",
      description: "PropTech solution revolutionizing real estate transactions across West Africa.",
      category: "PropTech",
      status: "Growth Stage",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Baking Intelligence",
      description: "AI-powered supply chain optimization for food manufacturers and distributors.",
      category: "FoodTech",
      status: "Scaling",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "FinFlow",
      description: "Next-generation payment infrastructure for African cross-border transactions.",
      category: "FinTech",
      status: "Series B",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "EduLink",
      description: "EdTech platform democratizing quality education across rural African communities.",
      category: "EdTech",
      status: "Growth Stage",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop&auto=format"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ventures.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, ventures.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ventures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + ventures.length) % ventures.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Calculate visible slides based on screen size
  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg screens
      if (window.innerWidth >= 640) return 2;  // md screens
      return 1; // sm screens
    }
    return 3; // default
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      id="ventures" 
      className="py-32 px-6 relative section-divider"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-8">
            Ventures We've <span className="text-purple-400">Built</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to scale, we've partnered with exceptional founders to build category-defining ventures across Africa.
          </p>
        </motion.div>

        {/* Custom Carousel */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-purple-500/20 hover:bg-purple-500/40 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center transition-all group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-purple-500/20 hover:bg-purple-500/40 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center transition-all group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ 
                x: `${-currentSlide * (100 / visibleSlides)}%` 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
              style={{ 
                width: `${(ventures.length / visibleSlides) * 100}%` 
              }}
            >
              {ventures.map((venture, index) => (
                <motion.div 
                  key={index} 
                  className="px-4"
                  style={{ 
                    width: `${100 / ventures.length}%` 
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
                      <img 
                        src={venture.image} 
                        alt={venture.name}
                        className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm backdrop-blur-sm border border-purple-400/30">
                          {venture.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="px-3 py-1 bg-emerald-500/30 text-emerald-200 rounded-full text-sm backdrop-blur-sm border border-emerald-400/30">
                          {venture.status}
                        </span>
                      </div>
                      {/* Futuristic hover effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
                    </div>
                    <h3 className="font-space-grotesk text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{venture.name}</h3>
                    <p className="text-gray-300 leading-relaxed">{venture.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Custom Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {ventures.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-white/30 hover:bg-purple-400/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Partner logos rotating carousel */}
        <div className="border-t border-white/10 pt-16">
          <motion.h3 
            className="font-space-grotesk text-center text-2xl font-bold mb-16 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Partner Network
          </motion.h3>
          
          {/* Rotating partner carousel */}
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex space-x-8 py-4"
              animate={{ 
                x: [0, -100 * 12] // Move by the width of all items
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ width: "200%" }}
            >
              {/* First set of partners */}
              {[
                "TechStars", "Y Combinator", "500 Startups", "Partech", "CcHUB", "Ventures Platform",
                "Africa Capital", "TLcom", "4DX Ventures", "Rising Tide Africa", "Kepple Africa", "Savannah Fund"
              ].map((partner, index) => (
                <motion.div 
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-16 w-40 bg-gray-900/30 rounded-lg border border-white/5 hover:border-purple-500/30 transition-all opacity-40 hover:opacity-80"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    backgroundColor: "rgba(147, 51, 234, 0.1)"
                  }}
                >
                  <span className="text-gray-500 font-medium text-sm">{partner}</span>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[
                "TechStars", "Y Combinator", "500 Startups", "Partech", "CcHUB", "Ventures Platform",
                "Africa Capital", "TLcom", "4DX Ventures", "Rising Tide Africa", "Kepple Africa", "Savannah Fund"
              ].map((partner, index) => (
                <motion.div 
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-16 w-40 bg-gray-900/30 rounded-lg border border-white/5 hover:border-purple-500/30 transition-all opacity-40 hover:opacity-80"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    backgroundColor: "rgba(147, 51, 234, 0.1)"
                  }}
                >
                  <span className="text-gray-500 font-medium text-sm">{partner}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
          </div>
          
          {/* Secondary rotating row in opposite direction */}
          <div className="relative overflow-hidden mt-6">
            <motion.div 
              className="flex space-x-8 py-4"
              animate={{ 
                x: [-100 * 8, 0] // Move in opposite direction
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ width: "200%" }}
            >
              {/* Additional partners for second row */}
              {[
                "Plug and Play", "Founder Factory", "Seedcamp", "APO Group", "GSMA", "Microsoft", 
                "Google for Startups", "Amazon Web Services"
              ].map((partner, index) => (
                <motion.div 
                  key={`third-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-16 w-40 bg-gray-900/20 rounded-lg border border-white/5 hover:border-cyan-500/30 transition-all opacity-30 hover:opacity-70"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    backgroundColor: "rgba(34, 197, 94, 0.1)"
                  }}
                >
                  <span className="text-gray-600 font-medium text-sm">{partner}</span>
                </motion.div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {[
                "Plug and Play", "Founder Factory", "Seedcamp", "APO Group", "GSMA", "Microsoft", 
                "Google for Startups", "Amazon Web Services"
              ].map((partner, index) => (
                <motion.div 
                  key={`fourth-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-16 w-40 bg-gray-900/20 rounded-lg border border-white/5 hover:border-cyan-500/30 transition-all opacity-30 hover:opacity-70"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    backgroundColor: "rgba(34, 197, 94, 0.1)"
                  }}
                >
                  <span className="text-gray-600 font-medium text-sm">{partner}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}