export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="https://cdn.prod.website-files.com/64f726804adf9e5a7ea7a617/688d336ca98c3b9e33132017_logowenzo.png" 
                alt="Wenzo Technologies"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </a>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#studio" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Studio Model</a>
            <a href="/careers" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Careers</a>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <a 
              href="https://tally.so/r/wbQ1Y1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base hidden sm:block"
            >
              Message us
            </a>
            <a 
              href="https://tally.so/r/wbQ1Y1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <span className="text-white text-xs sm:text-sm">→</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}