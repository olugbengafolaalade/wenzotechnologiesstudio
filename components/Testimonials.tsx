import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      quote: "They go beyond what I've asked for and helped us think through our design process to form our core business operations to empower Black graduates",
      author: "Toran",
      title: "Operation Strategist @ SoulC",
      location: "Georgia, USA",
      avatar: "T"
    },
    {
      quote: "Our design process was very patchy and impromptu before we met Wenzo. They helped us build a solid design system and integrated an Open AI ChatGPT to our app. This helped conversions",
      author: "Orode",
      title: "CEO @ Direct Impact",
      location: "London, UK",
      avatar: "O"
    },
    {
      quote: "Guided us to the right design strategy, and the right workflows. This helped us design and develop our food delivery app",
      author: "Paul",
      title: "Co Founder @ Domlii",
      location: "Abidjan, CI",
      avatar: "P"
    }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Stats and Info */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h2 className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                We've designed products used by over{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  10 million+ users.
                </span>
              </h2>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">4.5 out of 5</div>
                <div className="text-gray-400 text-sm">based on reviews</div>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-semibold">
                    T
                  </div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-semibold">
                    O
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-semibold">
                    P
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-bold">
                    24
                  </div>
                </div>
                <div>
                  <div className="font-semibold">150+ people</div>
                  <div className="text-gray-400 text-sm">We've worked with</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Testimonials */}
          <motion.div
            className="order-1 lg:order-2 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                whileHover={{ y: -2, scale: 1.02 }}
              >
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-space-grotesk font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.title}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}