import { Building2, DollarSign, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

export function StudioModel() {
  const models = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Tech-for-Equity",
      description: "We build your MVP and product roadmap in exchange for equity stake in your venture.",
      features: ["Full technical team", "Product strategy", "Go-to-market support", "Ongoing mentorship"]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cash-Funded",
      description: "Traditional development partnership with fixed payments and deliverables.",
      features: ["Fixed-price projects", "Agile development", "Quality assurance", "Post-launch support"]
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Hybrid",
      description: "Combination of cash and equity for large-scale ventures with high growth potential.",
      features: ["Reduced cash investment", "Long-term partnership", "Shared risk & reward", "Strategic guidance"]
    }
  ];

  return (
    <section id="studio" className="py-32 px-6 section-divider">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-8">
            Our Studio <span className="text-purple-400">Model</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Three flexible partnership approaches designed to meet you where you are in your venture journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
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
                {model.icon}
              </div>
              
              <h3 className="font-space-grotesk text-2xl font-bold mb-4">{model.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{model.description}</p>
              
              <ul className="space-y-3">
                {model.features.map((feature, idx) => (
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