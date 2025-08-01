import { motion } from "framer-motion";

export function EmpoweringEntrepreneurs() {
  const entrepreneurs = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6" />
        </svg>
      ),
      title: "Consult and Co-create Companies",
      description: "We partner with driven founders to consult on strategy and co-create companies in a collaborative environment, providing expert guidance from ideation to market launch.",
      features: ["Strategic consulting", "Co-creation process", "Market validation", "Launch preparation"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Fund Founders",
      description: "We partner with companies seeking funding, providing capital, expertise, and strategic guidance to accelerate growth and market expansion.",
      features: ["Capital investment", "Growth acceleration", "Strategic guidance", "Market expansion"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Equip Entrepreneurs",
      description: "We provide content, tools, and events to empower the startup community with knowledge, skills, and networks needed to build successful ventures.",
      features: ["Educational content", "Business tools", "Networking events", "Skill development"]
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-8">
            Empowering entrepreneurs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            using cutting edge technology
          </p>
        </div>

        {/* Three Cards matching Studio Model design exactly */}
        <div className="grid md:grid-cols-3 gap-8">
          {entrepreneurs.map((entrepreneur, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                {entrepreneur.icon}
              </div>
              
              <h3 className="font-space-grotesk text-2xl font-bold mb-4">{entrepreneur.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{entrepreneur.description}</p>
              
              <ul className="space-y-3">
                {entrepreneur.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}