import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const experiences = [
    {
      company: 'Verithra',
      role: 'Data Analytics Intern',
      period: 'Oct 2024 - Jun 2025',
      highlights: [
        'Worked with raw datasets, performed data cleaning, and automated consistency checks to improve data quality',
        'Strengthened debugging mindset and structured problem-solving while collaborating with engineering teams',
        'Applied analytical thinking to identify patterns and anomalies in large datasets',
        'Documented processes and created reusable scripts to streamline repetitive tasks',
        'Developed strong communication skills working with cross-functional technical teams',
      ],
    },
    {
      company: 'Elevate Labs',
      role: 'Campaign Analytics Intern',
      period: 'Jun 2025 - Jul 2025',
      highlights: [
        ' Best Performer Award for exceptional execution, data-driven insights, and technical problem-solving',
        'Built workflow automation logic to reduce manual processes and improve efficiency',
        'Analyzed engagement data and documented issue patterns with detailed root cause analysis',
        'Enhanced analytical skills, documentation quality, and communication with technical teams',
        'Demonstrated attention to detail and systematic troubleshooting approach',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-500 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-primary-600 font-semibold">
                    {exp.company}
                    {exp.location && ` â€¢ ${exp.location}`}
                  </p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0 md:text-right">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.15 + itemIndex * 0.1 }}
                    className="flex items-start text-gray-700"
                  >
                    <span className="text-primary-500 mr-3 mt-1 text-lg">â€¢</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


