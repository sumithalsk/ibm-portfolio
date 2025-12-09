import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: 'Linux Hardware Diagnostics & Monitoring Toolkit',
      description:
        'Developed a comprehensive diagnostic tool to monitor CPU, memory, device health, and system logs. Parsed /proc and /sys data, detected anomalies, and automated tests using Bash scripts. Demonstrates deep system understanding and troubleshooting skills relevant to IBM Power hardware support.',
      tags: ['C', 'Bash', 'Linux', 'System Monitoring', 'Diagnostics'],
    },
    {
      title: 'RISC CPU Instruction Pipeline Simulator',
      description:
        'Built a simplified RISC-style CPU simulator implementing fetch–decode–execute stages, registers, ALU operations, and branching logic. Strengthened understanding of processor architecture, instruction pipelines, and low-level execution workflows.',
      tags: ['C++', 'Computer Architecture', 'RISC', 'CPU Simulation'],
    },
    {
      title: 'System Log Analyzer & Debug Assistant',
      description:
        'Created a Python tool to parse system logs, identify recurring errors, classify failure patterns, and generate summary reports. Useful for analyzing hardware and OS-level issues in support environments, reducing MTTR (Mean Time To Resolution).',
      tags: ['Python', 'Log Analysis', 'Debugging', 'Automation'],
    },
    {
      title: 'Developer Productivity Automation Scripts',
      description:
        'Automated environment setup, Git operations, and build/run processes to reduce manual errors and improve workflow reliability. Enhanced repeatability in developer workflows and documented common troubleshooting procedures.',
      tags: ['Bash', 'Python', 'Automation', 'DevOps', 'Scripting'],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-br from-white to-primary-50/50 rounded-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-primary-600 font-semibold mb-4">
                {project.tech}
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  What I learned:
                </p>
                <p className="text-sm text-gray-600 italic">{project.learning}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


