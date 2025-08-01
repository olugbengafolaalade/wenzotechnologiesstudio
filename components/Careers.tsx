import { motion } from "motion/react";

export function Careers() {
  return (
    <section id="careers" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Build the future of African technology with us. We're looking for passionate individuals who want to make a meaningful impact.
          </p>
        </motion.div>

        {/* CTA to Careers Page */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for talented individuals who are passionate about building the future of African technology. Join our team of innovators, creators, and entrepreneurs making a meaningful impact across the continent.
            </p>
            <motion.a
              href="/careers"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-lg font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't see a role that fits? We're always interested in connecting with talented individuals who share our vision. 
            <a 
              href="https://tally.so/r/wbQ1Y1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors ml-1"
            >
              Get in touch
            </a> to explore opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}