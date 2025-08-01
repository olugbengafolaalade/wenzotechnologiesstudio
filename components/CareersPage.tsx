import { motion } from "motion/react";

export function CareersPage() {
  const jobs = [
    {
      title: "Software Developer",
      location: "Remote",
      type: "Full-time",
      level: "Mid-Senior",
      applyUrl: "https://tally.so/r/wbQ1Y1",
      description: "Join our engineering team to build cutting-edge technology solutions that power the next generation of African ventures. You'll work on scalable web applications, mobile platforms, and innovative tech products.",
      responsibilities: [
        "Develop and maintain web applications using modern frameworks",
        "Collaborate with designers and product managers",
        "Write clean, testable, and maintainable code",
        "Participate in code reviews and technical discussions",
        "Contribute to architectural decisions"
      ],
      requirements: [
        "3+ years of software development experience",
        "Proficiency in React, TypeScript, and Node.js",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Strong problem-solving and communication skills",
        "Passion for African tech ecosystem"
      ]
    },
    {
      title: "Product Designer",
      location: "Remote",
      type: "Full-time", 
      level: "Mid-Senior",
      applyUrl: "https://tally.so/r/wbQ1Y1",
      description: "Shape the user experience of revolutionary African tech products. You'll lead design initiatives from concept to launch, working closely with founders and development teams to create intuitive, beautiful interfaces.",
      responsibilities: [
        "Lead end-to-end design process from research to implementation",
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with engineering teams on design implementation",
        "Maintain and evolve design systems"
      ],
      requirements: [
        "3+ years of product design experience",
        "Proficiency in Figma, Adobe Creative Suite",
        "Strong portfolio showcasing UX/UI design work",
        "Experience with design systems and prototyping",
        "Understanding of mobile-first design principles"
      ]
    },
    {
      title: "State Venture Partner",
      location: "Africa-wide",
      type: "Partnership", 
      level: "Senior",
      applyUrl: "https://tally.so/r/wk8p4j",
      description: "We're looking for entrepreneurial leaders to represent Wenzo Technologies in key African markets. As a State Venture Partner, you'll identify promising startups, facilitate partnerships, and help build the next generation of African tech companies.",
      responsibilities: [
        "Scout and evaluate early-stage startups",
        "Build relationships with local ecosystem",
        "Facilitate venture partnerships",
        "Represent Wenzo at industry events",
        "Support portfolio companies with strategic guidance"
      ],
      requirements: [
        "5+ years of experience in venture capital or entrepreneurship",
        "Strong network in the African startup ecosystem",
        "Track record of successful investments or exits",
        "Excellent communication and networking skills",
        "Deep understanding of local market dynamics"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Join Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Mission</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Build the future of African technology with us. We're looking for passionate individuals who want to make a meaningful impact across the continent.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Remote-first culture
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                Competitive compensation
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Professional growth
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-gray-300">
              Discover your next opportunity to shape the future of African innovation
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 relative overflow-hidden group hover:border-purple-500/40 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3">{job.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">
                          {job.location}
                        </span>
                        <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-400/30">
                          {job.type}
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                          {job.level}
                        </span>
                      </div>
                    </div>
                    
                    <motion.a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {job.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-white mb-4 text-lg">Key Responsibilities</h4>
                      <ul className="space-y-3">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-4 text-lg">Requirements</h4>
                      <ul className="space-y-3">
                        {job.requirements.map((requirement, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Join Wenzo?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                <p className="text-gray-400">Build solutions that reach millions across Africa and beyond</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                <p className="text-gray-400">Work with cutting-edge technologies and pioneering solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Amazing Team</h3>
                <p className="text-gray-400">Collaborate with talented individuals from across the continent</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Don't see a role that fits?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're always interested in connecting with talented individuals who share our vision for the future of African technology.
            </p>
            <motion.a
              href="https://tally.so/r/wbQ1Y1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-lg font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}