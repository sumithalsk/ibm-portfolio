import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const skillGroups = [
    {
      title: 'Programming & Scripting',
      skills: [
        'C & C++',
        'Python',
        'Java',
        'Bash Scripting',
        'JavaScript',
        'System-Level Programming',
      ],
    },
    {
      title: 'Systems & Architecture',
      skills: [
        'Computer Architecture',
        'RISC Fundamentals',
        'OS Concepts',
        'Memory Management',
        'CPU & ALU Operations',
        'Linux/Unix Systems',
      ],
    },
    {
      title: 'Debugging & Diagnostics',
      skills: [
        'Log Analysis',
        'Fault Isolation',
        'Issue Replication',
        'System Tracing',
        'Performance Monitoring',
        'Root Cause Analysis',
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        'Git & GitHub',
        'VS Code & IntelliJ',
        'Linux CLI',
        '/proc & /sys Parsing',
        'Automation Scripts',
        'Documentation',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-500">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.2 + skillIndex * 0.1,
                    }}
                    className="flex items-start text-gray-700"
                  >
                    <span className="text-primary-500 mr-2 mt-1"></span>
                    <span>{skill}</span>
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

export default Skills;


