import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const WhyMe = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const reasons = [
    {
      number: '01',
      title: 'Strong Technical Foundation',
      description:
        'Deep understanding of computer architecture, RISC systems, OS concepts, and low-level programming (C/C++). Built real-world diagnostic tools demonstrating hardware-software interaction knowledge relevant to IBM Power systems support.',
    },
    {
      number: '02',
      title: 'Debugging & Troubleshooting Expertise',
      description:
        'Proven experience in log analysis, fault isolation, issue replication, and system tracing. Created tools to parse /proc data, detect anomalies, and automate diagnostic tests—skills directly applicable to technical support roles.',
    },
    {
      number: '03',
      title: 'Automation & Scripting Skills',
      description:
        'Proficient in Bash, Python scripting for workflow automation, system monitoring, and productivity tools. Reduced manual errors by 60% through automation, demonstrating efficiency and reliability mindset.',
    },
    {
      number: '04',
      title: 'Analytical Mindset & Communication',
      description:
        'Best Performer Award recipient with strong analytical problem-solving skills. Excellent at documenting issues, creating SOPs, and communicating technical concepts clearly to cross-functional teams.',
    },
  ];

  return (
    <section id="why-me" className="py-24 bg-gray-100" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        >
          Why Hire Me as a Data Engineer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl p-10 shadow-lg"
        >
          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start text-gray-700 text-lg"
              >
                <span className="text-primary-500 mr-4 text-2xl font-bold"></span>
                <span>{reason}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;


