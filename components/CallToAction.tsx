import { motion } from "motion/react";

export function CallToAction() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div 
            className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                Have a venture?
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Let's build it together.
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                Join the next generation of African entrepreneurs building world-class technology ventures. Whether you have an idea or an established business ready to scale, we're here to make it happen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <a 
                  href="https://tally.so/r/wbQ1Y1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-lg sm:text-xl font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 text-center"
                >
                  Submit a Project
                </a>
                <a 
                  href="https://tally.so/r/wbQ1Y1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border border-white/20 rounded-xl text-lg sm:text-xl font-semibold text-white hover:bg-white/10 transition-all text-center"
                >
                  Join the Studio
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center sm:justify-start mb-4">
                <img 
                  src="https://cdn.prod.website-files.com/64f726804adf9e5a7ea7a617/688d336ca98c3b9e33132017_logowenzo.png" 
                  alt="Wenzo Technologies"
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-center sm:text-left leading-relaxed">
                Africa's premiere venture studio building the future of technology.
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Studio</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Our Model</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Partners</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">For Founders</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Enterprises</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="mailto:business@wenzotech.com" className="hover:text-white transition-colors">business@wenzotech.com</a></li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/wenzotechnologies" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-center sm:justify-start space-x-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/wenzotechnologies" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-center sm:justify-start space-x-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.tiktok.com/@wenzotechnologies" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-center sm:justify-start space-x-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 0 1-3.86 3.86 3.81 3.81 0 0 1-3.86-3.86V2H4.94v5.73a5.94 5.94 0 0 0 5.93 5.93 5.94 5.94 0 0 0 5.93-5.93V6.69h.02c.38.01.74.03 1.09.08.28.04.56.1.84.18.26.07.52.16.77.26.24.1.47.21.69.34.21.12.4.26.58.4.17.14.33.29.47.45.13.15.25.31.35.48.1.16.18.33.24.51.06.17.1.35.12.53.02.18.02.36 0 .54-.02.18-.06.35-.12.53-.06.17-.14.34-.24.5-.1.17-.22.33-.35.48-.14.16-.3.31-.47.45-.18.14-.37.28-.58.4-.22.13-.45.24-.69.34-.25.1-.51.19-.77.26-.28.08-.56.14-.84.18-.35.05-.71.07-1.09.08z"/>
                    </svg>
                    <span>TikTok</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.facebook.com/wenzotechnologies" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-center sm:justify-start space-x-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2025 Wenzo Technologies. Building African excellence for the world.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}