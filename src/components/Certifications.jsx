import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Certifications = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const certifications = [
    {
      name: 'Python Programming',
      issuer: 'HackerRank',
      date: 'Jun 2024',
      description: 'Advanced Python programming certification with focus on data structures, algorithms, and automation',
    },
    {
      name: 'Data Analytics & Visualization',
      issuer: 'Intellipath',
      date: 'Apr 2024',
      description: 'Comprehensive training in data analysis, pattern recognition, and analytical problem-solving',
    },
    {
      name: 'Oracle Gen AI Professional',
      issuer: 'Oracle',
      date: 'Feb 2025',
      description: 'Certification in AI-powered tools, automation workflows, and intelligent system diagnostics',
    },
    {
      name: 'AWS Cloud Foundations & Architecture',
      issuer: 'Amazon Web Services',
      date: 'Jan 2025',
      description: 'Fundamentals of cloud computing, infrastructure, and scalable system architecture',
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Certifications
        </motion.h2>

        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 px-6 py-4 rounded-full text-gray-800 font-medium shadow-md hover:shadow-lg transition-all"
            >
              {cert}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;



