import { Lightbulb, Building } from "lucide-react";

export function WhoWeWorkWith() {
  return (
    <section className="py-32 px-6 bg-gray-900/30 section-divider">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-8">
            Who We <span className="text-purple-400">Work With</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We partner with visionary founders and forward-thinking enterprises to build the future of African technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-8 mx-auto">
              <Lightbulb className="w-10 h-10" />
            </div>
            <h3 className="font-space-grotesk text-3xl font-bold mb-6">Founders with Startup Ideas</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Early-stage entrepreneurs with compelling visions who need technical expertise, product development, and strategic guidance to bring their ideas to life.
            </p>
            <ul className="text-center space-y-3 text-gray-400">
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Pre-seed to Series A startups
              </li>
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Tech-enabled business models
              </li>
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Pan-African market focus
              </li>
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Growth-oriented mindset
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-8 mx-auto">
              <Building className="w-10 h-10" />
            </div>
            <h3 className="font-space-grotesk text-3xl font-bold mb-6">Established Businesses</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Companies looking to digitally transform, launch new tech products, or expand into African markets through innovative technology solutions.
            </p>
            <ul className="text-center space-y-3 text-gray-400">
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Digital transformation projects
              </li>
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                New product development
              </li>
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Market expansion initiatives
              </li>
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Innovation partnerships
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-24">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-12 max-w-4xl mx-auto backdrop-blur-sm">
            <h4 className="font-space-grotesk text-2xl font-bold mb-6 text-white">Collaborative Partnership Approach</h4>
            <p className="text-gray-300 leading-relaxed text-lg">
              We don't just build products – we become your technical co-founders. Our collaborative approach ensures knowledge transfer, sustainable growth, and long-term success for every venture we support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}